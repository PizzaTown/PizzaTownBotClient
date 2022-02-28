const Client = require('./client/Client');
const client = new Client();

client.once("ready", () => {
    console.log("Bot Online")
    client.user.setPresence({ activities: [{ name: 'with PizzaTownBotClient' }], status: "online" });
})

client.on("messageCreate", (message) => {
    if (message.author.bot) return;
    //if (message.channel.id !== '889928301366366210') return; //Uncomment this Line and change '889928301366366210' to be any channel you want to limit message commands to that channel.
    return message.channel.send("Testing Bot Client")
});

client.on("interactionCreate", async (interaction) => {
    if (interaction.data.name === 'ping') {
        await interaction.reply({ content: 'Ping?', fetchReply: true })
        interaction.editReply(`Pong! Latency is ${Date.now() - interaction.createdTimestamp} ms. API Latency is ${Math.round(client.socket.ws.ping)} ms`,)
    }
})


client.connect("YOUR_DISCORD_BOT_TOKEN_HERE")