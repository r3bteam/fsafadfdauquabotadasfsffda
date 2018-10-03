const Canvas = require('canvas');
const pixelUtil = require('pixel-util');
const { RichEmbed, Attachment } = require("discord.js")

exports.run = (Sysop, message, args)  => {
  var emoji;
  var mensagem;
  var porcentagem;
  var prc = Math.round(Math.random() * 100);
  
  function getDesenporc(por) {
    let desen = '[..........]'
    por = Math.round(por / 10)
    
    
    for (var i = 0; i < 10; i++) {
      if (i < por) {
        desen = desen.replace('.', '█')
      }
    }
    return desen
  }
  
  if (prc <= 10) {
    emoji = 'https://i.imgur.com/t9Jd3K9.png';
    porcentagem = "`[█..........]`";
    mensagem = `**Bem, acho que não. Fiquei sabendo que ${message.mentions.users.last().name} gosta de talaricar.** :astonished: `;
  } else  if (prc <= 20) {
    emoji = 'https://i.imgur.com/t9Jd3K9.png';
    porcentagem = "`[██.........]`";
    mensagem = `**É, talvez numa próxima reencarnação!**`;
  } else if (prc <= 40) {
    emoji = 'https://i.imgur.com/Y7GwywE.png';   
    porcentagem = "`[████.......]`";
    mensagem = `**Se os dois toparem, talvez dê em algo. :shrug: **`;
  } else if (prc <= 60) {
    emoji = 'https://i.imgur.com/Y7GwywE.png';   
    porcentagem = "`[██████.....]`";
    mensagem = `**Acho que temos um novo casal! Só acho mesmo...** :kiss_ww: `;
  } else if (prc <= 80) {
    emoji = 'https://i.imgur.com/ycSpTIh.png';  
    porcentagem = "`[████████...]`";
    mensagem = `**Se rolar casamento me chamem.**`;
  } else if (prc <= 99) {
    emoji = 'https://i.imgur.com/Y7GwywE.png';   
    porcentagem = "`[██████████.]`";
    mensagem = `**Que casal fofo, shippo concerteza!**`;
  } else {
    emoji = 'https://i.imgur.com/Fv8Irk0.png';
    porcentagem = "`[███████████]`";
    mensagem = `**Casal mais que perfeito!**`;
  }
  
  
  
  if (message.author.bot) return
  if (message.mentions.users.size < 1) return message.channel.send(`${message.author} mencione dois usuários que você deseja shippar!`);
  if (message.mentions.users.array().length < 2) {
    var user1 = message.author, user2 = message.mentions.users.first()
  } else {
    var user1 =  message.mentions.users.first(), user2 = message.mentions.users.last()
  }
  
  var Image = Canvas.Image,
        canvas = new Canvas(660, 220),
        ctx = canvas.getContext('2d');
  
  canvas.jpegStream({
    quality: 100
  });
  
  pixelUtil.createBuffer(user1.displayAvatarURL).then(img1 => {
    let img = new Image;
    img.src = img1;
    ctx.drawImage(img, 0, 0, 220, 220);
    
    pixelUtil.createBuffer(emoji).then(img1 => {
      let img = new Image;
      img.src = img1;
      ctx.drawImage(img, 240, 20, 180, 180);
      
      pixelUtil.createBuffer(user2.displayAvatarURL).then(img1 => {
        let img = new Image;
        img.src = img1;
        ctx.drawImage(img, 440, 0, 220, 220);
        
        var buf = canvas.toBuffer()

        var attach = new Attachment(buf, "ship.jpg")
        
        message.channel.send(`💖<@${user1.id}> e <@${user2.id}>💖\n\n${prc}% ${porcentagem}\n\n${mensagem}`, {
        file: attach
        })
      })
    })
  })
}
