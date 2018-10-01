exports.run = (Sysop, message, suffix) => {
   
   
const db = require("../database.js")
db.Guilds.findOne({"_id": message.guild.id }, function(erra, sysop) {


const Discord = require("discord.js")
const embed = new Discord.RichEmbed()
.setTitle(`TAG | Discriminator Search | Modo de uso:`)
.setAuthor(message.author.username+'#'+message.author.discriminator)
.setDescription(`**Use:** ${sysop.setprefix}descrim <0001> (Troque por outra tag aleatória)`)
.setThumbnail(message.author.avatarURL)
.setFooter(message.guild.name)
.setColor('#15ffaf');

 if(!suffix[0]) return  message.channel.send({embed}) 
    
 
   if (!/^\d{4}$/.test(suffix[0])) {
  }

  let members = message.guild.members.filter(m => m.user.discriminator === suffix[0]).map(m => m.user);
  let total = members.length;
  members = members.length > 0 ? members.slice(0, 10).join(', ') : 'None';

  message.channel.send({
    embed: {
      color: 0x4959e9,
      title: 'Discriminator search',
      description: `Encontrado **${total}** usuários com discriminator **${suffix[0]}**`,
      fields: [
        {
          name: 'Usuários',
          value: total > 10 ? `${members} and ${total - 10} more.` : members
        }
      ]
    }
  }).catch(e => {
    console.log.error(e);
  });
});
};