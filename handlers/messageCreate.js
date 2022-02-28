const https = require('https');

/**
 * 
 * @param {import('../@types/client/Client').Client} client 
 * @param {*} payload 
 * 
 * @returns {import('../@types/structures/Messages').TextChannelMessage} TextChannelMessage Data
 */
module.exports = function (client, payload) {
    const msg = payload.d;
    client.emit('messageCreate', {
        content: msg.content,
        channel: {
            id: msg.channel_id,
            /**
             * 
             * @param {import('../@types/structures/Messages').MessageData} o 
             * 
             * Send a message to Discord via the REST API!
             */
            async send(o) {
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
                    path: `/api/v10/channels/${this.id}/messages`,
                    method: 'POST',
                    headers: {
                        "Content-Type": 'application/json',
                        "Authorization": `Bot ${client.getAuth}`
                    },
                }

                const req = https.request(options, (res) => {
                    res.on('data', (d) => {
                    })
                })

                req.on('error', (error) => {
                    console.error(error)
                })

                req.write(JSON.stringify(data))
                req.end()
            }
        },
        guild: {
            /** @type {import('../@types/client/Client').Snowflake} Guild ID Snowflake */
            id: msg.guild_id
        },
        timestamp: msg.timestamp,
        member: {
            roles: msg.member.roles,
            nickname: msg.member.nick,
        },
        /** @type {import('../@types/client/Client').Snowflake} Message ID Snowflake */
        id: msg.id,
        /** @type {import('../@types/structures/Messages').MessageEmbed} Message Embed Component */
        embeds: msg.embeds,
         /** @type {import('../@types/structures/Messages').MessageComponents} Message Components like Buttons */
        components: msg.components,
        author: {
            username: msg.author.username,
            id: msg.author.id,
            discriminator: msg.author.discriminator,
            avatar: msg.author.avatar,
            bot: msg.author.bot,
            displayAvatar(size = 1024) {
                return `https://cdn.discordapp.com/avatars/361212545924595712/${this.avatar}.webp?size=${size}`
            }
        },
        attachments: msg.attachements || [],
    });
}
