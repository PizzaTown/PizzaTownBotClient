import config from '../../config.json';
import Client from "../client/Client";
import { TextChannelMessage } from '../interfaces/Message';

const client = new Client();
const newlineSpaceRegex = /\n +/g;
function dedent(multilineString: string): string {
    return multilineString.replace(newlineSpaceRegex, '\n').trim();
}

client.on('ready', () => {
    console.log('Bot has logged in!')
});

client.on('messageCreate', async (message) => {
    console.log(message)
    if (message.guild.id !== '746435442521538730') return;
    if (message.content === 'Testing') {
        await message.channel.send('This is Rocky\'s Own Discord Bot Library working!')
    };
    if (message.content === 'Avatar') {
        await message.channel.send(message.author.displayAvatar())
    }
    if (message.content === 'Embed') {
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
})
client.connect(config.token.beta);
