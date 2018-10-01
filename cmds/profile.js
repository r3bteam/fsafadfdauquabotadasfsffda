const Jimp = require("jimp"),
  database = require("../database.js"),
  Discord = require('discord.js');

exports.run = (Sysop, message, args) => {
      if (message.author.bot) return 'Bots não podem usar esse comando :) ';

    let server = message.guild;
    let user = message.mentions.users.first() ? message.mentions.users.first() : message.author;
    database.Users.findOne({
      "_id": user.id
    }, function(erra, documento) {
      if (documento) {
      let pudim = documento.level + 1;
      let imgcolor = {
      "online": "./status/online.d.png",
      "idle": "./status/idle.d.png",
      "dnd": "./status/dnd.d.png",
      "offline": "./status/invisible.d.png",
      "stream": "./status/.d.png"
      
};

let badge;
let badge2;

if (!documento.badgep3) badge = `./badges/invisiblebadge`;
else badge = `${documento.badgep3}`;

if (!documento.badgep2) badge2 = `./badges/invisiblebadge`;
else badge2 = `${documento.badgep2}`;

        try {
          Jimp.loadFont(Jimp.FONT_SANS_32_WHITE).then(function(letra) {
            Jimp.loadFont(Jimp.FONT_SANS_16_WHITE).then(function(letra2) {
             Jimp.loadFont(Jimp.FONT_SANS_16_BLACK).then(function(letra3) {
               Jimp.loadFont(Jimp.FONT_SANS_16_BLACK).then(function(letr) {
              Jimp.read("https://cdn.discordapp.com/attachments/413155538755649538/433097929234841602/InvisibleSysop.png", function(erre, img) {
                Jimp.read(`${documento.profile_background}`).then(function(background) {
                 Jimp.read(`./badges/${badge}.png`).then(function(emblema) {
                 Jimp.read(`./badges/${badge2}.png`).then(function(emblema2) {
                   // Jimp.read(user.username).then(function(user) {
                    Jimp.read(`${user.avatarURL}`).then(function(avatar) {
                      Jimp.read("https://cdn.discordapp.com/attachments/393818943246172164/486711452368109579/PerfilSys.png").then(function(perfil) {
                        Jimp.read(`./border/${documento.borderp}.png`).then(function(marco) {
                         
                              Jimp.read(`${imgcolor[user.presence.status]}`).then(function(status) {
                               Jimp.read("https://i.imgur.com/f55gYrh.png").then(function(mascara) {
                   // Jimp.read(`${server.iconURL}`).then(function(serverIcon) {
                    Jimp.read("https://cloud.githubusercontent.com/assets/414918/11165709/051d10b0-8b0f-11e5-864a-20ef0bada8d6.png").then(function(mess) {

                          //  serverIcon.resize(40, 40);
                            mess.resize(40, 40);
                        //    serverIcon.mask(mess, 0, 0);
                            avatar.resize(135, 135);
                            mascara.resize(135, 135);
                            marco.resize(135, 135);
                            avatar.mask(mascara, 0, 0);
                          //  mascara.mask(mascara, 0, 0);
                            background.resize(770, 490);
                           emblema.resize(44, 37);
                           emblema2.resize(44, 37);
                        
                            status.resize(35, 35);
                        //  pau.resize(9,490)

                            img.composite(background, 0, 0);
                            img.composite(perfil, 0, 0);
                            img.composite(avatar, 13, 3);
                            img.composite(marco, 13, 3);
                           // img.composite(mascara, 15, 14);
                         img.composite(emblema, 155, 67);
                          img.composite(emblema2, 205, 67);

                          //  img.composite(serverIcon, 29, 18);
                            img.composite(status, 115, 85);
                         // img.print(user, 415, 303);

                            img.print(letra, 150, 30, `${user.username}#${user.discriminator}`);
                          //  img.print(letra2, 78, 29, `${server.name}`);
                         //   img.print(letra, 690, 392, `${user.discriminator}`);
                         //   img.print(letra2, 690, 227, `${documento.rpup}`);
                            img.print(letra2, 580, 494, `${documento.casou}`);
                          //  img.print(letra2, 660, 360, `Total de: ${documento.adv}`);
                            img.print(letra, 650, 7, `${documento.lvll}`);
                            img.print(letra, 620, 45, `${Number(documento.eexp).toLocaleString()}`);
                            img.print(letra, 660, 85, `${parseInt(documento.eexp/(documento.lvll * 700 ) *100)}%`);
                       // img.print(letra2, 625, 28, `${Number(documento.emerald).toLocaleString()}`);
                         // img.print(letra, 160, 415, `${Number(documento.containers).toLocaleString()}`);
                           // img.print(letra2, 230, 28, `${Number(documento.coins).toLocaleString()}`);
                           //img.print(letra2, 410, 28, `${Number(documento.rubys).toLocaleString()}`);
                            img.print(letra2, 310, 493, `${Number(documento.rep).toLocaleString()} REPS`);
                            img.print(letra2, 165, 493, `${Number(documento.star).toLocaleString()}`);
                            img.print(letra2, 8, 525, `\`\`${documento.bio}\`\``, 725);
                            //img.print(letr, 200, 23, documento.xp + "/" +  Math.ceil(pudim * 400) + " (" + parseInt(documento.xp/(pudim *400 )*100) + "%)")  
                            img.getBuffer(Jimp.MIME_PNG, (erri, buffer) => {
                              message.channel.send(``, new Discord.Attachment(buffer, 'PerfilSys.png'));
                            });
                         
                        });
                      });
                    });
                  });
                });
              });
            });
          });
      //  });
      });
    });
  });
             });
});
  });
          } catch (e) {
          message.channel.send('**Você está usando um plano de fundo inválido**');
        }
      } else {
          
                 var pessoa = new database.Users({
                        _id: message.author.id,
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
                        star: 0,
                        backbalance: 'https://cdn.discordapp.com/attachments/442346665052209153/469407730797641738/SysopLogoLight.png',
                        profile_background: 'https://cdn.discordapp.com/attachments/442346665052209153/469407730797641738/SysopLogoLight.png',
                      
                    })
                    pessoa.save()
        message.reply("<:LikeSysop3:476062023629799424> **Perfil criado!** Use novamente este comando!");
      
      }
    });
  };