const Discord = require('discord.js');
const client = new Discord.Client();

client.on("ready", () => {
  console.log("Vulnix | Logged in! Server count: ${client.guilds.size}");
  client.user.setGame(`bot arab dz |${prefix}help |→ ${prefix}inv`);
});

 
 client.on('guildMemberRemove', member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
سلام عليكم يا قلبي 
لو سمحت طالبك طلب تكقا ادخل السيرفر
                               [ https://discord.gg/zXwB9Kk] 
الدعووة خاصة لك ي قلبي ... [ ${member}  ]
**`)
}).catch(console.error)

})
 
client.on('guildMemberAdd', member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
سلام عليكم يا قلبي 
لو سمحت طالبك طلب تكقا ادخل السيرفر
                               [ https://discord.gg/zXwB9Kk] 
الدعووة خاصة لك ي قلبي ... [ ${member}  ]
**`) 
}).catch(console.error)
})
client.login(process.env.BOT_TOKEN);
