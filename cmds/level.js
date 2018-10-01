const Discord = require("discord.js");
const db = require("../database.js")

exports.run = (sysop, message, suffix) => {

db.Guilds.findOne({"_id": message.guild.id}, function(erro, sysop) {

if (sysop) {
	
if (!message.member.hasPermission('ADMINISTRATOR')) 
return message.reply('<:xguardian:476061993368027148> Opa! Para utilizar este comando é necessário que você tenha permissões de Administrador.');
   


const Discord = require("discord.js")
const embed = new Discord.RichEmbed()
.setTitle(`Sistema de Level | Enabled or Disabled, como usar?`)
.setAuthor(message.author.username+'#'+message.author.discriminator)
.setDescription(`Use:\n\n\`${sysop.setprefix}level on\` - Para ativar o sistema de level na guilda.\n\`${sysop.setprefix}level off\` - Para desativar o sistema de level na guilda.`)
.setThumbnail(message.author.avatarURL)
.setFooter(message.guild.name)
.setColor('#15ffaf');

 if(!suffix[0]) return  message.channel.send({embed})   
      
switch (suffix[0]){
	
case 'on': {

if (!message.member.hasPermission('ADMINISTRATOR')) 
return message.reply('<:xguardian:476061993368027148> Opa! Para utilizar este comando é necessário que você tenha permissões de Administrador.');
   	
	
sysop.upar  = true ;
sysop.save();
message.channel.send(`:white_check_mark: | Ok ${message.author} você ativou o sistema de levels.`) ;
	return;
}
case 'off': {

if (!message.member.hasPermission('ADMINISTRATOR')) 
return message.reply('<:xguardian:476061993368027148> Opa! Para utilizar este comando é necessário que você tenha permissões de Administrador.');
    	
	
sysop.upar  = false ;
sysop.save();
message.channel.send(`:no_entry_sign: | Ok ${message.author} você desativou o sistema de levels.`) ;
	return;
}}} else {
    var server = new db.Guilds({
            _id: message.guild.id,
             convites: false,
             sugestao: '',
             welcome: '',
             words: [],
             autorole: '',
             welcomeChannel: '',
             byeChannel: '',
             dm: '',
             nivel: 0,
             exps: 0,
             upa: true,
        });
        server.save();
        message.reply('<:SysopLogoEMOI:439565791357042700> Um histórico foi criado. Use o comando novamente!');
}
});    
};