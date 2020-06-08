const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
var prefix = ayarlar.prefix
exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('#FF0000')
.setTitle('» Jik0 Music Bot Yardım ')
.setTimestamp()
.addField('» -Çal- Play- Müzik Dinlersiniz', prefix + 'çal ')
.addField('» -Ses- Müziğin Sesin Ayarlarsınız', prefix + 'ses 1/100')
.addField('» -Çalan- Çalan Şarkı Hakkında Bilgi Verir', prefix + 'çalan')
.addField('» -Duraklat- Şarkıyı Durdurursunuz', prefix + 'duraklat')
.addField('» -Devam- Şarkıyı Devam Ettirirsiniz', prefix + 'devam')
.addField('» -Sıra- Kuyruğu Görürsünüz', prefix + 'sıra')
.addField('» -Ayrıl- Botu Ses Kanalından Atarsınız', prefix + 'ayrıl')
.addField('» -YavaşMod- Ayarladığınız Metin Kanalına Yavaş Mod Ekler',prefix + 'slowmode')
.addField('» -Davet- Jik0 Music Bot Hakkında Bilgi',prefix + 'davet')
.addField('» -Sil- Mesajları Silme En Fazla 100 Mesaj Siler', prefix + 'sil')
.setFooter('© 2020 Jik0  Muzik', client.user.avatarURL)
.setTimestamp()
.setThumbnail(client.user.avatarURL)
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['y','yardım','müzik','muzik','komutlar','help','h'], 
  permLevel: 0 
};

exports.help = {
  name: 'müzik',
  description: 'Tüm komutları gösterir.',
  usage: 'müzik'
};