const database = require("../database.js");

exports.run = (Sysop, message, suffix) => {

if (!message.member.hasPermission('ADMINISTRATOR', 'MANAGE_MESSAGES')) 
return message.reply('<:xguardian:476061993368027148> Opa! Para utilizar este comando é necessário que você tenha permissões de Administrador ou Gerenciamento de mensagens');
    
var mensagem = suffix.join(' ')    
const db = require("../database.js")
db.Guilds.findOne({"_id": message.guild.id }, function(erra, sysop) {


const Discord = require("discord.js")
const embed = new Discord.RichEmbed()
.setTitle(`Welcome | Mensagens de boas vindas, como usar:`)
.setAuthor(message.author.username+'#'+message.author.discriminator)
.setDescription(`**Welcome, como usar?**\n\nUse \`\`sy!welcome\`\` \`\`<mensagem>\`\` ` + '\n\nParâmetros:\n\`\`${MENTION}\`\` - Para mencionar o usuário\n\`\`${SERVER}\`\` - Para dizer o nome do server\n\`\`${USER}\`\` - Dizer o nome do usuário e defina.\n\`${USER_ICONURL}\` - Dá o url da imagem de perfil do usuário que entrou\n\`${USER_ID}\` - Dá o ID o usuário que entrou\n\nExemplo: ${MENTION} entrou. :D'+`\n\nMensagem de boas-vindas atual: **${sysop.welcome}**`)
.setThumbnail(message.author.avatarURL)
.setFooter(message.guild.name)
.setColor('#15ffaf');

 if(!suffix[0]) return  message.channel.send({embed})       
      
      
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
    if (!documento.welcome)
   return message.channel.send('<:sysalerta:469789950938841088> Este servidor não possui mensagens de boas vindas ainda. Use `sy!welcome help`');
   else 
   return message.channel.send('A mensagem de boas-vindas atual é\n\`\`\`Markdown\n# ' + documento.welcome+'\`\`\`\n\nUse: sy!welcome help para setar');

    } else {
        if (mensagem !== 'disable') {
            documento.welcome = mensagem;
            documento.welcomeChannel = message.channel.id;
            documento.save();
            return message.channel.send(`GG ${message.author}! Você definiu a mensagem de boas-vindas. <:LikeSysop3:476062023629799424>`);
        } else {
            documento.welcomeChannel = '';
            documento.welcome = '',
            documento.save();
            return message.channel.send('<:trust:447056422346424320> Mensagem de boas-vindas desabilitada.');
        }
    
        
    }
            
        }
});
})
  };