const database = require("../database.js");

exports.run = (Sysop, message, suffix) => {
  
if (!message.member.hasPermission("MANAGE_GUILD")) 
 return message.channel.send("<:xguardian:476061993368027148> Opa! Parece que você não tem permissão de utilizar este comando. Tente adicionar a permissão de Gerencisamento de Servidor a você.");
 
 if (!message.guild.member(Sysop.user).hasPermission('MANAGE_CHANNELS')) 
 return message.reply('<:sysalerta:469789950938841088> Desculpe, não posso fazer isso. É necessario que eu tenha permissão `Gerenciar Canais` .')

	
      
let args = suffix
let mensagem = suffix;

const db = require("../database.js")
db.Guilds.findOne({"_id": message.guild.id }, function(erra, sysop) {


const Discord = require("discord.js")
const embed = new Discord.RichEmbed()
.setTitle(`Texto dos contadores, como usar?`)
.setAuthor(message.author.username+'#'+message.author.discriminator)
.setDescription(`Use \`${sysop.setprefix}texto <texto>\` para definir o canal onde o contador será ativado.\nUse \`${sysop.setprefix}texto off\` para desativar o canal do contador animado.`)
.setThumbnail(message.author.avatarURL)
.setFooter(message.guild.name)
.setColor('#15ffaf');

if(!suffix[0]) return message.channel.send({embed})
      
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
			 contador: '',
             texto: '' ,
			 });
        server.save();
        message.reply('<:SysopLogoEMOI:439565791357042700> Um histórico foi criado. Use o comando novamente!');

        } else {
        if (!mensagem) {
    if (!documento.dm)
   return message.channel.send('<:sysalerta:469789950938841088> Este servidor não possui texto no contador. Use: `t!texto <mensagem>` para setar');
   else 
   return message.channel.send(`Blz! O texto do contador atual é: ${documento.texto}`);

    } else {
        if (mensagem !== 'disable') {
            documento.texto = mensagem;
            documento.save();
            return message.channel.send(`GG ${message.author}! Você definiu o texto dos contadores.`);
        } else {
            documento.texto = '',
            documento.save();
            return message.channel.send('Ok! Texto do contador desativado.');
        }
    
        
    }
            
        }
});
})
  };