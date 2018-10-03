const Discord = require('discord.js');
exports.run = (Sysop, message, args) => {
   
    let role = message.mentions.roles.first() || message.guild.roles.get(args[0]) || message.guild.roles.find(role => role.name === args[0]);
    if (!role) role = message.member.highestRole;


    const embed = new Discord.RichEmbed()
        .setColor(role.hexColor)
        .setTitle(`Cargo ${role.name}`)
        .addField('Membros', role.members.size, true)
        .addField('Cor Hex', role.hexColor, true)
        .addField('Data de Criação', role.createdAt.toDateString(), true)
        .addField('Editável?', role.editable.toString(), true)
        .addField('Managed', role.managed.toString(), true)
        .addField('ID', role.id, true);
         message.channel.send({embed});
};
