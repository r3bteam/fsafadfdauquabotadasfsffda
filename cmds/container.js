const Discord = require('discord.js');
let database = require("../database.js");

exports.run = (Sysop, message, suffix) => {
// if (!['244489368717230090'].includes(message.author.id)) return message.channel.send(`<:sysalerta:469789950938841088> Opa ${message.author}, comando em manutenção!`);
	
       // suffix = suffix
        let razaou = suffix[0];

    database.Guilds.findOne({
        "_id": message.guild.id }, 
        function(erro, sysop) {


        database.Users.findOne({
            "_id": message.author.id
        }, function (erro, documento) {
            if(documento) {

                var prc = Math.round(Math.random() * 60);

                if(!razaou < 1) {
                    if(message.content.startsWith(`${sysop.setprefix}container open`)) {
                        if(documento.containers > 0) {

                            var premio;
                            var quantidade;
                            
                                 if(prc <= 20) {
                                premio = "Goldbox <:New_goldenbox_10:458877483182194698>";
                                quantidade = 10;
                                var prem = Math.round(Math.random() * parseInt(quantidade) + 1);
                                documento.goldbox += prem
                                documento.containers -= 1
                                documento.save()
                              } else if(prc <= 30) {
                                premio = "Esmeralda <a:esmeral:442718169585680387>";
                                quantidade = 100;
                                var prem = Math.round(Math.random() * parseInt(quantidade) + 1);
                                documento.emerald += prem
                                documento.containers -= 1
                                documento.save()
				} else if(prc <= 30) {
                                premio = "EEXP :comet:";
                                quantidade = 500;
                                var prem = Math.round(Math.random() * parseInt(quantidade) + 1);
                                documento.eexp += prem
                                documento.containers -= 1
                                documento.save()      
                            } else if(prc <= 40) {
                                premio = "Sycoins <:Sycoins:469789351358889984>";
                                quantidade = 2000;
                                var prem = Math.round(Math.random() * parseInt(quantidade) + 1);
                                documento.coins += prem
                                documento.containers -= 1
                                documento.save()
                            } else if(prc <= 60) {
                                premio = "Sy Crystal <:sysopcrystal:482651147111366656>";
                                quantidade = 500;
                                var prem = Math.round(Math.random() * parseInt(quantidade) + 1);
                                documento.rubys += prem
                                documento.containers -= 1
                                documento.save()
			    }
                        
                            
  message.channel.send(`<a:Rolling:459004768954744843> Abrindo um container...`).then(function(value) {
  var rpts = ['https://cdn.discordapp.com/attachments/411623246593654795/458986606519386122/Container_assassin.png',
               'https://cdn.discordapp.com/attachments/411623246593654795/458986611913523211/Container_frontier_zero.png',
               'https://cdn.discordapp.com/attachments/411623246593654795/458986618804633610/Container_gold.png',
               'https://cdn.discordapp.com/attachments/411623246593654795/458986890415046657/Container_steampunk.png',
               'https://cdn.discordapp.com/attachments/411623246593654795/458986892403277844/Container_steel.png'];
   var thumb = rpts[Math.floor(Math.random() * rpts.length)];
  
                       setTimeout(function() {
                       const embed = new Discord.RichEmbed()
                       embed.setThumbnail(thumb)
                       embed.setAuthor(message.author.username, message.author.avatarURL)
                       embed.addField(`**Prêmio:**`,` Você ganhou ${prem} ${premio} abrindo um container`, false)
                       .setColor('#7ff150');
   
    value.edit(embed)}, 3000)
  
 
})
                        } else {
        message.reply('Você não possui containers!');
                        }
                    } else {
                        message.reply(`**Use** \`${sysop.setprefix}container open\` **para abrir um container**.`);
                    }
                } else {
		message.channel.send(`**Você possui um total de** \`\`${Number(documento.containers).toLocaleString()}\`\` **containers**`);
           } 
                
            } else {
                let pessoa = new database.Users({
                    _id: message.author.id,
                    level: 0,
                    xp: 0,
                    coins: 0,
                    rubys: 0,
                    containers: 0,
                    rarebox: 0,
                    cupcake: 0,
                    goldbox: 0,
                })

                pessoa.save()
            
            }})
        });
};