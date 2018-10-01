const db = require("../database.js");

exports.run = (Sysop, message, args) => {


if (!message.member.hasPermission('ADMINISTRATOR', 'MANAGE_MESSAGES')) 
return message.reply('<:xguardian:476061993368027148> Desculpe, o comando **filtro** está disponível apenas para usuários administrativos e gerenciadores de mensagens  do server.');
db.Guilds.findOne({"_id": message.guild.id }, function(erra, docu) {
if (docu) {

let nha;

if (!docu.convites) nha = `Ativado`;
else nha = `Desativado`;

if (!args[0]) 
return message.reply(`<:sysalerta:469789950938841088> Você deve especificar um filtro. Filtros disponíveis: \`invites\``);
	
switch (args[0]){
	
case 'invites': {

if (!message.member.hasPermission('MANAGE_MESSAGES'))
return message.reply('<:xguardian:476061993368027148> Você precisa ter no minimo permissões de Gerenciamento de Mensagens para utilizar esse filtro.');

if (!message.member.hasPermission('ADMINISTRATOR'))
 return message.reply('<:xguardian:476061993368027148> Desculpe, este comando está disponível apenas para cargos administrativos do servidor.');
    		
    		    if (!docu) 
    			docu = {};
    			if (!!docu.convites)
    			docu.convites = !docu.convites;
    			else 
    			docu.convites = true;
    			
    			docu.save();
    			message.channel.send(`OK! ${message.author}, filtro de convites: **${nha}** <:trust:447056422346424320>`);
    			
} 


}} else { 
	var server = new db.Guilds({
            _id: message.guild.id,
             convites: false,
             sugestao: '',
             welcome: '',
             words: [],
             autorole: '',
        });
        server.save();
        message.reply("💥 Use o comando novamente");
    
}

});

};