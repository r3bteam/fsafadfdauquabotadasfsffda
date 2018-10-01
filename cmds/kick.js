const db = require("../database.js")


exports.run = (Sysop, message, args) => {

let user = message.mentions.users.first();
let razon = args[1]

var perms = message.member.hasPermission("KICK_MEMBERS");

if(!perms) return message.channel.send("`Error` `|` Você não tem permissão para utilizar este comando.");
if (message.mentions.users.size < 1) 
db.Guilds.findOne({"_id": message.guild.id }, function(erra, sysop) {


const Discord = require("discord.js")
const embed = new Discord.RichEmbed()
.setTitle(`Kick | Modo de uso:`)
.setAuthor(message.author.username+'#'+message.author.discriminator)
.setDescription(`Use \`${sysop.setprefix}kick\` @pessoa <motivo>`)
.setThumbnail(message.author.avatarURL)
.setImage('https://cdn.discordapp.com/attachments/485376421271961600/495779663654682652/unknown.png')
.setFooter(message.guild.name)
.setColor('#15ffaf');

return message.channel.send(embed)

const adriano = message.guild.member(user)
if (adriano.highestRole.position >= message.member.highestRole.position) 
return message.reply("Você não pode expulsar este usuário pois seu cargo é igual ou menor do que o mesmo.")        
        
if (!razon) return message.channel.send(`Escreva um Motivo, \`${sysop.setprefix}kick @username [motivo]\``);
if (!message.guild.member(user).kickable) return message.reply('Falha no comando.');
     
message.guild.member(user).kick(razon);
message.channel.send(`**${user}** foi kick do servidor. Motivo: ${razon}.`);
})
            }