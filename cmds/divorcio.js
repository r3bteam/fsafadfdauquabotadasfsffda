const Discord = require("discord.js");
const db = require("../database.js")

exports.run = (Sysop, message, args) => {

/*let mention = message.mentions.users.first();

if (!mention) 
return message.reply(`mencione alguém para se divorciar.`);*/

db.Users.findOne({"_id": message.author.id}, function(erra, documento) {
      if (documento) {

documento.casou = 'Ninguém';
documento.save();
message.channel.send(`${message.author} se divorciou.`);

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
}
});
};