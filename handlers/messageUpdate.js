
/**
 * 
 * @param {import('../@types/client/Client').Client} client 
 * @param {*} payload 
 */

module.exports = function (client) {
    client.emit('messageUpdate');
};