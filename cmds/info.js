const Discord = require("discord.js");

exports.run = (Sysop, message, args) => {

    let ms = Sysop.uptime;
    let cd = 24 * 60 * 60 * 1000; // Calc days
    let ch = 60 * 60 * 1000; // Calc hours
    let cm = 60 * 1000; // Calc minutes
    let cs = 1000; // Calc seconds
    let days = Math.floor(ms / cd);
    let dms = days * cd; // Days, in ms
    let hours = Math.floor((ms - dms) / ch);
    let hms = hours * ch; // Hours, in ms
    let minutes = Math.floor((ms - dms - hms) / cm);
    let mms = minutes * cm; // Minutes, in ms
    let seconds = Math.round((ms - dms - hms - mms) / cs);
    if (seconds === 60) {
        minutes++; // Increase by 1
        seconds = 0;
    }
    if (minutes === 60) {
        hours++; // Inc by 1
        minutes = 0;
    }
    if (hours === 24) {
        days++; // Increase by 1
        hours = 0;
    }
    let dateStrings = [];

    if (days === 1) {
        dateStrings.push('**1** dia');
    } else if (days > 1) {
        dateStrings.push('**' + String(days) + '** dias');
    }

    if (hours === 1) {
        dateStrings.push('**1** hora');
    } else if (hours > 1) {
        dateStrings.push('**' + String(hours) + '** horas');
    }

    if (minutes === 1) {
        dateStrings.push('**1** minuto');
    } else if (minutes > 1) {
        dateStrings.push('**' + String(minutes) + '** minutos');
    }

    if (seconds === 1) {
        dateStrings.push('**1** segundo');
    } else if (seconds > 1) {
        dateStrings.push('**' + String(seconds) + '** segundos');
    }

    let dateString = '';
    for (let i = 0; i < dateStrings.length - 1; i++) {
        dateString += dateStrings[i];
        dateString += ', ';
    }
    if (dateStrings.length >= 2) {
        dateString = dateString.slice(0, dateString.length - 2) + dateString.slice(dateString.length - 1);
        dateString += 'e ';
    }
    dateString += dateStrings[dateStrings.length - 1];
        
        var server = message.guild;
	
		const embed = new Discord.RichEmbed()
			.setAuthor(server.name, server.iconURL)
			.setThumbnail('https://cdn.discordapp.com/attachments/442346665052209153/469406950413565962/SysopLogo.png')
			.setTitle("**SYSOP INFOS**")
			.setDescription(`Sysop é um bot brasileiro escrito em discord.js. Um bot mas com inúmeras funcionalidades. Sysop é dividido em categorias de Moderação, Social, Entretenimento, Economia, Aposta e Música. Sysop foi criado e está sendo desenvolvido cada vez mais por <@244489368717230090> . Quaisquer problemas que você enfrente com o Sysop você pode usar o comando \`sy!support\` e nos enviar mensagem. Sysop está sendo trabalho para cada vez mais dar muitos passos!`)
            .addField('Configurações',`\`💻\` Servidores conectados: ${Sysop.guilds.size.toLocaleString()}
\`👥\` Conheço um total de ${Sysop.users.size.toLocaleString()} usuários
\`#\`  Total de canais ${Sysop.channels.size.toLocaleString()}
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n
<:dbl:466726889193734156> DBL SITE [Acessar](https://discordbots.org/bot/412593783696261121)\n
•  Vespertine's Bot List SITE [Acessar](https://bots.perfectdreams.net/bot/412593783696261121)\n
•  Uptime ${dateString}\n
•  Versão **2.0.0**\n
•  Convite [Convite Direto](https://discordapp.com/oauth2/authorize?client_id=412593783696261121&scope=bot&permissions=2146958583)\n
•  Servidor Suporte [Sysop](https://discord.gg/GMSjtTQ)\n
•  Dono: <@244489368717230090>\n
•  Staff: <@345014174004543488> | <@431334258653528066> | <@491359844062855199>`, false)
.setColor('#15ffaf');

		message.channel.send({embed});
    
};
