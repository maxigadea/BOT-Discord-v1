const {
  Client,
  GatewayIntentBits,
} = require("discord.js");
const { token } = require('./config.json');

const client = new Client({
  intents: [
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildBans,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});


client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("messageCreate", (message) => {
  if (message.content.toLowerCase() === "ping") {
    message.channel.send("Pong!");
  }

  if (message.content.toLowerCase() === "pong") {
    message.channel.send("Ping!");
  }

  if (message.content.toLowerCase() === "hackealos") {
    message.channel.send("Pasenme sus cuentas de GMAIL para NFTS Gratis!");
  }

  if (message.content.toLowerCase() === ".") {
    message.channel.send("Bueno, agarren la pala, vuelvan pronto para ver mis avances!");
  }
});


client.login(
    token
);
