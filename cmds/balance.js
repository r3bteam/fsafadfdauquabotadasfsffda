const Jimp = require("jimp"),
  database = require("../database.js"),
  Discord = require('discord.js');

exports.run = (Sysop, message, args) => {
  
   //if (!['244489368717230090'].includes(message.author.id)) return message.channel.send(`<:sysalerta:469789950938841088> Opa ${message.author}, erro ao executar esse comando. Caso o erro persista contate: **! Aquaman 🐙#1408**`);


    let user = message.mentions.users.first() ? message.mentions.users.first() : message.author;
    database.Users.findOne({
      "_id": user.id
    }, function(erra, documento) {
      if (documento) {
      let pudim = documento.level + 1;
      let imgcolor = {
      "online": "./status/online.png",
      "idle": "./status/ausente.png",
      "dnd": "./status/ocupado.png",
      "offline": "./status/offline.png",
      "stream": "./status/.d.png"
      
};

let level = documento.lvll + 1;
        try {
          Jimp.loadFont(Jimp.FONT_SANS_32_WHITE).then(function(letra) {
            Jimp.loadFont(Jimp.FONT_SANS_16_WHITE).then(function(letra2) {
             Jimp.loadFont(Jimp.FONT_SANS_32_BLACK).then(function(letra3) {
               Jimp.loadFont(Jimp.FONT_SANS_16_BLACK).then(function(letr) {
                Jimp.read(`${user.avatarURL}`).then(function(level) {  
             // Jimp.read("./EEXP/exp ("+ parseInt(documento.eexp/(documento.lvll *450 )*100) +").png").then(function(pau) {
              //Jimp.read("https://cdn.discordapp.com/attachments/442346561289060352/469817915357528074/InvisibleSysop_1.png", function(erre, img) {
               // Jimp.read(`${documento.profile_background}`).then(function(background) {
                    //Jimp.read(`${user.avatarURL}`).then(function(avatar) {
                      Jimp.read("https://cdn.discordapp.com/attachments/437817094319636492/489252719178022913/Sysop_Invi.png", function(erre, img) {
                      Jimp.read(`${documento.balance_background}`).then(function(background) {
                      Jimp.read("https://cdn.discordapp.com/attachments/393818943246172164/489127359899762708/Balance_Card.png").then(function(perfil) {
                     
                            //  Jimp.read(`${imgcolor[user.presence.status]}`).then(function(status) {
                            //   Jimp.read("https://cloud.githubusercontent.com/assets/414918/11165709/051d10b0-8b0f-11e5-864a-20ef0bada8d6.png").then(function(mascara) {

                           /* avatar.resize(200, 200);
                            mascara.resize(200, 200);
                            avatar.mask(mascara, 0, 0);
                            background.resize(934, 282);
                            status.resize(70, 70);
                            img.composite(background, 1, 0);
                            img.composite(perfil, 0, 0);
                            img.composite(avatar, 43, 70);
                      
                            img.composite(status, 190, 215);
                            img.composite(pau, 250, 160);*/
                       
                             background.resize(450, 324);
                             img.composite(background, 0, 0);
                             img.composite(perfil, 0, 0);


                       

                            img.print(letra2, 110, 27, `${user.username}#${user.discriminator}`);
                            img.print(letra2, 55, 118, `${Number(documento.coins).toLocaleString()}`);
                            img.print(letra2, 280, 118, `${Number(documento.rubys).toLocaleString()}`);
                            img.print(letra2, 55, 205, `${Number(documento.goldbox).toLocaleString()}`);
                            img.print(letra2, 280, 205, `${Number(documento.containers).toLocaleString()}`);
                            img.print(letra2, 60, 285, `${Number(documento.emerald).toLocaleString()}`);
                            img.getBuffer(Jimp.MIME_PNG, (erri, buffer) => {
                              message.channel.send(``, new Discord.Attachment(buffer, 'Balance_Card.png'));
                     
                    
                    });
                  });
                });
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