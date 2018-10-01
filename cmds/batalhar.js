const db = require("../database.js");

exports.run = (Sysop, message, args) => {
  
var nire = message.mentions.users.first();
var qnire = message.author;

db.Users.findOne({
                "_id": message.author.id
            }, function (erro, documento) {
                if (documento) {
                    if(message.author.bot) return;
               
                    const HOUR =  60 * 60 * 1E3;
                    let current = documento.batalhar;
                    if (current == 0)
                    current = Date.now() - 2 * HOUR; // primeiro trabalho
                    console.log(current);

                    if (new Date() >= current) {
                    documento.batalhar = Date.now() + 2 * HOUR;
                    documento.save();



if (!nire) 
return message.channel.send(`<:sysalerta:469789950938841088> ${message.author} mencione alguém para batalhar.`);

if (message.mentions.users.first().id == message.author.id) 
return message.channel.send(`<:xguardian:476061993368027148> | Opa ${message.author}! Você não pode batalhar com você mesmo.`);

if (message.mentions.users.first().bot) 
return message.channel.send(`<:xguardian:476061993368027148> | ${message.author} estranho... Você não pode batalhar com um bot.`);


message.channel.send(`<a:PulandoFeliz:486648350888689666> **|** ${qnire} te desafiou para uma batalha <@${nire.id}>. Você aceita o desafio?\nResponda: \`sim ou não\``).then(() => {
message.channel.awaitMessages(res => 
(res.content == "sim" && res.author.id == nire.id) || (res.content == 'não' && res.author.id == nire.id), { 

max: 1, time: 60000, errors: ['time'] }).then(col => {
    
    if (col.first().content == 'sim') {
        message.channel.send(`<a:foguinho:486647218896633888> **|** ${nire} aceitou o desafio!`);
        
           let give = [nire.id, qnire.id],
            ganhador = give[Math.floor(Math.random() * give.length)],
            quantia = n => Math.round(Math.random() * n),
            createAccount = id => {
                let pessoa = new db.Users({
                    _id: id,
                    level: 0,
                    xp: 0,
                    coins: 0,
                    rubys: 0,
                    emerald: 0,
                    rep: 0,
                    containers: 0,
                    goldbox: 0,
                });

                pessoa.save();
                return pessoa;
            };
     db.Users.findOne({ 
            "_id": qnire.id,
        }, function (erro, documento) {
            if (documento) {
                
                   if (documento.coins > 0) {
                  
                let premio = 15000;
                               
                
                                db.Users.findOne({ 
                                "_id": ganhador,
                            }, function (erro, doc) {
                                if (!doc) {
                                    doc = createAccount(ganhador.user.id);
                                }
                                doc.coins += premio;
                                doc.save();
                            });
            message.channel.send(`:bomb: Batalhando...`).then(function(value) {

                         value.edit(`<@${ganhador}> venceu a batalha e recebeu um prêmio de: **15.000** Sycoins <:Sycoins:469789351358889984>`
                   
                , 5000)
  
 
})
            }
            }});
    
    } 

    if (col.first().content == 'não') {
        message.channel.send(`:crossed_swords: **|** ${nire} recusou o desafio.`);
    }
    
}).catch(() => message.channel.send(`:shrug::skin-tone-2: **|** ${message.author} Passou-se **1** minuto sem resposta. Sua batalha foi finalizada a força.`));

}); } else {
    
            let restante = current - Date.now();
                let humanize = require('humanize-duration');
                let humanize_config = {
                 language: 'pt',
                 conjunction: ' e ',
                 serialComma: false,
                 round: true,
                 units: ['h', 'm', 's']
    };
    
    message.channel.send(`<a:swbouce:488754110175379456> **│** ${message.author}! Você precisa esperar **${humanize(restante, humanize_config)}** para batalhar novamente.`);

    
}
    
  } else {
        let pessoa = new db.Users({
                        _id: message.author.id,
                        level: 0,
                        xp: 0,
                        coins: 0,
                        rubys: 0,
                        containers: 0,
                        nextDay: 0,
                        daily: 0,
                        batalhar: 0,
                    });
                    pessoa.save();
                
        
}}) 
};