import fetch from 'node-fetch';
const discordAPI = 'https://discord.com/api/v9'

/**
 * 
 * @param token - Bot Token
 * @param name - Bot Name
 * @param channelID - Channel ID
 * @returns Message Array from Channel
 */
async function fetchMessage(token: string, name: string, channelID: string): Promise<Message[]> {
    const response = await fetch(discordAPI+`/channels/${channelID}/messages`, {
        method: 'GET',
        headers: { "Authorization": `Bot ${token}`, "user-agent": name }
    });
    const data: any = await response.json();

    return data;
}
/**
 * 
 * @param token - Bot Token
 * @param name - Bot Name
 * @param channelID - Channel ID
 * @returns Latest Message from Channel
 */
async function fetchLatestMessage(token: string, name: string, channelID: string): Promise<Message> {
    const messageArray: Message[] = await fetchMessage(token, name, channelID);
    
    const latestMessage = messageArray[0]

    return latestMessage;
}
async function fetchMessageSpecific(token: string, name: string, channelID: string, messageID: string): Promise<Message> { 
    const response = await fetch(discordAPI+`/channels/${channelID}/messages/${messageID}`, {
        method: 'GET',
        headers: { "Authorization": `Bot ${token}`, "user-agent": name }
    });
    const data: any = await response.json();

    return data;
}

export { fetchMessage, fetchLatestMessage, fetchMessageSpecific }
