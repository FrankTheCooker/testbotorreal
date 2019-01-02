const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log(`Launched. Defined as BOT. Username is ${client.user.username}.`);
  client.user.setStatus('online');
  client.user.setActivity('for tests', {type: 'WATCHING'});
  
    client.login(process.env.BOT_TOKEN);
