const database = require("../database.js");

exports.run = (Sysop, message, args) => {

if (!message.member.hasPermission('ADMINISTRATOR', 'MANAGE_MESSAGES')) 
return message.reply('<:xguardian:476061993368027148> Opa! Para utilizar este comando é necessário que você tenha permissões de Administrador ou Gerenciamento de mensagens');
      
//let args = suffix
let mensagem = args.join(' ')
let user = message.mentions.users.first() ? message.mentions.users.first() : message.author;
 
const db = require("../database.js")
db.Guilds.findOne({"_id": message.guild.id }, function(erra, sysop) {


const Discord = require("discord.js")
const embed = new Discord.RichEmbed()
.setTitle(`Bye | Mensagem de saída, como usar?`)
.setAuthor(message.author.username+'#'+message.author.discriminator)
.setDescription(`Use \`\`${sysop.setprefix}bye\`\` \`\`<mensagem>\`\` ` + '\n\nParâmetros:\n\`\`${MENTION}\`\` - Para mencionar o usuário\n\`\`${SERVER}\`\` - Para dizer o nome do server\n\`\`${USER}\`\` - Dizer o nome do usuário e defina.\n\`${USER_ICONURL}\` - Dá o url da imagem de perfil do usuário que entrou\n\`${USER_ID}\` - Dá o ID o usuário que entrou\n\nExemplo: ${USER} saiu. Sentiremos falta :('+`\n\nMensagem de saída atual: **${sysop.bye}**`)
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
    if (!documento.bye)
   return message.channel.send('<:sysalerta:469789950938841088> Este servidor não possui mensagens de saída ainda. Use'+ `\`${sysop.prefix}bye help\``);
   else 
   return message.channel.send('A mensagem de saída atual é\n\`\`\`Markdown\n# ' + documento.bye+'\`\`\`\n\n'+`Use: ${sysop.prefix}bye help para setar`);

    } else {
        if (mensagem !== 'disable') {
            documento.bye = mensagem
            documento.byeChannel = message.channel.id;
            documento.save();
            return message.channel.send(`GG ${message.author}! Você definiu a mensagem de saída. <:LikeSysop3:476062023629799424>`);
        } else {
            documento.byeChannel = '';
            documento.bye = '',
            documento.save();
            return message.channel.send('<:trust:447056422346424320> Mensagem de saída desabilitada.');
        }
    
    }}  
    })
});
  }