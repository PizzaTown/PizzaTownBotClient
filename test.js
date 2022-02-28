const Client = require('./client/Client');
const client = new Client();

client.once("ready", () => {
    console.log("Bot Online")
    client.user.setPresence({ activities: [{ name: 'with PizzaTownBotClient' }], status: "online"});
})

client.on("messageCreate", (message) => {
    if (message.author.bot) return;
    return message.channel.send({ content: "Testing Bot Client"})
});

client.on("interactionCreate", (interaction) => {
    console.log(interaction.data);
    console.log(interaction.member.user)
})


client.connect("YOUR_DISCORD_BOT_TOKEN_HERE")