import config from '../config.json';
import Client from "./client/Client";
import { WebSocketEnum } from './constants/enums';
import https from 'https';

const client = new Client();

client.on('ready', () => {
    console.log('Bot has logged in!')
});

client.on('messageCreate', async (message) => {
    console.log(message.content);
    console.log(message.channel_id)
    if (message.content === 'Testing') {
        await createMessage('This is Rocky\'s Own Discord Bot Library working!', message.channel_id)
    };
})
client.connect(config.token.beta);

async function createMessage(content: string, channelID: string) {
    const data = {
        content,
        tts: false
    }

    const options = {
        hostname: 'discord.com',
        port: 443,
        path: `/api/v9/channels/${channelID}/messages`,
        method: 'POST',
        headers: {
            "Content-Type": 'application/json',
            "Authorization": `Bot ${config.token.beta}`
        },
    }

    const req = https.request(options, res => {
        res.on('data', d => {
            process.stdout.write(d)
        })
    })

    req.on('error', error => {
        console.error(error)
    })

    req.write(JSON.stringify(data))
    req.end()
}