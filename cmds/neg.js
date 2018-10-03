var database = require("../database.js")
const moment = require('moment');
moment.locale('pt-BR');

exports.run = (Sysop, message, args) => {
    
      //if (!['244489368717230090'].includes(message.author.id)) return message.channel.send(`<:sysalerta:469789950938841088> Opa ${message.author}, erro ao executar esse comando. Caso o erro persista contate: **! Aquaman 🐙#1408**`);
 
    
   /* if (['481829760369033228'].includes(message.mentions.users.first().id))
      return message.channel.send(`<:sysalerta:469789950938841088> | Opa ${message.author} este perfil está impossibilitado de receber reputações no momento.`)  
    */
   let user = message.mentions.users.first();
   if (!user) return message.reply(`mencione alguém para remover rep.`)
      
    if (message.mentions.users.first().id == message.author.id) return message.channel.send(`<:xguardian:476061993368027148> | Epa ${message.author}, Você não pode remover pontos de reputação de você mesmo.`);
        if (message.mentions.users.first().bot) return message.channel.send(`<:xguardian:476061993368027148> | ${message.author} Bem, isto é confuso. Você não pode remover reputações de um bot.**`);

        database.Users.findOne({
            "_id": message.author.id
        }, function(erro, documento) {


            database.Users.findOne({
                "_id": message.mentions.users.first().id
            }, function(err2, doc2) {

                if (documento) {

                    if (doc2) {

                    let current = documento.tempneg;
                    if (current == 0)
                    current = Date.now() - 24 * 60 * 60 * 1E3; // primeiro rep
console.log(current);

                    if (new Date() >= current) {
                    documento.tempneg = Date.now() + 24 * 60 * 60 * 1E3;
                    documento.save();

                        doc2.rep -= 1
                        doc2.save();
                        message.channel.send(`:broken_heart:  **│** ${message.author} removeu um ponto de reputação de ${message.mentions.users.first()} .`);
                    } else {
                let restante = current - Date.now();
                let humanize = require('humanize-duration');
                let humanize_config = {
                 language: 'pt',
                 conjunction: ' e ',
                 serialComma: false,
                 round: true,
                 units: ['d','h', 'm', 's']
    };
    
    message.channel.send(`<a:swbouce:488754110175379456> **│** ${message.author}! Você precisa esperar **${humanize(restante, humanize_config)}** antes de remover outro ponto de reputação.`);
}
                    } else {

                        var pessoa = new database.Users({
                            _id: message.mentions.users.first().id,
                            level: 0,
                            xp: 0,
                            coins: 0,
                            conquistas: 0,
                            mensagens: 0,
                            msglevel: 0,
                            invitetru: false,
                            invitecode: "Nenhum",
                            invitou: 0,
                            warn: 0,
                            rep: 0,
                            repTime: 0,
                            tempneg: 0,
                        })

                        pessoa.save()
}
                } else {

                    var pessoa = new database.Users({
                        _id: message.author.id,
                        level: 0,
                        xp: 0,
                        coins: 0,
                        conquistas: 0,
                        mensagens: 0,
                        msglevel: 0,
                        invitetru: false,
                        invitecode: "Nenhum",
                        invitou: 0,
                        warn: 0,
                        rep: 0,
                        repTime: 0,
                    })

                    pessoa.save()

                }

            })
})
    
};
