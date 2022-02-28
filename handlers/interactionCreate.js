const GuildUser = require('../structures/GuildUser');
const https = require('https');

/**
 * 
 * @param {import('../@types/client/Client').Client} client 
 * @param {*} payload 
 */

module.exports = function (client, payload) {
    const data = payload.d;
    client.emit('interactionCreate', {
        version: data.version,
        type: data.type,
        member: new GuildUser(data.member),
        locale: data.locale,
        id: data.id,
        guildLocale: data.guild_locale,
        guildId: data.guildId,
        interactionToken: data.token,
        data: {
            type: data.data.type,
            name: data.data.name,
            id: data.data.id,
        },
        channelId: data.channel_id,
        applicationId: data.application_id,
        createdTimestamp: Date.now(),
        messageId: null,
        reply(o) {
            const data = {
                type: 4,
                data: {
                    content: o.content || null,
                    tts: o.tts || false,
                    embeds: o.embeds || [],
                    components: o.components || [],
                    allowed_mentions: {
                        parse: []
                    }
                }
            }
            if (typeof o === 'string') {
                data.data.content = o;
            }

            client.rest.run(`/api/v10/interactions/${this.id}/${this.interactionToken}/callback`, data, "POST");
        },
        editReply(o) {
            const data = {
                    content: o.content || null,
                    tts: o.tts || false,
                    embeds: o.embeds || [],
                    components: o.components || [],
                    allowed_mentions: {
                        parse: []
                    }
            }
            if (typeof o === 'string') {
                data.content = o;
            }

            client.rest.run(`/api/v10/webhooks/${this.applicationId}/${this.interactionToken}/messages/@original`, data, "PATCH");
        },
        channel: {
            id: data.channel_id,
            async send(o) {
                const d = {
                    content: o.content || null,
                    tts: o.tts || null,
                    embeds: o.embeds || null,
                    components: o.components || null,
                }
                if (typeof o === 'string') {
                    d.content = o;
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

                req.write(JSON.stringify(d))
                req.end()
            }
        }
    });
};