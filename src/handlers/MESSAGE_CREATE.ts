import Client from "../client/Client";
import ClientUser from "../client/ClientUser";
import { TextChannelMessage } from "../interfaces/Message";
import { Payload } from "../interfaces/payloads";
import https from 'https'

export default function(client: Client, payload: Payload) {
    const msg = payload.d;
    client.emit('messageCreate', {
        content: msg.content,
        channel: {
            id: msg.channel_id,
            async send(o: TextChannelMessage) {
                const data = {
                    content: o.content || null,
                    tts: o.tts || null,
                    embeds: o.embeds || null,
                    components: o.components || null,
                }
                if (typeof o === 'string') {
                    data.content = o;
                }
            
                const options = {
                    hostname: 'discord.com',
                    port: 443,
                    path: `/api/v9/channels/${this.id}/messages`,
                    method: 'POST',
                    headers: {
                        "Content-Type": 'application/json',
                        "Authorization": `Bot ${client.getAuth}`
                    },
                }
            
                const req = https.request(options, (res: any) => {
                    res.on('data', (d: any) => {
                        process.stdout.write(d)
                    })
                })
            
                req.on('error', (error: string) => {
                    console.error(error)
                })
            
                req.write(JSON.stringify(data))
                req.end()
            }
        },
        guild: {
            id: msg.guild_id
        },
        timestamp: msg.timestamp,
        member: {
            roles: msg.member.roles,
            nickname: msg.member.nick,
        },
        id: msg.id,
        embeds: msg.embeds,
        components: msg.components,
        author: {
            username: msg.author.username,
            id: msg.author.id,
            discriminator: msg.author.discriminator,
            avatar: msg.author.avatar,
            displayAvatar(size: number = 1024) {
                return `https://cdn.discordapp.com/avatars/361212545924595712/${this.avatar}.webp?size=${size}`
            }
        },
        attachments: msg.attachements || [],
    });
}