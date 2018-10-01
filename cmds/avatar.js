const Discord = require("discord.js");
exports.run = (Sysop, message, suffix) => {


let id = message.mentions.users.first()

    ? message.mentions.users.first().id 
    : suffix
    ? suffix[0]
    : null;
if (!id) return message.reply('Marque alguém ou especifique um ID');
let user = Sysop.users.has(id) ? Sysop.users.get(id) : null;
if (user) {
   const embed = new Discord.RichEmbed()
    .setDescription('` TAG `' + '#'+user.discriminator + ` [**Fazer Download!**](${user.displayAvatarURL}) \n \n` + ' :camera_with_flash:  Avatar de ' + user)
    .setImage(user.displayAvatarURL)
    .setColor('#15ffaf')
     message.channel.send({embed});

} else {
    message.reply('Não encontrei nenhum usuário');

    }
};
