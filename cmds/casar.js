const Discord = require("discord.js");
const db = require("../database.js")
exports.run = (Sysop, message, args) => {
db.Users.findOne({"_id": message.author.id}, function(erra, documento) {
      if (documento) {

if(documento.casar_shoped === "no") return message.channel.send(`<:sysalerta:469789950938841088> Opa ${message.author}! Parece que você não tem licença para casar. Compre o comando no shop!`)


let mention = message.mentions.users.first();
if (!mention) return message.reply(`mencione alguém para casar.`);

message.channel.send(`:ring: **│** ${mention}! ${message.author} está te pedindo em casamento. Digite "aceitar" para se casar ou "recusar" para recusar o casamento.`).then(() => {
message.channel.awaitMessages(res => 
(res.content == "aceitar" && res.author.id == mention.id) || (res.content == 'recusar' && res.author.id == mention.id), { 

max: 1, time: 60000, errors: ['time'] }).then(col => {
if (col.first().content == 'aceitar') {

db.Users.findOne({"_id": message.author.id}, function(erra, documento) {
      if (documento) {
db.Users.findOne({"_id": mention.id}, function(erra, doc) {
      if (doc) {          

documento.casou = mention.username+'#'+mention.discriminator ;
documento.save();
doc.casou = message.author.username+'#'+message.author.discriminator
doc.save();
message.channel.send(`:heartbeat: ${message.author} e ${mention} se casaram! :heartbeat: `);

} else {
      var pessoa = new db.Users({
                        _id: message.author.id,
                        name: message.author.username, 
                        discrim: "#" + message.author.discriminator,
                        bio: "sy!bio su bio",
                        rpup: 0,
                        adv: 0,
                        coins: 0,
                        rubys: 0,
                        containers: 0,
                        emerald: 0,
                        goldbox: 0,
                        casou: 'Ninguém',
                        profile_background: 'https://cdn.discordapp.com/attachments/442346665052209153/469407730797641738/SysopLogoLight.png',
                      
                    })
                    pessoa.save()
        message.reply("<:LikeSysop3:476062023629799424> **Perfil criado!** Use novamente este comando!");
 
}})
 } else {
          
    
    
    var pessoa = new db.Users({
                        _id: mention.id,
                        name: message.author.username, 
                        discrim: "#" + message.author.discriminator,
                        bio: "sy!bio su bio",
                        rpup: 0,
                        adv: 0,
                        coins: 0,
                        rubys: 0,
                        containers: 0,
                        emerald: 0,
                        goldbox: 0,
                        casou: 'Ninguém',
                        profile_background: 'https://cdn.discordapp.com/attachments/442346665052209153/469407730797641738/SysopLogoLight.png',
                      
                    })
                    pessoa.save()
        message.reply("<:LikeSysop3:476062023629799424> **Perfil criado!** Use novamente este comando!");

}})  
      }

if (col.first().content == 'recusar') {
        message.channel.send(`:sob: **│** ${mention} recusou se casar com ${message.author}.`);
}

}).catch(() => message.channel.send(`:shrug::skin-tone-2: **│**  ${mention} pensou demais. Casamento não acontecido.`));
      
});
      }});
};