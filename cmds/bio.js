const database = require("../database.js");

exports.run = (Sysop, message, args) => {
    
    database.Users.findOne({"_id":message.author.id},function(erro,documento){

if (documento) {
        if(documento.bio_shoped === "no") return message.channel.send('Você não comprou o comando')

         if (!args) return message.reply('Escreva sobre você. O limite máximo de caracteres é: `160`');
    if (args.join(' ').length > 160) return message.reply('<:sysalerta:469789950938841088> Você ultrapassou o limite de caracteres.');

        documento.bio = args.join(' ')
        documento.save();
        message.reply(`Biografia Alterada para: \`\`${documento.bio}\`\` `);
    } else {
      var pessoa = new database.Users({
                        _id: message.author.id,
                        name: message.author.username, 
                        discrim: "#" + message.author.discriminator,
                        bio: "Sobre você",
                        rpup: 0,
                        adv: 0,
                        coins: 0,
                        rubys: 0,
                        containers: 0,
                        emerald: 0,
                        goldbox: 0,
                        nv: 0,
                        nvxp: 0,
                        profile_background: 'https://cdn.discordapp.com/attachments/442346665052209153/469407730797641738/SysopLogoLight.png',
                      
                    })
                    pessoa.save()
                    message.reply("<:LikeSysop3:476062023629799424> **Histórico criado e salvo!** Use novamente este comando!");
    }

});
  };