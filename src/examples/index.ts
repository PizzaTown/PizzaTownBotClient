import config from '../../config.json';
import Client from "../client/Client";
import MessageCreator from '../client/Message';
import { TextChannelMessage } from '../interfaces/Message';

const client = new Client();
const msg = new MessageCreator()

client.on('ready', () => {
    console.log('Bot has logged in!')
});

client.on('messageCreate', async (message: TextChannelMessage) => {
    if (message.guild_id !== '746435442521538730') return;
    if (message.content === 'Testing') {
        await msg.send('This is Rocky\'s Own Discord Bot Library working!', message.channel_id)
    };
})
client.connect(config.token.beta);
