const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome Again !");
 
 client.on("guildMemberRemove", member => {
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
 
client.on("guildMemberAdd", member => {
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
client.login('NTE2MzcxMTQ0MDc3NzM3OTg0.DxkWzw.KzS8fKtZ_Z-WAtTZIqvM0zQ7viQ');