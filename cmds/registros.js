const Discord = require("discord.js");
const db = require("../database.js");

exports.run = (Sysop, message, args) => {
message.delete(1000);  
 

 
db.Guilds.findOne({ "_id": message.guild.id}, function (erro, doc2) {
if(doc2) {  
    

let server = message.guild ;

var no =  message.guild.roles.find('id', doc2.staffer);
if (no == null)return message.reply(`cargo staff/registradores não definido neste servidor ainda.`);
let registradores = message.guild.roles.get(doc2.staffer).members;

var nt =  message.guild.roles.find('id', doc2.autorole);
if (nt == null)return message.reply(`cargo autorole não definido neste servidor ainda.`);
let noregistro = message.guild.roles.get(doc2.autorole).members;

var n =  message.guild.roles.find('id', doc2.man);
let man = message.guild.roles.get(doc2.man).members;
if (n == null)return message.reply(`cargo masculino não definido neste servidor ainda.`);

var nn =  message.guild.roles.find('id', doc2.girl);
let girl = message.guild.roles.get(doc2.girl).members;
if (nn == null)return message.reply(`cargo feminino não definido neste servidor ainda.`);

if(!message.guild.members.get(message.author.id).roles.find("id", doc2.staffer)) 
return message.channel.send(`<:xguardian:476061993368027148> Opa ${message.author}, que situação complicada! Você não é um usuário Staff por tanto não tem acesso ao comando.`);
        
let hm = man.size
let mh = girl.size

const embed = new Discord.RichEmbed()
.setThumbnail(server.iconURL)
.setAuthor(server.name)
.setDescription(`**Total de Registradores:** ${Number(registradores.size).toLocaleString()}\n\n• :blue_heart: Usuários Masculino: **${Number(hm).toLocaleString()}**\n• :heart: Usuários Feminino: **${Number(mh).toLocaleString()}**`)
.addField(`Total de usuários registrados:`, `:star2:  ${Number(hm+mh).toLocaleString()}`)
.addField(`Total de usuários sem registros:`, `<:sysalerta:469789950938841088> ${Number(noregistro.size).toLocaleString()}`)
.setColor('#ec4409');
message.channel.send({embed});

} else {
 
 
            var pessoa = new db.Guilds({
                _id: message.guild.id,
                autorole: '',
                sugestao: '',
                filterInvites: false,
                filterPrintscreen: '',
                filterWords: [],
                welcome: '',
                welcomeChannel: '',
                bye: '',
                byeChannel: '',
                dm: '',
                girl: '',
                man: '',
                staffer: '',
            });
            pessoa.save();
            message.channel.send(`<:xguardian:476061993368027148> ${message.author}, Servidor não registrado, use o comando novamente.`);
   
}
});
};