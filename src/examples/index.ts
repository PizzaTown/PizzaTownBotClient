import config from '../../config.json';
import Client from "../client/Client";
import MessageCreator from '../client/Message';
import { TextChannelMessage } from '../interfaces/Message';

const client = new Client();
const msg = new MessageCreator()
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
        await msg.send('This is Rocky\'s Own Discord Bot Library working!', message.channel.id)
    };
    if (message.content === 'Avatar') {
        await msg.send(message.author.displayAvatar(), message.channel.id)
    }
})
client.connect(config.token.beta);
