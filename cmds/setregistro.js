const Discord = require("discord.js")
const db = require("../database.js");

exports.run = (Sysop, message, args) => {
 
var um = args.slice(1).join(' ')
var dois = args.slice(2).join(' ')
var tres = args.slice(3).join(' ')
var quatro = args.slice(4).join(' ')
 
    
 if(!message.member.hasPermission("MANAGE_ROLES"))
 return message.channel.send(`<:kryptonX:505995195024932877> | ${message.author} é necessário que você tem permissão de Gerenciamento de Cargos para utilizar este comando.`)
 
 db.Guilds.findOne({
     "_id": message.guild.id },
     function (erro, sysop) {
         
        if(sysop) {
         
 var embed = new Discord.RichEmbed()
 .setAuthor(`Ajuda | Registro`,message.guild.iconURL)
 .setDescription(`Configure os cargos para utilizar o sistema de registro.`)
 .addField(`${sysop.prefixo}setregistro masculino <@cargomenção>`,`Defina o cargo masculino do servidor.`,false)
 .addField(`${sysop.prefixo}setregistro desativar masculino`, `Desativará e resetará o cargo masculino do servidor`,false)
 .addField(`${sysop.prefixo}setregistro feminino <@cargomenção>`,`Defina o cargo feminino do servidor.`,false)
 .addField(`${sysop.prefixo}setregistro desativar feminino`, `Desativará e resetará o cargo feminino do servidor`,false)
 .addField(`${sysop.prefixo}setregistro registrador <@cargomenção>`,`Defina o cargo para registrador no qual apenas usuários com o cargo definido conseguirá registrar membros do servidor.`,false)
 .addField(`${sysop.prefixo}setregistro desativar registrador`,`Desativará e resetará o cargo registrador do servidor.`,false)
 .addField(`${sysop.prefixo}setregistro membro <@cargomenção>`,`Defina o cargo para membros no qual será necessário para relizar os registros. A função também ativa o autocargo do servidor.`,false)
 .addField(`${sysop.prefixo}setregistro desativar membro`,`Desativará e resetará o cargo membro do servidor.\n<:warn:506568193154744360> **Cuidado!** Desativando o cargo membro do sistema de registro, desativará também o autocargo do servidor`,false)
 .addField(`${sysop.prefixo}setregistro painel`,`Mostrará o painel de configurações de cargo do sistema de registro.`,false)
 .setFooter(`Requisitado por ${message.author.tag} - ID ${message.author.id}`)
 .setColor('#f3052f');
 if(!args[0]) return message.channel.send({embed});        
         
let rol1;
let rol2;
let rol3;
let rol4;      
        

 if (!sysop.man) rol1 = '`<:kryptonX:505995195024932877> | Cargo Masculino não definido ainda.';
 else rol1 = `<:kryptonC:505995271562592257> | <@&${sysop.man}>`
 if (!sysop.girl) rol2 = '`<:kryptonX:505995195024932877> | Cargo Feminino não definido ainda.';
 else rol2 = `<:kryptonC:505995271562592257> | <@&${sysop.girl}>`
 if (!sysop.staffer) rol3 = '`<:kryptonX:505995195024932877> | Cargo Staff não definido ainda.';
 else rol3 = `<:kryptonC:505995271562592257> | <@&${sysop.staffer}>`
 if (!sysop.autorole) rol4 = '`<:kryptonX:505995195024932877> |  Cargo Membros não definido ainda.';
 else rol4 = `<:kryptonC:505995271562592257> | <@&${sysop.autorole}>`
 
       
  switch (args[0]) {
	case 'masculino' : {
        
     if (!message.mentions.roles.first()) {
     if (sysop && sysop.man)   
     return message.channel.send('Cargo masculino definido para:  <@&' + sysop.man + '>');
     else
     return message.channel.send(`<:warn:506568193154744360> | ${message.author} defina o cargo masculino do servidor.`);
     } else { 
     if (!sysop) sysop = {};   
     sysop.man = message.mentions.roles.first().id;
     sysop.save();
     return message.channel.send(`<:kryptonC:505995271562592257> | ${message.author} você definiu <@&${message.mentions.roles.first().id}> como cargo masculino do servidor`);


          }
	}
          
case 'feminino' : {
        
     if (!message.mentions.roles.first()) {
     if (sysop && sysop.girl)   
     return message.channel.send('Cargo feminino definido para:  <@&' + sysop.girl + '>');
     else
     return message.channel.send(`<:warn:506568193154744360> | ${message.author} defina o cargo feminino do servidor.`);
     } else { 
     if (!sysop) sysop = {};   
     sysop.girl = message.mentions.roles.first().id;
     sysop.save();
     return message.channel.send(`<:kryptonC:505995271562592257> | ${message.author} você definiu <@&${message.mentions.roles.first().id}> como cargo feminino do servidor`);


          }
	    
	}   
	
	
	case 'registrador' : {
        
     if (!message.mentions.roles.first()) {
     if (sysop && sysop.staffer)   
     return message.channel.send('Cargo registrador definido para:  <@&' + sysop.staffer + '>');
     else
     return message.channel.send(`<:warn:506568193154744360> | ${message.author} defina o cargo registrador do servidor.`);
     } else { 
     if (!sysop) sysop = {};   
     sysop.staffer = message.mentions.roles.first().id;
     sysop.save();
     return message.channel.send(`<:kryptonC:505995271562592257> | ${message.author} você definiu <@&${message.mentions.roles.first().id}> como cargo registrador do servidor`);


          }
	    
	}  
	
	case 'membro' : {
        
     if (!message.mentions.roles.first()) {
     if (sysop && sysop.autorole)   
     return message.channel.send('Cargo registrador definido para:  <@&' + sysop.staffer + '>');
     else
     return message.channel.send(`<:warn:506568193154744360> | ${message.author} defina o cargo membro do servidor.`);
     } else { 
     if (!sysop) sysop = {};   
     sysop.autorole = message.mentions.roles.first().id;
     sysop.save();
     return message.channel.send(`<:kryptonC:505995271562592257> | ${message.author} você definiu <@&${message.mentions.roles.first().id}> como cargo membro/autocargo do servidor`);


          }
	    
	}  
	
	case 'painel': {
	    
   var selfrole = new Discord.RichEmbed();
   selfrole.setAuthor(`Registador | Painel`,message.guild.iconURL)
   selfrole.setDescription('Informações de cargos para **Registro**');
   selfrole.addField('Cargo Masculino:', `${rol1}`, false);
   selfrole.addField('Cargo Feminino', `${rol2}`, false);
   selfrole.addField('Cargo Registador', `${rol3}`, false);
   selfrole.addField('Cargo Membro', `${rol4}`, false);
   selfrole.setFooter('sy!setregistro help');
   selfrole.setFooter(`Requisitado por ${message.author.tag} - ID ${message.author.id}`)
   selfrole.setColor('#f3052f');
   message.channel.send({embed: selfrole});

	}
  }
  
  
  
if (!um.length < 1) {     
if (message.content.startsWith(sysop.prefixo + 'registrador desativar masculino')) {
 
sysop.man = '';
sysop.save();
message.channel.send(`Ok ${message.author}! Você resetou  cargo masculino do servidor.`)
}
   
  }
  
 if (!dois.length < 2) {     
if (message.content.startsWith(sysop.prefixo + 'registrador desativar feminino')) {
 
sysop.girl = '';
sysop.save();
message.channel.send(`Ok ${message.author}! Você resetou  cargo feminino do servidor.`)
}
   
  } 
  
  if (!tres.length < 3) {     
if (message.content.startsWith(sysop.prefixo + 'registrador desativar registrador')) {
 
sysop.staffer = '';
sysop.save();
message.channel.send(`Ok ${message.author}! Você resetou  cargo registrador do servidor.`)
}
   
  }
  
  if (!quatro.length < 4) {     
if (message.content.startsWith(sysop.prefixo + 'registrador desativar membro')) {
 
sysop.autorole = '';
sysop.save();
message.channel.send(`Ok ${message.author}! Você resetou  cargo membro do servidor.`)
}
   
  }
  
      
        } else {
        
            var servidor = new db.Guilds({
                _id: message.guild.id,
                autorole: '',
                sugestao: '',
                filterInvites: false,
                filterPrintscreen: '',
                filterWords: [],
                welcome: '',
                welcomeChannel: '',
                bye: '',
                byeChannel: '',
                dm: '',
                girl: '',
                man: '',
                staffer: '',
            });
            servidor.save();
            message.channel.send(`<:alert:506568192521535498> ${message.author}, registrei o servidor. Use novamente o comando`);

        
        
        }
        
     });
 
};
