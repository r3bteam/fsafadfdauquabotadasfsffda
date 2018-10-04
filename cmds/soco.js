const Discord = require("discord.js")

exports.run = (Sysop, message, args) =>{
  
  let menção = message.mentions.users.first() 
  if (!menção) return message.channel.send(`${message.author} Mencione outro usuário para dar um beijo.`)
  
  var abraçoImage = ['https://i0.wp.com/38.media.tumblr.com/74d80c9e10b6669eab8231cd2aa86150/tumblr_n89z0a2Hbv1qckkfko1_500.gif?resize=712%2C400&ssl=1',
  'http://37.media.tumblr.com/2473ea23225965800f03634f9192a72f/tumblr_mn2dyi7a7k1r91cn2o1_500.gif',
  'https://media.giphy.com/media/10Am8idu3qBYRy/giphy.gif']
  var abraço = abraçoImage[Math.floor(abraçoImage.length * Math.random())]
        
        const embed = new Discord.RichEmbed()
        .setDescription(`<:socar:497244770519875588> ${message.author} deu um soco em ${menção} `)
        .setImage(abraço)
        .setColor('#ff8000')
        message.channel.send({embed})
}
