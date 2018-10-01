const database = require("../database.js"),
  Jimp = require('jimp');

exports.run = (Sysop, message, suffix) => {
    
    database.Users.findOne({
      "_id": message.author.id
    }, function(erro, documento) {

      if (documento) {
        if(documento.background_shoped === "no") return message.channel.send('Você não comprou o comando')
        if (message.attachments.first()) {
          Jimp.read(`${message.attachments.first().url}`, function(erra, img) {
            if (erra) return message.channel.send('Escreva um link válido...');
            documento.profile_background = `${message.attachments.first().url}`;
            message.reply('fundo do perfil alterado!');
            documento.save();
          });
        } else {
          if (suffix.length < 1) return message.reply('Defina uma nova imagem...');

          Jimp.read(`${suffix}`, function(erra, img) {
            if (erra) return message.channel.send('Escreva um link válido...');
            documento.profile_background = `${suffix}`;
            message.reply('fundo do perfil alterado!');
            documento.save();
          });
        }

      } else {
        message.reply("Você não possui um perfil. Para criar um use:  `sy!register` ");
      }

    });
  };