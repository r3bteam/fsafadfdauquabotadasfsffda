const db = require('../database.js');

exports.run = (Sysop, message, suffix) => {

db.Guilds.findOne({"_id": message.guild.id}, function(erra, sysop) {


if (!message.member.hasPermission('ADMINISTRATOR', 'MANAGE_MESSAGES')) 
return message.reply(':no_entry_sign: Desculpe, este comando está disponível apenas para cargos administrativos do servidor.');
    

const Discord = require("discord.js")
const embed = new Discord.RichEmbed()
.setTitle(`Sugestões | Modo de uso:`)
.setAuthor(message.author.username+'#'+message.author.discriminator)
.setDescription(`Hey ${message.author.username},\nCanal de sugestão, como usar:\nUse \`${sysop.setprefix}sugestao\` on <#channel> para definir um canal de sugestões\nUse \`${sysop.setprefix}sugestao off\` para desativar o canal de sugestão.\n\nO canal de sugestões é onde o bot vai reagir com emojis próprios para pessoas votarem em alguma sugestão dada por alguém que tenha acesso ao mesmo.`)
.setThumbnail(message.author.avatarURL)
.setImage('https://cdn.discordapp.com/attachments/485376421271961600/496016261680201728/unknown.png')
.setFooter(message.guild.name)
.setColor('#15ffaf');

 if(!suffix[0]) return  message.channel.send({embed}) 

    if (sysop) {
switch (suffix[0]){
	
case 'on': {
    if (!message.member.hasPermission('ADMINISTRATOR', 'MANAGE_MESSAGES')) 
return message.reply(':no_entry_sign: Desculpe, este comando está disponível apenas para cargos administrativos do servidor.');
  if (!message.mentions.channels.first()) {
   if (sysop && sysop.sugest)                 
                return message.channel.send('Pronto! Agora as mensagens serão reagidas em: <#' + sysop.sugest + '>');
            else
            return message.channel.send('Mencione um canal para definir como sugestão!');
        } else { 
            if (!sysop) 
                sysop = {};
            sysop.sugest = message.mentions.channels.first().id;
            sysop.save();
            return message.channel.send('Canal de sugestões definido com sucesso!');
        }}

        case 'off': {
if (!message.member.hasPermission('ADMINISTRATOR', 'MANAGE_MESSAGES')) 
return message.reply(':no_entry_sign: Desculpe, este comando está disponível apenas para cargos administrativos do servidor.');
    
sysop.sugest = "";
sysop.save();
message.channel.send('Canal de sugestões desativado.');
        
 }}} else { 
	var server = new db.Guilds({
            _id: message.guild.id,
             convites: false,
             sugest: '',
        });
        server.save();
        message.reply("💥 Use o comando novamente");
}});
};