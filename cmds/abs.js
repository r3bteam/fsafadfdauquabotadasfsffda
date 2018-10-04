const Discord = require("discord.js")

exports.run = (Sysop, message, args) =>{
  
  let menção = message.mentions.users.first() 
  if (!menção) return message.channel.send(`${message.author} Mencione outro usuário para dar um abraço.`)
  
  var abraçoImage = ['http://data.whicdn.com/images/235308182/large.gif', 
  'https://i.pinimg.com/originals/6e/6e/53/6e6e53fb69d7b74286c9d2817e1fc3ca.gif', 
  'http://gifimage.net/wp-content/uploads/2017/09/anime-sad-hug-gif-4.gif']
  var abraço = abraçoImage[Math.floor(abraçoImage.length * Math.random())]
        
        const embed = new Discord.RichEmbed()
        .setDescription(`${message.author} deu um abraço em ${menção}`)
        .setImage(abraço)
        .setColor('#cafb6f')
        message.channel.send({embed})
}
