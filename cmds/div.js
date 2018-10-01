const Discord = require('discord.js');

exports.run = (Sysop, message, args) => {

    
  let oi = message.mentions.users.first() ? message.mentions.users.first().id : message.author.id ; 
  let img = message.mentions.users.first() ? message.mentions.users.first().username : message.author.username;
  let imagemm = message.mentions.users.first() ? message.mentions.users.first().avatarURL : message.author.avatarURL
  
  message.guild.fetchInvites().then(invs => {
    let member = Sysop.guilds.get(message.guild.id).members.get(oi);
    let personalInvites = invs.filter(i => i.inviter.id === oi);
    let urll = invs.filter(i => i.inviter.id === oi);
    let link = urll.reduce((p , v) => v.url +` , Total de membros recrutados no convite: ${v.uses}.\n`+ p, `\nServidor: ${message.guild.name} \n `);
    
    let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
   
let possibleInvites = [['Total de membros recrutados:']];
possibleInvites.push([inviteCount]);

const embed = new Discord.RichEmbed()
.setAuthor(img)
.addField('🏆 Total de usos de convite',  `Você convidou um total de \`\`${Number(inviteCount)}\`\` membros. `,true)
.setThumbnail(imagemm)
.setColor('#15ffaf');


message.channel.send({ embed });

});
  
};