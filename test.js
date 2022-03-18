const Client = require('./client/Client');
const client = new Client();

client.once("ready", () => {
    console.log("Bot Online")
    client.user.setPresence({ activities: [{ name: 'with PizzaTownBotClient' }], status: "online" });
})

/**
 * @param {import('./@types/structures/Messages').TextChannelMessage} message
 */
client.on("messageCreate", async (message) => {
    console.log(message);
    if (message.author.bot) return;
    if (message.channel.id !== '889928301366366210') return; //Uncomment this Line and change '889928301366366210' to be any channel you want to limit message commands to that channel.
    console.log(message.content);
    if (message.content === '!!ping') {
        return message.channel.send('Ping?');
        /*m.edit(
          `Pong! Latency is ${m.createdTimestamp - message.createdTimestamp
          }ms. API Latency is ${Math.round(client.socket.ping)} ms`,
        );
        return;*/
    }
    return message.channel.send("Testing Bot Client")
});

client.on("interactionCreate", async (interaction) => {
    if (interaction.data.name === 'ping') {
        await interaction.reply({ content: 'Ping?', fetchReply: true })
        console.log(client.socket.ping);
        interaction.editReply(`Pong! Latency is ${Date.now() - interaction.createdTimestamp} ms. API Latency is ${Math.round(client.socket.ping)} ms`,)
    }
})


client.connect("YOUR_DISCORD_BOT_TOKEN_HERE")