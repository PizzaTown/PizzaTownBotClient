const GuildUser = require('../structures/GuildUser');

/**
 * 
 * @param {import('../@types/client/Client').Client} client 
 * @param {*} payload 
 */
/*function readyEvent(client) {
    client.emit('ready');
} */

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
        data: {
            type: data.data.type,
            name: data.data.name,
            id: data.data.id,
        },
        channelId: data.channel_id,
        applicationId: data.application_id
    });
};