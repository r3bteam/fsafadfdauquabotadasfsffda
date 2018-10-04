const Discord = require("discord.js")

exports.run = (Sysop, message, args) =>{
  
  let menção = message.mentions.users.first() 
  if (!menção) return message.channel.send(`${message.author} Mencione outro usuário para dar um beijo.`)
  
  var abraçoImage = ['https://i1.wp.com/loveisaname.com/wp-content/uploads/2016/09/23.gif',
  'https://steamusercontent-a.akamaihd.net/ugc/812181304582169588/C319EEBBD455CD0DAB1A779536B26431575972B6/',
  'https://media.giphy.com/media/ll5leTSPh4ocE/giphy.gif',
  'https://media1.tenor.com/images/61dba0b61a2647a0663b7bde896c966c/tenor.gif?itemid=5262571']
  var abraço = abraçoImage[Math.floor(abraçoImage.length * Math.random())]
        
        const embed = new Discord.RichEmbed()
        .setDescription(`:heart: ${message.author} deu um beijo em ${menção} :heart:`)
        .setImage(abraço)
        .setColor('#ff090f')
        message.channel.send({embed})
}
