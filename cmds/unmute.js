exports.run = (Sysop, message, suffix) => {

const Discord = require("discord.js");  
const SysopRole = '🔇 Sysop Mute'

let user = message.mentions.users.first();
let role = message.guild.roles.find('name', SysopRole)
let args = suffix
let sysop =  args.slice(1).join(' ')
 
 ? args.slice(1).join(' ')
 :  "Não especificado.";


if (!message.member.hasPermission("MUTE_MEMBERS")) 
return message.channel.send(`<:xguardian:476061993368027148> Opa ${message.author}! Você não tem a permissão **Silenciar Membros** !`);

let id = message.mentions.users.first()

    ? message.mentions.users.first().id 

    : args
    ? args[0]
    : null;
if (!id) return message.reply('<:sysalerta:469789950938841088> Mencione alguém ou especifique um ID.');


if (message.guild.member(user).roles.has(role)) 
return message.channel.send(`<:sysalerta:469789950938841088> Woww ${message.author}! Não consegui desmutar este usuário, verifique minhas permissões.`);

message.guild.member(user).removeRole(role);
message.channel.send(`\`🔔\` | Usuário ${user} foi desmutado por ${message.author}. **Motivo:** ${sysop}`);
  
            };