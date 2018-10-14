const Discord = require('discord.js');
const env = require('./env.json');
const db = require('./database.js');
const Sysop = new Discord.Client();
const fs = require('fs');

Sysop.on("error", (e) => console.log(e));

Sysop.on("warn", (e) => console.log(e));

Sysop.on("debug", (e) => console.log(e));

Sysop.on("message", message => {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;
   
	
    db.Guilds.findOne({"_id": message.guild.id}).then(servidor => {

        if (message.content.startsWith(servidor.setprefix)) {

            db.Bloqueio.findOne({"_id": message.author.id}).then(bloqueio => {

                if(bloqueio) {
                    if ([bloqueio.block].includes(message.author.id) && !['244489368717230090'].includes(message.author.id))
                    return message.channel.send(`<:xguardian:476061993368027148> | ${message.author}! Você foi bloqueado de usar comandos do **Sysop**, se você acha que isso é um engano nos contate! `);
                }

                let command = message.content.split(" ")[0];
                command = command.slice(servidor.setprefix.length);

                let args = message.content.split(" ").slice(1);
                console.log(args)
                try {   

	                let commandFile = require(`./cmds/${command}.js`);
                    commandFile.run(Sysop, message, args);

                } catch (err) {
                    if (err.code === 'MODULE_NOT_FOUND') return;
                    console.warn(err);
                }

            })
        
        } else {
             if(message.content.includes(`<@${Sysop.user.id}>`) || message.content.includes(`<@!${Sysop.user.id}>`)) {
                 const embed = new Discord.RichEmbed()
                 .setAuthor(message.author.username+'#'+message.author.discriminator)
                 .setThumbnail(message.author.avatarURL)
                 .setDescription(`Meu **prefixo** atual é **${servidor.setprefix}**, use **${servidor.setprefix}help** para ver meus comandos.`)
                 .setFooter(message.guild.name)
                 .setColor('#15ffaf');
                 message.channel.send({embed})
                
            }
	}
    })
   
  });
  
  
Sysop.on("message", message => {
if (message.guild) {
db.Guilds.findOne({"_id": message.guild.id}, function(erra, sysop) {
if (sysop) {
if (sysop && sysop.sugest && message.channel.id == sysop.sugest)
message.react('👍').then(message.react('👎')).then(message.react(':FalseSysop3:462306755150479372'))  
}
});
}
});
  
Sysop.on("guildMemberUpdate", (newUser, oldUser) => {	
if (oldUser) {

db.Users.findOne({
    "_id": oldUser.id}, 
    function(erro, doc) {

if (doc) {

doc.names.push(oldUser.nick);
console.log(doc.names.push(oldUser.nick));
doc.save();
          }
      });
    }
});
  
  Sysop.on('guildMemberAdd', member => { 
  db.Guilds.findOne({"_id": member.guild.id}, function(erra, sysop) {
    if(!sysop) return;
    if(!sysop.welcomeChannel) return;
    if(!sysop.welcome) return;
    if(!Sysop.guilds.get(member.guild.id).channels.get(sysop.welcomeChannel)) return;
  if (sysop) {
    let mensagem = sysop.welcome.replace(/\$\{USER\}/gi, member.user.username).replace(/\$\{SERVER\}/gi, member.guild.name).replace(/\$\{MENTION\}/gi, `${member.user}`).replace(/\$\{USER_ICONURL\}/gi, member.user.displayAvatarURL).replace(/\$\{USER_ID\}/gi, member.user.id);

    Sysop.guilds.get(member.guild.id).channels.get(sysop.welcomeChannel).send(mensagem)

    }
  })
  db.Guilds.findOne({"_id": member.guild.id}, function(erra, sysop) {
    if(!sysop) return;
    if(!sysop.dm) return;
  if (sysop) {
    let mensagem = sysop.dm.replace(/\$\{USER\}/gi, member.user.username).replace(/\$\{SERVER\}/gi, member.guild.name).replace(/\$\{MENTION\}/gi, `${member.user}`).replace(/\$\{USER_ICONURL\}/gi, member.user.displayAvatarURL).replace(/\$\{USER_ID\}/gi, member.user.id);
    Sysop.users.get(member.id).send(mensagem)
  }
  })

	//contador + setador
db.Guilds.findOne({"_id": member.guild.id}, function(erra, sysop) {
	
    if(!sysop) return;
    if(!sysop.numero) return;
    if (!sysop.texto) return;
    if(!Sysop.guilds.get(member.guild.id).channels.get(sysop.numero)) return;	
if (sysop) {	
let membros =  `${Sysop.guilds.get(member.guild.id).memberCount.toString()}`
let discord = membros.split('').map(i => ['<:00:486163080037007361> ', '<:11:486163136307658752>', '<:22:486163135993217035>', '<:33:486163136127303683>', '<:44:486163136874020864>', '<:55:486163135909068812>', '<:66:486163136873758740>', '<:77:486163136815169540>', '<:88:486163135938560013>', '<:99:486163157790883851>'][i]).join('');
Sysop.guilds.get(member.guild.id).channels.get(sysop.numero).edit({ topic: `<a:SysopEmojiLOGOGIF:456242315669798914> | ${discord} ${sysop.texto}` })
	}})	
});

Sysop.on('guildMemberAdd', member => {
//contador animado + setador
db.Guilds.findOne({"_id": member.guild.id}, function(erra, sysop) {
	
    if(!sysop) return;
    if(!sysop.animado) return;
    if (!sysop.texto) return;
    if(!Sysop.guilds.get(member.guild.id).channels.get(sysop.animado)) return;	
if (sysop && sysop.animado) {	
let membross =  `${Sysop.guilds.get(member.guild.id).memberCount.toString()}`
let contadora = membross.split('').map(i => ['<a:0:478771135388057602>', '<a:1:478771131030175746>', '<a:2:478771135714951169>', '<a:3:478771135865946130>', '<a:4:478771135454904335>', '<a:5:478771136247627806>', '<a:6:478771169441349632>', '<a:7:478771167382208524>', '<a:8:478771170263564288>', '<a:9:478771170557165578>'][i]).join('');
Sysop.guilds.get(member.guild.id).channels.get(sysop.animado).edit({ topic: `<a:SysopEmojiLOGOGIF:456242315669798914> | ${contadora} ${sysop.texto}` })
}})
});

Sysop.on('guildMemberRemove', member => {

  db.Guilds.findOne({"_id": member.guild.id}, function(erra, sysop) {
    if(!sysop) return;
    if(!sysop.byeChannel) return;
    if(!sysop.bye) return;
    if(!Sysop.guilds.get(member.guild.id).channels.get(sysop.byeChannel)) return;
  if (sysop) {
    let mensagem = sysop.bye.replace(/\$\{USER\}/gi, member.user.username).replace(/\$\{SERVER\}/gi, member.guild.name).replace(/\$\{MENTION\}/gi, `${member.user}`).replace(/\$\{USER_ICONURL\}/gi, member.user.displayAvatarURL).replace(/\$\{USER_ID\}/gi, member.user.id);

    Sysop.guilds.get(member.guild.id).channels.get(sysop.byeChannel).send(mensagem)
  }
  })

//contador + setador
db.Guilds.findOne({"_id": member.guild.id}, function(erra, sysop) {
	
    if(!sysop) return;
    if(!sysop.numero) return;
    if (!sysop.texto) return;
    if(!Sysop.guilds.get(member.guild.id).channels.get(sysop.numero)) return;	
if (sysop && sysop.numero) {	
let membros =  `${Sysop.guilds.get(member.guild.id).memberCount.toString()}`
let discord = membros.split('').map(i => ['<:00:486163080037007361> ', '<:11:486163136307658752>', '<:22:486163135993217035>', '<:33:486163136127303683>', '<:44:486163136874020864>', '<:55:486163135909068812>', '<:66:486163136873758740>', '<:77:486163136815169540>', '<:88:486163135938560013>', '<:99:486163157790883851>'][i]).join('');
Sysop.guilds.get(member.guild.id).channels.get(sysop.numero).edit({ topic: `<a:SysopEmojiLOGOGIF:456242315669798914> | ${discord} ${sysop.texto}` })
	}})	

});

Sysop.on('guildMemberRemove', member => {
//contador animado + setador
db.Guilds.findOne({"_id": member.guild.id}, function(erra, sysop) {
	
    if(!sysop) return;
    if(!sysop.animado) return;
    if (!sysop.texto) return;
    if(!Sysop.guilds.get(member.guild.id).channels.get(sysop.animado)) return;	
if (sysop && sysop.animado) {	
let membross =  `${Sysop.guilds.get(member.guild.id).memberCount.toString()}`
let contadora = membross.split('').map(i => ['<a:0:478771135388057602>', '<a:1:478771131030175746>', '<a:2:478771135714951169>', '<a:3:478771135865946130>', '<a:4:478771135454904335>', '<a:5:478771136247627806>', '<a:6:478771169441349632>', '<a:7:478771167382208524>', '<a:8:478771170263564288>', '<a:9:478771170557165578>'][i]).join('');
Sysop.guilds.get(member.guild.id).channels.get(sysop.animado).edit({ topic: `<a:SysopEmojiLOGOGIF:456242315669798914> | ${contadora} ${sysop.texto}` })
}})
});
  
Sysop.on("message", message => {
if (message.guild) {
db.Guilds.findOne({"_id": message.guild.id}, function(erra, sysop) {
if (sysop) {

var oi = message.guild.roles.find("name", "😡 Sysop Warn 😡")        // variaveis
    if (oi == null ){
           message.guild.createRole({
                   
               "name": "Invite Post (1/3)",  //nome do cargo
               "color": 0xA4A4A4, //cor do cargo
               "permissions": 1, //numero da permission
               "mentionable": false, //se ele e mencionavel
               "position": 48
           })         
                  message.guild.createRole({
                          
                      "name": "Invite Post (2/3)",  //nome do cargo
                      "color": 0xA4A4A4, //cor do cargo
                      "permissions": 1, //numero da permission
                      "mentionable": false, //se ele e mencionavel
                      "position": 48
                  })
                              message.guild.createRole({
                                 
                             "name": "invite post (3/3)",  //nome do cargo
                             "color": 0xA4A4A4, //cor do cargo
                             "permissions": 1, //numero da permission
                             "mentionable": false, //se ele e mencionavel
                             "position": 48
                         })
                         message.guild.createRole({
                            
                        "name": "😡 Sysop Warn 😡",  //nome do cargo
                        "color": 0xff3535, //cor do cargo
                        "permissions": 1, //numero da permission
                        "mentionable": false, //se ele e mencionavel
                        "position": 48
                    })}
                    
        if (sysop && sysop.convites && message.content.search('discord.gg') > -1) {
        message.delete();
         if(!message.guild.members.get(message.author.id).roles.find("name", "😡 Sysop Warn 😡")) {
            message.guild.members.get(message.author.id).addRole(message.member.guild.roles.find("name", "😡 Sysop Warn 😡")) 
            message.guild.members.get(message.author.id).addRole(message.member.guild.roles.find("name", "Invite Post (1/3)")) 
           message.channel.send(`<:xguardian:476061993368027148> | <@${message.author.id}> Você não pode enviar convites de outros servidores aqui! **(1/3)**`).then(sentMsg => sentMsg.delete(60000)) 
         }}

if (sysop && sysop.convites && message.content.search('discord.gg') > -1) {
        message.delete();
if(message.guild.members.get(message.author.id).roles.find("name", "Invite Post (1/3)")) {
         message.guild.members.get(message.author.id).removeRole(message.member.guild.roles.find("name", "Invite Post (1/3)"))
         message.guild.members.get(message.author.id).addRole(message.member.guild.roles.find("name", "Invite Post (2/3)"))
           message.channel.send(`<:xguardian:476061993368027148> | <@${message.author.id}> Você não pode enviar convites de outros servidores aqui! **(2/3)**`).then(sentMsg => sentMsg.delete(60000)) 
}}

if (sysop && sysop.convites && message.content.search('discord.gg') > -1) {
        message.delete();
    if(message.guild.members.get(message.author.id).roles.find("name", "Invite Post (2/3)")) {
        message.guild.members.get(message.author.id).removeRole(message.member.guild.roles.find("name", "Invite Post (2/3)"))
         message.guild.members.get(message.author.id).addRole(message.member.guild.roles.find("name", "Invite Post (3/3)"))
          message.guild.member(message.author.id).ban(0)
          message.channel.send(`<:banSysop:476264254606016515> | <@${message.author.id}> foi banido do servidor. Motivo: **Divulgação de links de outros servidores!** **(3/3)**`).then(sentMsg => sentMsg.delete(60000)) 
          message.author.send(`<:banSysop:476264254606016515> | <@${message.author.id}> você foi banido do servidor ${message.guild.name}. Motivo: **Divulgação de links de outros servidores!** **(x3)**`)

    }

}}
});
}
});
  
Sysop.on("ready", () => {
Sysop.user.setPresence({
        status: 'Online',
        /*game: {
            name: `sy!help`,
            url: 'https://www.twitch.tv/expextreadriano'
        }*/
});
});

Sysop.on("debug", debug => {
    console.log(debug);
})

Sysop.login(process.env.QQ).catch(a => console.log(a))

Sysop.on("ready", () => {
    console.log("Sysop está respondendo!");
    var a = '244489368717230090';
    var embed = new Discord.RichEmbed()
    .setThumbnail('https://cdn.discordapp.com/attachments/429458467988832257/469723736300453901/SysopLogo.png')
    .setDescription(`<:SysopLogoEMOI:439565791357042700> Sysop foi reiniciado .\n\nMemória: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MS`)
    .setColor('#15ffaf');  							 
    Sysop.users.get(a).send({embed});    
});
