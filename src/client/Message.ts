import Client from "./Client"
import https from 'https';
import config from '../../config.json';

export default class MessageCreator extends Client {
    
    async send(content: string, channelID: string) {
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
}
