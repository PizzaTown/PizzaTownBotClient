
/**
 * 
 * @param {import('../@types/client/Client').Client} client 
 * @param {*} payload 
 */
/*function readyEvent(client) {
    client.emit('ready');
} */

module.exports = function (client) {
    client.emit('guildCreate');
};