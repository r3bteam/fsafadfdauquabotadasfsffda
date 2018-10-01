var database = require("../database.js")
const moment = require('moment');
moment.locale('pt-BR');

exports.run = (Sysop, message, args) => {
    
      //if (!['244489368717230090'].includes(message.author.id)) return message.channel.send(`<:sysalerta:469789950938841088> Opa ${message.author}, erro ao executar esse comando. Caso o erro persista contate: **! Aquaman 🐙#1408**`);
 
    
   let user = message.mentions.users.first();
   if (!user) return message.reply(`mencione alguém para dar estrela`);

    
        if (message.mentions.users.first().id == message.author.id) 
        return message.channel.send(`<:xguardian:476061993368027148> | Epa ${message.author}, Você não pode dar rep para você mesmo!`);
        
        if (message.mentions.users.first().bot) 
        return message.channel.send(`<:xguardian:476061993368027148> | ${message.author} Bem, isto é confuso. Você não pode dar rep para um bot!**`);

        database.Users.findOne({
            "_id": message.author.id
        }, function(erro, documento) {


            database.Users.findOne({
                "_id": message.mentions.users.first().id
            }, function(err2, doc2) {

                if (documento) {

                    if (doc2) {

                    let current = documento.starTime;
                    if (current == 0)
                    current = Date.now() - 60 * 60 * 1E3; // primeiro estrela
                    console.log(current);

                    if (new Date() >= current) {
                    documento.starTime = Date.now() + 60 * 60 * 1E3;
                    documento.save();

                        doc2.star += 1
                        doc2.save();
                        message.channel.send(`🌟 **│** ${message.author} deu uma estrela para ${message.mentions.users.first()} .`);
                    } else {
                let restante = current - Date.now();
                let humanize = require('humanize-duration');
                let humanize_config = {
                 language: 'pt',
                 conjunction: ' e ',
                 serialComma: false,
                 round: true,
                 units: ['h', 'm', 's']
    };
    
    message.channel.send(`<a:swbouce:488754110175379456> **│** ${message.author}! Você precisa esperar **${humanize(restante, humanize_config)}** para favoritar alguém de novo.`);
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
                            star: 0,
                            starTime: 0,
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
                        star: 0,
                        starTime: 0,
                    })

                    pessoa.save()

                }

            })
})
    
};