const Discord = require("discord.js")
const moment = require("moment")
require("moment-duration-format")

moment.locale("tr") // tr

module.exports.run = async function(client, message, args) {

const guild = message.guild;
const user = message.author;

const embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor(guild.name, guild.iconURL)
.setThumbail(guild.iconURL)
.setFooter(`${user.username} tarafından kullanıldı. | ` + moment(new Date()).add(3, "hours").format("LLLL"))
.addField("**Sunucu Adı:**", `**${guild.name}**`)
.addField('**Sunucu Sahibi:**', `**<@${guild.ownerID}> (${guild.ownerID})**`)
.addField('**Üye Sayısı**', `**${guild.members.size}**`)
.addField('**Sunucu Oluşurulma Tarihi:**', "**" + moment(message.guild.createdAt).add(3, "hours").format("LLLL") + "**")
.addField("**Sunucuya Katılma Tarihin:**", "**" + moment(user.joinedAt).add(3, "hours").format("LLLL") + "**")

return message.channel.sendEmbed(embed)
}
exports.conf = { 

enabled: true,
guildOnly: true, 
aliases: ['sunucu-bilgi','sb'],
permLevel: 0
 }; 

exports.help = { 
name: 'sunucubilgi', 
description: 'Sunucu hakkında bilgi verir..', 
usage: 'sunucubilgi' 
};