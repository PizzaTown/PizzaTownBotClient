const Client = require('./client/Client');
const client = new Client();

client.on("ready", () => {
    console.log("Bot Online")
    client.user.setPresence({ activities: [{ name: 'with PizzaTownClient' }], status: "online"});
})

client.on("messageCreate", (message) => {
    if (message.author.bot) return;
    return message.channel.send({ content: "Testing Bot Client"})
});


client.connect("YOUR_DISCORD_BOT_TOKEN_HERE")