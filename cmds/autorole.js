const database = require("../database.js");

exports.run = (Sysop, message, suffix) => {
  
if (!message.member.hasPermission('ADMINISTRATOR', 'MANAGE_MESSAGES')) 
return message.reply('<:xguardian:476061993368027148> Opa! É preciso que você tenha permissões de Administrador ou Gerenciador de Mensagens para utilizar este comando.');
    
      
let args = suffix
let mensagem = suffix;
let user = message.mentions.users.first() ? message.mentions.users.first() : message.author;

/*if (!message.mentions.roles.first() && !args[0]) 
return message.channel.send(`${message.author} mencione a role. Mais infos, utilize **sy!autorole help**`)*/

const db = require("../database.js")
db.Guilds.findOne({"_id": message.guild.id }, function(erra, sysop) {


const Discord = require("discord.js")
const embed = new Discord.RichEmbed()
.setTitle(`Autorole, como usar?`)
.setAuthor(message.author.username+'#'+message.author.discriminator)
.setDescription(`Use \`${sysop.setprefix}autorole\` <@role> para definir a autorole.\nUse \`${sysop.setprefix}autorole off\` para desativar a autorole.\n\nA Autorole é uma auto atribuição de cargo sempre quando um novo usuário entrar. A role/cargo que você definir será o cargo que o usuário receberá ao entrar no servidor.`)
.setThumbnail(message.author.avatarURL)
.setFooter(message.guild.name)
.setColor('#15ffaf');

 if(!args[0]) return  message.channel.send({embed})


database.Guilds.findOne({ "_id": message.guild.id}, function(erro, documento) {
    if (!documento) {
        var server = new database.Guilds({
            _id: message.guild.id,
             convites: false,
             sugestao: '',
             welcome: '',
             words: [],
             autorole: '',
             welcomeChannel: '',
             byeChannel: '',
             dm: '',
        });
        server.save();
        message.reply('<:SysopLogoEMOI:439565791357042700> Um histórico foi criado. Use o comando novamente!');

        } else {
        if (!mensagem) {
    if (!documento.autorole)
   return message.channel.send('<:sysalerta:469789950938841088> Este servidor não possui autorole. Use `sy!autorole help`');
   else 
   return message.channel.send(`A autorole deste servidor atualmente é: <@&${documento.autorole}>. Use: sy!autorole help para setar`);

    } else {
        
        
        if (mensagem !== 'off') {
            documento.autorole = message.mentions.roles.first().id
            documento.save();
            return message.channel.send(`${message.author}! Você definiu a autorole do servidor. <:LikeSysop3:476062023629799424>`);
        } else {
            documento.autorole = '';
            documento.save();
            return message.channel.send('<:trust:447056422346424320> OK! Autorole **Desativada!**');
        }
    
        
    }
            
        }
});
  });
};