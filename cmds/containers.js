const database = require("../database.js");

exports.run = (Sysop, message, args) => {
     
   // if (!['244489368717230090'].includes(message.author.id)) return message.channel.send(`<:sysalerta:469789950938841088> Opa ${message.author}, comando em manutenção!`);
 
    if(message.author.bot) return;
    
    let user = message.mentions.users.first();
    args = args
    let razaod = args[0]

    database.Users.findOne({
        "_id": message.author.id
    }, function(erro, documento) {

        if (documento) {

            if (message.mentions.users.size < 1) return message.reply("**Mencione alguem para doar containers!**");
            if (message.mentions.users.first().id == message.author.id) return message.reply("**Você não pode doar para você mesmo!**");
            if (message.mentions.users.first().bot) return message.reply("**Você não pode doar para um bot!**");
            if (!razaod < 1) {
                if (parseInt(args[1]) > 0) {
                if (args[1] < documento.containers) {

                    database.Users.findOne({
                        "_id": message.mentions.users.first().id
                    }, function(errou, docs) {

                        if (docs) {

                            docs.containers += parseInt(args[1])
                            docs.save();
                            documento.containers -= parseInt(args[1])
                            documento.save();
                            message.channel.send('<a:loading:442459946601152512> Transferindo...').then(function(value) {
                             setTimeout(function() {
                            value.edit(`<a:pblob:442467218282774548> | ${message.author} transferência concluída. Você pagou **${parseInt(args[1])}**  containers <:Container_frontier_zero:470320615660847175> para <@${message.mentions.users.first().id}>`)}, 3000)

})
                        } else {

                 
            var pessoa = new database.Users({
                _id: message.author.id,
                level: 0,
                xp: 0,
                coins: 0,
                rubys: 0,
                containers: 0,
                goldbox: 0,
                rep: 0,
            });
            pessoa.save();

                        }

                    })

                } else {
                    message.reply("**Você não possui saldo suficiente para doar a alguém!**");
                }
            } else {
                message.reply("**A quantia não deve ser menor que 1!**");
            }
            } else {
                message.reply("**Adicione uma quantia para doar**");
            }

        } else {


 
            var pessoa = new database.Users({
                _id: message.author.id,
                level: 0,
                xp: 0,
                coins: 0,
                rubys: 0,
                containers: 0,
                goldbox: 0,
                rep: 0,
            });
            pessoa.save();
        }
    })
};