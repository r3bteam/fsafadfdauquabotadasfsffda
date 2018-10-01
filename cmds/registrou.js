var database = require("../database.js");
const Discord = require("discord.js");
var dayCol = []


exports.run = (Sysop, message, args) => {


  database.Guilds.findOne({"_id":message.guild.id},function(erro,documento){
    
        if (documento) {       


if(!message.member.roles.find("id", documento.staffer)) 
return message.channel.send(`<:xguardian:476061993368027148> Opa ${message.author}, que situação complicada! Você não é um usuário Staff por tanto não tem acesso ao comando.`);

    let user = message.mentions.users.first();
 
    let qq =  message.mentions.users.first() ? message.guild.id+message.mentions.users.first().id : message.guild.id+message.author.id;
  

    if(!dayCol.includes(message.author.id)) {
        
    database.Registrador.findOne({ "_id": qq }, function(erro, documento) {

        if (documento) {


let user =  message.mentions.users.first() ? message.mentions.users.first() : message.author;
                

const embed = new Discord.RichEmbed()
embed.setAuthor(`Registrador (a) `+user.username, user.avatarURL)
embed.addField(`:blue_heart: Meninos`, `Registrou \`\`${Number(documento.hm).toLocaleString()}\`\` menino (s)`,false)
embed.addField(`:heart: Meninas`, `Registrou  \`\`${Number(documento.mh).toLocaleString()}\`\` menina (s) `,false)
embed.addField(`:anger: Total`, `Registrou um total de \`\`${Number(documento.hm+documento.mh).toLocaleString()}\`\` membros `,false)
.setColor(0x4959e9);
message.channel.send({embed});

        } else {


            var pessoa = new database.Registrador({
                _id: qq,
                mh: 0,
                hm: 0,
             
            });
            pessoa.save();
            message.channel.send(`<:sysalerta:469789950938841088> ${message.author} Você não possui uma histórico! Use o comando novamente.`);

        }
        
    }).catch(e => console.log(e));
    
    } else {
    message.reply("Você esta usando o comando rápido de mais, vai com calma.").then((value) => {
        setTimeout(() => {
          value.delete();
          message.delete();
        }, 1000 * 30 );
    });
}
    } else {
        var pessoa = new database.Guilds({
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
              })

     };