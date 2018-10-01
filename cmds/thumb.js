exports.run = (Sysop, message) => {
        
  message.delete(); 
    
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed();
    embed.setDescription(`Thumbnail do servidor:`)
    embed.setImage(message.guild.iconURL+'?size=2048')
    embed.setColor('#15ffaf');
    
    message.channel.send({embed});
    };