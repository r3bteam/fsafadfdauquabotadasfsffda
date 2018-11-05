const Discord = require("discord.js");
const db = require('../database.js');

exports.run = (client, message, args) => {

  var mention = message.mentions.channels.first()

var newSuffix = args.slice(1).join(' ')




db.Guilds.findOne({
    "_id": message.guild.id}, 
    function(erra, servidor) {
        if (servidor) {

 if(!args[0]) return message.channel.send(`<:sysalerta:469789950938841088>  | ${message.author} use **${servidor.setprefix}banlog banidos <#canal>** para definir o log de banimentos. Use também **${servidor.setprefix}banlog desativar banidos** para desativar o evento.`)

switch (args[0]) {

case 'banidos': {

if (servidor && servidor.BAN)                 
if (!message.member.hasPermission('ADMINISTRATOR', 'MANAGE_MESSAGES')) 
return message.channel.send(`<:kryptonX:505995195024932877>Desculpe ${message.author}, este comando está disponível apenas para cargos de Administrador ou Gerenciador de Mensagens`);
     
if (!mention)
return message.channel.send(`<:kryptonX:505995195024932877>${message.author}, mencione o canal para definir o evento **banidos**.`)
      
servidor.BAN = mention.id
servidor.save();
message.channel.send(`Definido ${message.author}! Agora o evento **banidos** será mostrado em ${mention}`)
  

return;    
}

}
     
if (!newSuffix.length < 1) {     
if (message.content.startsWith(servidor.prefixo + 'banlog desativar banidos')) {
 
servidor.BAN = '';
servidor.save();
message.channel.send(`Ok ${message.author}! Você desativou o evento banidos.`)
}
    
}


} else {
    var a = new db.Guilds({
        _id: message.guild.id,
        BAN: '',
    })
    a.save()
    message.channel.send(`${message.author} histórico criado, use o comando novamente.`)
}
})
};
