const Discord = require("discord.js");

exports.run = (Sysop, message, suffix) => {
      
if (!message.member.hasPermission('BAN_MEMBERS')) 
return message.reply('<:FalseSysop3:462306755150479372> Desculpe, você não tem permissão de banir usuário neste servidor!');

if (!message.member.hasPermission("MANAGE_GUILD")) 
return message.channel.send("<:FalseSysop3:462306755150479372> Opa! Parece que você não tem permissão de utilizar este comando. Tente adicionar a permissão de Gerencisamento de Servidor a você.");
 
if (!message.guild.member(Sysop.user).hasPermission('MANAGE_GUILD')) 
return message.reply('<:FalseSysop3:462306755150479372>  Desculpe, não posso fazer isso. É necessario que eu tenha permissão de Gerencisamento de servidor.')
    
    
            let args = suffix
            let sysop =  args.slice(1).join(' ') 
            ? args.slice(1).join(' ')
            :  "Recebeu uma anistia sem colocar o motivo.";

let id = message.mentions.users.first()

    ? message.mentions.users.first().id 

    : args
    ? args[0]
    : null;
if (!id) return message.reply('Especifique um ID do usuário a receber Desban');
let user = Sysop.users.has(id) ? Sysop.users.get(id) : null;
if (!user) return message.reply("<:FalseSysop3:462306755150479372> Não encontrei nenhum usuário");
let unban = message.guild.unban(id);
if (unban) {  

} else {

    message.guild.unban(user, sysop);
    let server = message.guild;
    const embed1 = new Discord.RichEmbed()
    .setTitle(`🌟 ANISTIA 🌟`)
    .addField(`Usuário que recebeu desban`, user)
    .addField(`**Motivo:**`, sysop)
    .addField(`Recebeu anistia do servidor:`, server.name)
    .addField(`**Executor Responsável pelo desban**`, message.author)
    .setThumbnail(user.avatarURL)
    .setColor('#81e77f')
    message.channel.send({embed1});
    user.send({embed1})
}
if (user) {

   
    message.guild.unban(user, sysop);
    let server = message.guild
     const embed = new Discord.RichEmbed()
    .setTitle(`🌟 UNBAN 🌟`)
    .addField(`Usuário que recebeu desban`, user)
    .addField(`**Motivo:**`, sysop)
    .addField(`Recebeu anistia do servidor:`, server.name)
    .addField(`**Executor Responsável pelo desban**`, message.author)
    .setThumbnail(user.avatarURL)
    .setColor('#81e77f')
    message.channel.send({embed});
    user.send({embed})
} else {
    message.reply('<:FalseSysop3:462306755150479372> Não encontrei nenhum usuário. Talvez ele não esteja em nenhum servidor compartilhado comigo.');

}

};
