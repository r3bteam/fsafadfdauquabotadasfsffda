const Discord = require('discord.js');
const database = require("../database.js");


exports.run = (Sysop, message, args) => {

    if  (!message.member.hasPermissions(["BAN_MEMBERS"])) 
    return message.channel.send(`<:xguardian:476061993368027148> ${message.author} | Woww Você não tem permissão para dar striker em alguém!`);
   
    if (message.mentions.users.size < 1) 
    return message.channel.send(`<:sysalerta:469789950938841088> ${message.author} Mencione um usuário`);
      
    if (message.mentions.users.first().bot) 
    return message.channel.send(`<:xguardian:476061993368027148> ${message.athor} | Woww Você não pode dar striker em um bot.`);


  let reason = args.slice(1).join(' ');
  if (reason.length < 1) return message.reply('<:sysalerta:469789950938841088> Defina um motivo para o striker.');
  
 
   if (!message.guild.member(message.mentions.users.first().id).bannable) 
   return message.channel.send(`<:xguardian:476061993368027148> ${message.author} | Opa, Não tenho permissão para dar Striker no usuário mencionado.`);

    var oi = message.guild.roles.find("name", "Sysop Tóxico 🔱")        // variaveis
    if (oi == null ){
           message.guild.createRole({
                   
               "name": "Striker 1",  //nome do cargo
               "color": 0xA4A4A4, //cor do cargo
               "permissions": 1, //numero da permission
               "mentionable": false, //se ele e mencionavel
               "position": 49
           })         
                  message.guild.createRole({
                          
                      "name": "Striker 2",  //nome do cargo
                      "color": 0xA4A4A4, //cor do cargo
                      "permissions": 1, //numero da permission
                      "mentionable": false, //se ele e mencionavel
                      "position": 49
                  })
                              message.guild.createRole({
                                 
                             "name": "Striker 3",  //nome do cargo
                             "color": 0xA4A4A4, //cor do cargo
                             "permissions": 1, //numero da permission
                             "mentionable": false, //se ele e mencionavel
                             "position": 49
                         })
                         message.guild.createRole({
                            
                        "name": "Sysop Tóxico 🔱",  //nome do cargo
                        "color": 0xff3535, //cor do cargo
                        "permissions": 1, //numero da permission
                        "mentionable": false, //se ele e mencionavel
                        "position": 49
                    })}
           if (oi == null)return message.reply("**Use o comando novamente**");
      
           if(!message.guild.members.get(message.mentions.users.first().id).roles.find("name", "Sysop Tóxico 🔱")) {
            message.guild.members.get(message.mentions.users.first().id).addRole(message.member.guild.roles.find("name", "Sysop Tóxico 🔱")) 
            message.guild.members.get(message.mentions.users.first().id).addRole(message.member.guild.roles.find("name", "Striker 1")) 
           
           //message.channel.send(`<@${message.mentions.users.first().id}> recebeu um striker, staffs de olho :eyes:`);
        database.Users.findOne({
    "_id": message.mentions.users.first().id
}, function (erro, documento) {
    if(documento) {     
        documento.strike1 = reason
        documento.save()
        const embed = new Discord.RichEmbed()
           .setTitle(`Striker | Advertência`)
           .setThumbnail(message.mentions.users.first().avatarURL)
           .setDescription(`<@${message.mentions.users.first().id}> recebeu um striker!`)
           .addField(`Moderador responsável`,`${message.author}`,false)
           .addField(`Motivo do Striker`,`${documento.strike1}`,false)
           .addField(`Quantidade`,`Striker 1 de 3`,false)
           .setColor('#15ffaf')
           message.channel.send({embed})
        }
    })
}

           if(message.guild.members.get(message.mentions.users.first().id).roles.find("name", "Striker 1")) {
         message.guild.members.get(message.mentions.users.first().id).removeRole(message.member.guild.roles.find("name", "Striker 1"))
         message.guild.members.get(message.mentions.users.first().id).addRole(message.member.guild.roles.find("name", "Striker 2"))
        // message.channel.send(`**<@${message.mentions.users.first().id}> recebeu já dois Strikers, +1 é ban** <:SysopHammer:453575969014546443> `);
         database.Users.findOne({
            "_id": message.mentions.users.first().id
        }, function (erro, documento) {
            if(documento) {     
                documento.strike2 = reason
                documento.save()
                const embed = new Discord.RichEmbed()
           .setTitle(`Striker | Advertência`)
           .setThumbnail(message.mentions.users.first().avatarURL)
           .setDescription(`<@${message.mentions.users.first().id}> recebeu um striker!`)
           .addField(`Moderador responsável`,`${message.author}`,false)
           .addField(`Motivo do Striker`,`${documento.strike2}`,false)
           .addField(`Quantidade`,`Striker 2 de 3`,false)
           .setColor('#15ffaf')
           message.channel.send({embed})
        
                }
            })
        }
            
    if(message.guild.members.get(message.mentions.users.first().id).roles.find("name", "Striker 2")) {
        message.guild.members.get(message.mentions.users.first().id).removeRole(message.member.guild.roles.find("name", "Striker 2"))
         message.guild.members.get(message.mentions.users.first().id).addRole(message.member.guild.roles.find("name", "Striker 3"))
        // message.mentions.users.first().send("Você foi banido por receber `3` Strikers (Advertências)")
         let member = message.guild.member(message.mentions.users.first().id).ban(0)
         database.Users.findOne({
            "_id": message.mentions.users.first().id
        }, function (erro, documento) {
            if(documento) {     
                
                documento.strike3 = reason
                let user = message.mentions.users.size > 0 ? message.mentions.users.first() : message.author;
                var rpts = ['https://i2.wp.com/www.evatese.com/wp-content/uploads/2015/08/Banned-songs-by-NBC-olamide-phyno-davido-chrisbrown-evateseblog-august-2015.gif?resize=421%2C311'];
                var link = rpts[Math.floor(Math.random() * rpts.length)];
                const embed = new Discord.RichEmbed() 
                
                          .setTitle("🚫 Ação Striker")
                          .setThumbnail(message.mentions.users.first().avatarURL)
                          .addField('**Usuário banido:**', `<@${message.mentions.users.first().id}>`,true)
                          .addField('**Moderador responsável:**', `<@${message.author.id}>`,true)    
                          .addField('**Striker 1**',documento.strike1)
                          .addField('**Striker 2**',documento.strike2)
                          .addField('**Striker 3**',documento.strike3)
                          .addField(`Quantidade`,`Striker 3 de 3`,false)
                          .setFooter(user.tag, user.avatarURL)
                          .setColor('#15ffaf');
                
                          message.channel.send({embed});
                          documento.save()
        
            }
            })        
    } 
         
}
