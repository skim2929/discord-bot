const Discord = require("discord.js");
require("dotenv").config();
const TOKEN = "OTYwNzU1MjMxNDQzMDIxODY1.YkvDCQ.LFRbbXSBC-jv2wfXrPbd1bH5tWU";
const client = new Discord.Client({
  intents: ["GUILDS", "GUILD_MESSAGES"],
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on("messageCreate", (message) => {
  if (message.content == "hi") {
    message.reply("Hello World!");
  }
});
client.login(process.env.TOKEN);
