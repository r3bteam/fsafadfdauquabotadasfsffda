const Discord = require("discord.js");
const db = require("../database.js")

exports.run = (Sysop, message, suffix) => {


if (!message.member.hasPermission('ADMINISTRATOR'))
return message.channel.send(":x: Você não tem permissão para utilizar este comando!");


db.Guilds.findOne({"_id": message.guild.id }, function(erra, sysop) {

var embed = new Discord.RichEmbed()
.setTitle(`Create Role | Modo de usar:`)
.setAuthor(message.author.username+'#'+message.author.discriminator)
.setDescription(`${sysop.setprefix}createrole <nome do cargo> <cor>\nExemplo: **${sysop.setprefix}createrole Administrador vermelho**`)
.setImage('https://cdn.discordapp.com/attachments/485376421271961600/495735034574012417/unknown.png')
.setThumbnail(message.author.avatarURL)
.setFooter(message.guild.name)
.setColor('#15ffaf');

if(!suffix[0]) return message.channel.send({embed});


var setColor = {
    'vermelho': 0xff090f,
    'azul': 0x4266f9,
    'amarelo': 0xf2e439,
    'preto': 0x000000,
    'branco': 0xffffff,
    'roxo': 0x5500aa,
    'verde-lima': 0xcafb6f,
    'verde': 0x39ee0d,
    'rosa': 0xea0075,
    'cinza': 0x858585,
    'laranja': 0xff8000
};



if (!setColor[suffix[1]])
return message.reply(`Defina uma cor para o cargo. As cores disponíveis são: **${Object.keys(setColor).join(', ')}**`);


 message.guild.createRole({
    name: suffix[0], 
    permissions: 104139840, 
    mentionable: true,
    color: setColor[suffix[1]]
    
});

  var embed = new Discord.RichEmbed() 

          .setTitle(`Cargo criado no servidor.`)
          .setThumbnail(message.guild.iconURL)
          .setDescription(`:pencil: CARGO CRIADO\n\nCargo ${suffix[0]} criado com sucesso.\nCom a cor **${suffix[1]}**\nPermissões: **104139840**`)
          .setColor(setColor[suffix[1]]);

          message.channel.send({embed});
})
};