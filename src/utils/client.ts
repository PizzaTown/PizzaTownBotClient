import fetch from 'node-fetch';
import https from 'https';

const discordAPI = 'https://discord.com/api/v9'

/**
 * 
 * @param token - Bot Token
 * @param name - Bot Name
 * @param channelID - Channel ID
 * @returns 
 */
export async function fetchMessageAuth(token: string, name: string, channelID: string) {
    const response = await fetch(`https://discord.com/api/v9/channels/${channelID}/messages`, {
        method: 'GET',
        headers: { "Authorization": `Bot ${token}`, "user-agent": name }
    });
    const data = await response.json();

    return console.log(data);
}