const Discord = require("discord.js")
const db = require("../database.js")
exports.run = (Sysop, message, args) => {
  
let user = message.mentions.users.first() || message.author

  
db.Users.findOne({
      "_id":  user.id
    }, function(erra, sysop) {
      if (sysop) {  



const embed = new Discord.RichEmbed()
.setTitle(`:jack_o_lantern: | **SALDO ATUAL DE ABÓBORAS** | :jack_o_lantern: 
------------------------------------------------------`)
.setDescription(`**INFO**\n\nGanhe abóboras TRABALHANDO e concorra no FINAL do MÊS 1 mês de conta nitro. Você automaticamente já está participando, colete suas abóboras, o top 10 usuários com mais abóboras serão sorteados no dia 25 para ganhar sua conta nitro.\n------------------------------------------------------\n\n\`SALDO DE\`\n__${user.username}__\n\n\`ABÓBORAS\`\n${Number(sysop.aboboras).toLocaleString()}`)
.setThumbnail(user.avatarURL)
.setColor('#ff8000');
message.channel.send({embed});  
      
      } else {
        
       var pessoa = new db.Users({
                        _id: user.id,
                        name: message.author.username, 
                        discrim: "#" + message.author.discriminator,
                        bio: "Sobre você...",
                        rpup: 0,
                        adv: 0,
                        coins: 0,
                        rubys: 0,
                        containers: 0,
                        emerald: 0,
                        goldbox: 0,
                        aboboras: 0,
                        star: 0,
                        backbalance: 'https://cdn.discordapp.com/attachments/442346665052209153/469407730797641738/SysopLogoLight.png',
                        profile_background: 'https://cdn.discordapp.com/attachments/442346665052209153/469407730797641738/SysopLogoLight.png',
                      
                    })
                    pessoa.save();
                    message.reply("<:LikeSysop3:476062023629799424> **Perfil criado!** Use novamente este comando!");
      
      }
  
    });
      
           
};
