import config from '../../config.json';
import Client from "../client/Client";
import { Message } from '../@types';

const client = new Client();
const newlineSpaceRegex = /\n +/g;
function dedent(multilineString: string): string {
    return multilineString.replace(newlineSpaceRegex, '\n').trim();
}

client.on('ready', () => {
    console.log('Bot has logged in!')
});

const prefix = '!!';

function sanitizeMessage(prefix: string, messageContent: string): string {
    return messageContent
      .replace('/ +/g', ' ')
      .replace(prefix, '')
      .trim();
  }

client.on('messageCreate', async (message: Message) => {
    if (message.guild.id !== '746435442521538730') return;
    if (message.author.bot) return;
    const [commandName, ...args] = sanitizeMessage(prefix, message.content).split(' ');
    if (commandName === 'Testing') {
        await message.channel.send('This is Rocky\'s Own Discord Bot Library working!')
    };
    if (commandName === 'Avatar') {
        await message.channel.send(message.author.displayAvatar())
    }
    if (commandName === 'Embed') {
        await message.channel.send({embeds: [{
            color: parseInt('#13d6c9'.replace('#', ''), 16),
            title: 'Donate to PizzaTown!',
            description: dedent(`
            Donate to Rocky to help support the bot and keep it online so you can sell more pizzas!
    
            Want to get awesome perks for yourself, such as extra toppings and money? Visit the **[PizzaTown Website](https://pizzatown.ml/donate)** to get a donator package!
            
            You can check out the perks on **[Patreon](https://www.patreon.com/PizzaTown)**! This is for a server that you can choose after paying.
            
            Thank you for donating and join the **[Support Server](https://discord.gg/rdGrcvW)** to chat, get xp and gain the discord perks from **Patreon** and the **[PizzaTown Website](https://pizzatown.ml/donate)**!`),
          }]})
    }
    if (commandName.toLowerCase() === 'msg-args') await message.channel.send(`${args[0]}`)
})

client.on('guildCreate', (guild) => {
})
client.connect(config.token.beta);
