const Discord = require('discord.js');

exports.run = (client, message) => {
  
  const davet = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setDescription(`MESAJINIZ

[Bot Davet](https://discord.com/oauth2/authorize?client_id=719381957934448740&scope=bot&permissions=36701448) 
 
[Destek Sunucusu](https://discord.gg/Hpv3pNw)`)
  message.channel.send(davet)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
}
exports.help = {
  name: "davet"
}