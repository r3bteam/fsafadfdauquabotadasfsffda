const Discord = require("discord.js");
const database = require("../database.js")

exports.run = (Sysop, message, args) => {
    database.Guilds.findOne({"_id": message.guild.id }, function(erro, documento) {
	if (!documento) return;
			
			
			let welcome;
			let welcomeChannel;
			let bye;
			let byeChannel;
	                let direct
			let autorole;
			let convites;
			let sugestao;
			let words;
			let meee;
	                let logger;
	                let wel;
	                let by;
	                let hm;
	                let dois;
	                let tres;  
			
			if (!documento.welcome) welcome = '<:switchofficon:469416600412618752> Desativado | Use: sy!welcome help';
			else welcome = `<:switchonicon:469416600764809216> Ativado`
			
			if (!documento.welcomeChannel) welcomeChannel = '<:switchofficon:469416600412618752> Desativado | Use: sy!welcome help';
			else welcomeChannel = `<:switchonicon:469416600764809216> <#${documento.welcomeChannel}>`
			
			if (!documento.bye) bye = '<:switchofficon:469416600412618752> Desativado | Use: sy!bye help';
			else bye = `<:switchonicon:469416600764809216> Ativado`
			
			if (!documento.dm) direct = '<:switchofficon:469416600412618752> Desativado | Use: sy!dm help';
			else direct = `<:switchonicon:469416600764809216> Ativado`
			
			if (!documento.byeChannel) byeChannel = '<:switchofficon:469416600412618752> Desativado | Use: sy!bye help';
			else byeChannel = `<:switchonicon:469416600764809216> Ativado`
			
			if (!documento.byeChannel) hm = '<:switchofficon:469416600412618752> Desativado | Use: sy!bye help';
			else hm = `<:switchonicon:469416600764809216> <#${documento.byeChannel}>`

			if (!documento.welcomeChannel) dois = '<:switchofficon:469416600412618752> Desativado | Use: sy!welcome help';
			else dois = `<:switchonicon:469416600764809216> <#${documento.welcomeChannel}>`
			
			if (!documento.dm) tres = '\`\`\`Markdown\n#\`\`\`';
			else tres = `\`\`\`Markdown\n# ${documento.dm}\`\`\`` 
			
			if (!documento.autorole) autorole = '<:switchofficon:469416600412618752> Desativado | Use: sy!autorole';
			else autorole = `<:switchonicon:469416600764809216> <@&${documento.autorole}>`
			
			if (!documento.convites) convites = '<:switchofficon:469416600412618752> Desativado | Use: sy!filtro convites';
			else convites = `<:switchonicon:469416600764809216> Ativado`
			
			if (!documento.words) words = '<:switchofficon:469416600412618752> Desativado | Use: sy!filtro words';
			else words = `<:switchonicon:469416600764809216> Ativado`
			
			if (!documento.words) meee = '\`\`\`Markdown\n+\`\`\`';
			else meee = `\`\`\`Markdown\n# ${documento.words}\`\`\``
			
			if (!documento.welcome) wel = '\`\`\`Markdown\n#\`\`\`';
			else wel = `\`\`\`Markdown\n# ${documento.welcome}\`\`\``
			
			if (!documento.bye) by = '\`\`\`Markdown\n#\`\`\`';
			else by = `\`\`\`Markdown\n# ${documento.bye}\`\`\``
			
			if (!documento.sugest) sugestao = '<:switchofficon:469416600412618752> Desativado | Use: sy!sugestao';
			else sugestao = `<:switchonicon:469416600764809216> <#${documento.sugest}>`
			
                       if (!documento.logger) logger = '<:switchofficon:469416600412618752> Desativado | Use: sy!loggs';
			else logger = `<:switchonicon:469416600764809216> <#${documento.logger}>`
	
	         let server = message.guild;
			 let user = message.mentions.users.size > 0 ? message.mentions.users.first() : message.author;
			 const embed = new Discord.RichEmbed()
			.setThumbnail(server.iconURL)
			.setAuthor(user.tag, user.avatarURL)
			.setDescription(`Olá **${user.username}**, este e o painel de configurações do bot em seu servidor. Aqui você pode conferir todas as configurações dentro do servidor em cada comando disponível.\n\n--------------------------------------------------------------------`)
			.addField('Welcome | Mensagens de boas-vindas do servidor:', `${welcome}`)
			.addField('Bye | Mensagens de saída do servidor:', `${byeChannel}`)
			.addField('DM | Mensagens de entrada no privado:', `${direct}`)
			.addField('Canal de entrada:', `${dois}`, true)
			.addField('Canal de saida:', `${hm}`, true)
			.addField('Filtro de Convites:',`${convites}`, true)
			.addField('Prefixo neste servidor',`${documento.setprefix}`, true)
			//.addField('Palavras filtradas neste servidor:', `${meee}`,false)
			//.addField('Mensagem de entrada:', `${wel}`,false)
			//.addField('Mensagem de saída:', `${by}`,false)
			//.addField('Mensagem de entrada no privado:', `${tres}`,false)
			.addField('Autorole do servidor:',`${autorole}`, true)
			.addField('Canal de sugestão:',`${sugestao}`, true)
			.setFooter(`Configurações de ${server.name}`) 
			.setColor('#15ffaf');
        
		message.channel.send({ embed });
    	
    });
	};