const Discord = require("discord.js");
const db = require("../database.js");
var dayCol = new Set()

exports.run = (Sysop, message, suffix) => {
  
  message.delete();
  db.Guilds.findOne({
    "_id": message.guild.id}, 
    function(erra, servidor) {
        if (servidor) {

  
            let args = suffix 
            let sysop =  args.slice(1).join(' ') 
            ? args.slice(1).join(' ')
            :  `Foi banido por ${message.author.username}#${message.author.discriminator}. Sem motivo evidente.`;




if (!message.member.hasPermission('BAN_MEMBERS')) 
return message.channel.send(`<:alert:506568192521535498> **|** ${message.author}, você não tem permissão para banir, bobinho(a)!`);

const filtro = ['discord.li','discord.io','discord.gg','https://','filho da puta', 'fdp', 'cú', 'filho da mãe', 'baka', 'idiota', 'tnc', 'puta', 'puto', 'piranha', 'anta', 'bosta', 'merda']

if(filtro.some(p => message.content.includes(p))){
  message.channel.send(`<:alert:506568192521535498> ${message.author} você não pode banir este usuário pois está usando linguagens impróprias como motivo.`).then(sentMsg => sentMsg.delete(7000));
  return;
}  

let searchChannel = message.guild.channels.find(search => search.id === servidor.BAN);

if (!searchChannel)
return message.channel.send(`<:alert:506568192521535498> **|** Opa ${message.author}, nenhum canal para o informes dos banimentos foi definido. Use: ${servidor.setprefix}ajuda informes para ver mais informações.`);
        

let id = message.mentions.users.first()

    ? message.mentions.users.first().id 

    : args
    ? args[0]
    : null;
if (!id) return message.reply('<:Alerta:507449197801504778> **|** Mencione um usuário ou especifique um ID.');

let banPerms = message.guild.member(Sysop.user).hasPermission('BAN_MEMBERS')
if (!banPerms)  return message.reply("<:Nao:507411636664139786> **|** Eu não tenho permissão para banir usuários nesse servidor.");

let user = Sysop.users.has(id) ? Sysop.users.get(id) : null;

if (!user) return message.reply("<:Alerta:507449197801504778> **|** Não encontrei nenhum usuário.");



message.channel.send(`<:Alvo:507455947388747778> **|** Opa ${message.author}, essa função requer confirmação. Responda essa mensagem com **"ban"** para banir o usuário ou com **"cancelar"** para cancelar o banimento.`).then(() => {
message.channel.awaitMessages(res => 
(res.content == "ban" && res.author.id == message.author.id) || (res.content == 'cancelar' && res.author.id == message.author.id), { 

max: 1, time: 60000, errors: ['time'] }).then(col => {
  
if (col.first().content == 'ban') {
    
message.guild.fetchBans().then(bans => {
let users = bans.filter(r => r === user);
if (users.first()) 
return message.channel.send(`<:Cartas:507449197755236363> **|** ${message.author} este usuário já se encontra banido.`);

    
let bannable = message.guild.member(id)
if (bannable) {  
if (bannable.highestRole.position >= message.member.highestRole.position) return message.reply("<:Nao:507411636664139786> **|** Você não tem permissão suficiente para banir esse usuário!")
    
if (!message.guild.member(user).bannable) 
return message.channel.send(`<:Nao:507411636664139786> **|** ${message.author}, eu não posso banir esse usuário.`);
    
} else {

    message.guild.ban(user, sysop);
    let server = message.guild
    const embed1 = new Discord.RichEmbed()
    .setTitle(`Ban Ação`)
    .addField(`Usuário banido`, user,true)
    .addField(`ID`, user.id,true)
    .addField(`Banido do servidor:`, server.name,true)
    .addField(`**Executor**`, message.author,true)
    .addField(`**Motivo do ban:**`, `\`\`\`https\n${sysop}\`\`\``)
    .setThumbnail(user.avatarURL)
    .setColor('#ff0041')
    Sysop.guilds.get(message.guild.id).channels.get(servidor.logg_banAction).send({embed1})
    user.send({embed1})
}
if (user) {

   
    message.guild.ban(user, sysop);
        let server = message.guild
    const embed = new Discord.RichEmbed()
    .setTitle(`Ban Ação`)
    .addField(`Usuário banido`, user,true)
    .addField(`ID`, user.id,true)
    .addField(`Banido do servidor:`, server.name,true)
    .addField(`**Executor**`, message.author,true)
    .addField(`**Motivo do ban:**`, `\`\`\`https\n${sysop}\`\`\``)
    .setThumbnail(user.avatarURL)
    .setColor('#ff0041')
    Sysop.guilds.get(message.guild.id).channels.get(servidor.logg_banAction).send({embed})
    user.send({embed})
  
  message.channel.send(`<:Adaga:507454316479774730> **|** ${message.author} usuário banido com sucesso!`)


} else {
    message.channel.send(`<:Alerta:507449197801504778> **|** ${message.author} Não consegui encontrar nenhum usuário.`).then(sentMsg => sentMsg.delete(5000));

}

})

    }
    if (col.first().content == 'cancelar') {
    message.channel.send(`<:Sim:507411636215087115> **|** ${message.author} sua solicitação de banimento foi cancelada!`);
    }
}).catch(() => message.channel.send(`<:Tempo:507450275594764298> **|** ${message.author}, o seu tempo de **1 minuto** terminou. Solicitação de banimento expirada.`));
      
});
}});
};

