const database = require("../database.js"),
  Jimp = require('jimp');

exports.run = (Sysop, message, suffix) =>
    
    database.Users.findOne({
      "_id": message.author.id
    }, function(erro, documento) {

      if (documento) {
        if(documento.shopped_background === "no") return message.channel.send('Você não comprou o comando')
        if (message.attachments.first()) {
          Jimp.read(`${message.attachments.first().url}`, function(erra, img) {
            if (erra) return message.channel.send('Escreva um link válido...');
            documento.balance_background = `${message.attachments.first().url}`;
            message.reply('fundo de perfil do seu balance alterado!');
            documento.save();
          });
        } else {
          if (suffix.length < 1) return message.reply('Defina uma nova imagem...');

          Jimp.read(`${suffix}`, function(erra, img) {
            if (erra) return message.channel.send('Escreva um link válido...');
            documento.balance_background = `${suffix}`;
            message.reply('fundo de perfil do seu balance alterado!');
            documento.save();
          });
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
