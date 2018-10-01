const Discord = require('discord.js');
var moment = require('moment');
    	moment.locale('pt-BR');

exports.run = (Sysop, message, args) => {
        var server = message.guild;
        let id = message.guild.id;
        let acc = server.joinedAt.toDateString();
        let accServer = server.createdAt.toDateString();
		const embed = new Discord.RichEmbed()
			.setThumbnail(server.iconURL)
			.setAuthor(server.name, server.iconURL)
			.addField('<:profile:413059046996967443> ID do servidor', `\`${server.id}\``, true)
			.addField('<:mapa_png_by_yourprincessofstoryd:413058712945819650> Região', server.region, true)
			.addField('<:1_xuBOBrH01sAP_R4Ddo6WQg:413059521020166154> Servidor criado em', moment(accServer).format('LL'), true)
			.addField(':calendar_spiral: Bot adicionado em', moment(acc).format('LL'), true)
			.addField('<:certificadologo:413060327471841281> Supremo do Servidor', server.owner.user, true)
			.addField('<:identity:413060046507737090> ID do Supremo', `\`${server.owner.user.id}\``, true)
			.addField('<:TheBlueReview:413060763431731203> Total Membros', `\`${server.memberCount}\` membros no servidor`, true)
			.addField('Pessoas', `👥 ${server.members.filter(member => !member.user.bot).size} usuários`, true)
			.addField('Bots', ` <:bottag:432366284714278932> ${server.members.filter(member => member.user.bot).size} bots`, true)
			.addField('Total Roles', `\`${server.roles.size}\` roles`, true)
			.addField('Status', `<:online:432366851012689921> **Membros Online:** ${server.members.filter(member => member.presence.status == 'online').size}
<:invisible:432366960630824962> **Membros Offline:** ${server.members.filter(member => member.presence.status === 'offline').size}
<:dnd:432367117195804684> **Membros Ocupados:** ${server.members.filter(member => member.presence.status == 'dnd').size}
<:idle:432366904766889984> **Membros Ausentes:** ${server.members.filter(member => member.presence.status == 'idle').size}`,false)
			.addField(`Canais de Texto:`, ` <:ctx:436739811290906635> \`${server.channels.filter(m => m.type === 'text').size}\` canais de texto`, true)
			.addField('Canais de Voz:', ` <:cv:436739823361982465> \`${server.channels.filter(m => m.type === 'voice').size}\` canais de voz`, true)
		    //.addField('Top 10 Principles Roles', `${client.guilds.get(id).roles.map(r => r).slice(0, 10).join(" - ")}) `)
			.setColor('#15ffaf');
    
		message.channel.send({embed});

    };