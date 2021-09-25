import Client from "../client/Client";
import ClientUser from "../client/ClientUser";
import { Payload } from "../interfaces/payloads";

export default function(client: Client, payload: Payload) {
    const msg = payload.d;
    client.emit('messageCreate', {
        content: msg.content,
        channel: {
            id: msg.channel_id
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
        attachments: msg.attachements || []
    });
}