let db = require("../database.js");
const Discord = require("discord.js");

exports.run = (Sysop, message, args) => {
    
message.delete();

 if (!message.member.hasPermission("BAN_MEMBERS")) 
 return message.channel.send("<:xguardian:476061993368027148> Opa! Parece que você não tem permissão de utilizar este comando. Tente adicionar a permissão de Banir a você.");
 
 if (!message.guild.member(Sysop.user).hasPermission('MANAGE_ROLES')) 
 return message.reply('<:xguardian:476061993368027148> Desculpe, não posso fazer isso. É necessario que eu tenha permissão de Gerenciamento de Cargos.');
     
       message.channel.overwritePermissions(message.guild.id, {
        
              SEND_MESSAGES: false,
              ADD_REACTIONS: false
              
   });
    message.channel.send(`:no_entry: | Canal bloqueado.`);
};