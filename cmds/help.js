const Discord = require("discord.js");
const db = require("../database.js")

exports.run = (Sysop, message, suffix) => {

db.Guilds.findOne({"_id": message.guild.id }, function(erra, sysop) {


const embed = new Discord.RichEmbed()
.setTitle(`Help | Ajuda Sysop`)
.setThumbnail(`https://cdn.discordapp.com/attachments/442346665052209153/496102324792721409/SysopLogo2019.png`)
.setDescription(`**${sysop.setprefix}help mod** - Para ver meus comandos de Moderação.\n**${sysop.setprefix}help social** - Para ver meus comandos Sociais.\n**${sysop.setprefix}help registros** - Para ver meus comandos de Registro\n**${sysop.setprefix}help economia** - Para ver meus comandos de Economia\n**${sysop.setprefix}help musica** - Para ver meus comandos de Música.`)
.setFooter(message.guild.name + ' Requisitado por: ' + message.author.username)
.setColor('#15ffaf');
if (!suffix[0]) return message.channel.send({embed});

switch (suffix[0]){
	
case 'mod': {
    
    message.channel.send(`OK ${message.author}! lhe enviei meus comandos de Moderação em seu privado.`);
        const embed = new Discord.RichEmbed()
        .setTitle(`Comandos de Administração/Moderação`)
        .setDescription(`**Prefixo:** ${sysop.setprefix}\n\n
\`>>\` **ban** - Para banir usuários por menção ou ID se tiver em outro server conectado **juntamente** com o bot.
\`>>\` **unban** - Para desbanir usuários por ID se tiver conectado em outro server juntamente com o bot.
\`>>\` **autorole** - Defina o cargo auto atribuivel para quando um usuário entrar no servidor.
\`>>\` **createrole** - Crie um cargo fácil agora no seu servidor. Defina o nome, a cor e o bot da as permissões necessárias de um membro.
\`>>\` **config** - Veja as configurações do seu servidor.
\`>>\` **apagar** - Limpe o chat de algum canal ou de um usuário especifico. 
\`>>\` **filtro** - Ative o filtro de convites para o bot bloquear e banir usuário caso envie mais de 2 vezes. 
\`>>\` **prefix** - Altere o prefixo do bot em seu servidor. 
\`>>\` **sugestao** - Defina um canal para sugestões e o bot reagirá mensagens deixadas no mesmo.
\`>>\` **welcome** - Defina a mensagem de boas-vindas no seu servidor. 
\`>>\` **dm** - Defina a mensagem de boas-vindas do seu servidor no privado dos usuários. 
\`>>\` **bye** - Defina a mensagem de saída do seu servidor.
\`>>\` **lock** - Bloqueia o canal de usuários enviar mensagem e reagir mensagens.
\`>>\` **unlock** - Desbloqueia o canal, permitindo usuários falarem e reagir mensagens.
\`>>\` **contador** - Defina o canal do contador de membros.
\`>>\` **contadora** - Defina o canal do contador animado de membros.
\`>>\` **texto** - Defina o texto do contador.
\`>>\` **mute** [Manutenção] - Mute um usuário no servidor.
\`>>\` **unmute** - Desmute um usuário no servidor.
\`>>\` **striker**  - Dê advertência em um usuários especifico.
\`>>\` **addrole** [MANUTENÇÃO] - Dê um cargo especifico para um usuário especifico ou um cargo especifico para todos do servidor 
\`>>\` **level on/off ** - Para habilitar ou desabilitar o sistema de levels.
`)
        .setColor('#15ffaf');
        message.author.send({embed}).then(sentMsg => sentMsg.delete(130000));
        return;
}

case 'registros': {
    
    message.channel.send(`OK ${message.author}! lhe enviei meus comandos de Registro em seu privado.`);
        const embed = new Discord.RichEmbed()
        .setTitle(`Comandos de Administração/Moderação`)
        .setDescription(`**Prefixo:** ${sysop.setprefix}\n\n
\`>>\` **setregistro** - Para configurar as tags de registros.
\`>>\` **registra** - Para registrar pessoa.
\`>>\` **registros** - Informações de registro do servidor.
\`>>\` **registrou** - Veja quantos usuários você registrou.`)
        .setColor('#15ffaf');
        message.author.send({embed}).then(sentMsg => sentMsg.delete(130000));
        return;
}
 
 case 'economia': {
    
    message.channel.send(`OK ${message.author}! lhe enviei meus comandos de Economia em seu privado.`);
        const embed = new Discord.RichEmbed()
        .setTitle(`Comandos de Administração/Moderação`)
        .setDescription(`**Prefixo:** ${sysop.setprefix}\n\n
\`>>\` **balance** - Para ver seu balance de economia.
\`>>\` **profile** - Para visualizar seu profile.
\`>>\` **shop** - Para abrir a loja de economia do bot.
\`>>\` **sycoins** - Para doar Sycoins a alguém.
\`>>\` **sycrystal** - Para doar Sycrystal a alguém.
\`>>\` **star** - Para dar uma estrela a um usuário. 
\`>>\` **rep** - Para dar um ponto de reputação a alguém. 
\`>>\` **work** - Para coletar seu bônus de trabalho. 
\`>>\` **esmeralda** - Para doar esmeraldas a alguém.
\`>>\` **container open** - Para abrir um container. 
\`>>\` **containers** - Para doar containers a alguém.
\`>>\` **batalhar** - Para batalhar com alguém e ganhar prêmios.
\`>>\` **bio** - Para alterar sua biografia no seu perfil.
\`>>\` **assaunt** - Para roubar um usuário.
\`>>\` **casar** - Para casar com alguém.
\`>>\` **divorcio** - Para se divorcia`)
        .setColor('#15ffaf');
        message.author.send({embed}).then(sentMsg => sentMsg.delete(130000));
        return;
}
    
    case 'social': {
    
    message.channel.send(`OK ${message.author}! lhe enviei meus comandos de Sociais em seu privado.`);
        const embed = new Discord.RichEmbed()
        .setTitle(`Comandos de Administração/Moderação`)
        .setDescription(`**Prefixo:** ${sysop.setprefix}\n\n
\`>>\` **avatar** - Para visualizar avatar de um usuário.
\`>>\` **div** - Veja quantas pessoas você recrutou no servidor.
\`>>\` **imgur** - Faça upload de alguma imagem do seu pc com o bot.
\`>>\` **info** - Informações do bot.
\`>>\` **recrutador** - Veja o ranking/top5 de usuários que mais recrutam no servidor.
\`>>\` **server** - Veja informações do servidor.
\`>>\` **thumb** - Visualize o avatar do Servidor.
\`>>\` **tag** - Pesquise por usuários com um descriminator(tag) especifica.
\`>>\` **userinfo** - Para ver informações de um usuário.
\`>>\` **roleinfo** - Para ver informações de um cargo no servidor.`)
        .setColor('#15ffaf');
        message.author.send({embed}).then(sentMsg => sentMsg.delete(130000));
        return;
}
   
     case 'musica': {
    
    message.channel.send(`OK ${message.author}! lhe enviei meus comandos de Músicas em seu privado.`);
        const embed = new Discord.RichEmbed()
        .setTitle(`Comandos de Administração/Moderação`)
        .setDescription(`**Prefixo:** ${sysop.setprefix}\n\n
\`>>\` **play** - Para adicionar músicas por nome e ou URL YouTube.
\`>>\` **pause** - Para pausar a música.
\`>>\` **resume** - Para despausar a música.
\`>>\` **queue** - Para ver a lista de música.
\`>>\` **volume** - Altere o volume da música.
\`>>\` **skip** - Para pular a música.
\`>>\` **stop** - Para desconectar o bot da call e apagar as músicas da lista.`)
        .setColor('#15ffaf');
        message.author.send({embed}).then(sentMsg => sentMsg.delete(130000));
        return;
}
    
}
});

};
