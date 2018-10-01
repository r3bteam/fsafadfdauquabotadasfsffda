const Discord = require('discord.js');

exports.run = (Sysop, message, args) => {   
	    
        message.channel.guild.fetchInvites().then(invites => {
            if (!invites) return message.reply('Este servidor não possui convites!');
        
            
               
            var rank    = invites.array().sort((a, b) => b.uses - a.uses).slice(0, 5);
            var primeiro  = rank[0];
            var segundo   = rank[1];
            var terceiro  = rank[2];
            var quarto    = rank[3];
            var quinto    = rank[4];
            if (!primeiro) return message.reply('Este servidor não possui convites para ter um rank!');
            if (!segundo) return message.reply('Este servidor não possui convites para ter um rank!');
            if (!terceiro) return message.reply('Este servidor precisa de 5 convites gerados para obter um rank!');
            if (!quarto) return message.reply('Este servidor precisa de 5 convites gerados para obter um rank!');
            if (!quinto) return message.reply('Este servidor precisa de 5 convites gerados para obter um rank!');
        
            let total = primeiro.uses + segundo.uses + terceiro.uses + quarto.uses + quinto.uses;
          
            message.channel.send({
                embed: {
				color: 0x4959e9,
				description:
`Os top 5 recrutadores de nosso servidor
\`\`1º\`\` :first_place: \`\`${primeiro.inviter.username}\`\` Convidou \`\`${primeiro.uses}\`\` pessoas
\`\`2º\`\` :second_place: \`\`${segundo.inviter.username}\`\` Convidou \`\`${segundo.uses}\`\` pessoas
\`\`3º\`\` :third_place: \`\`${terceiro.inviter.username}\`\` Convidou \`\`${terceiro.uses}\`\` pessoas
\`\`4º\`\` :medal: \`\`${quarto.inviter.username}\`\` Convidou \`\`${quarto.uses}\`\` pessoas
\`\`5º\`\` :medal: \`\`${quinto.inviter.username}\`\` Convidou \`\`${quinto.uses}\`\` pessoas
...............................................................................................
💢 **Total recrutados** ${total} | 💢 **Total convites:** ${invites.size}
                
            `
                }
                });

        });
 };