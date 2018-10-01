var database = require("../database.js")
var dayCol = new Set()
let dayRDM = Math.round(Math.random() * 2500)

exports.run = (Sysop, message, args) => {
        
       
    /*  if (['244489368717230090', '481829760369033228','345014174004543488', '431334258653528066'].includes(message.mentions.users.first().id))
      return message.channel.send(`<:sysalerta:469789950938841088> | Opa ${message.author} você não pode roubar este usuário.`)   */ 
            
    
    let user = message.mentions.users.first();

    if (dayCol.has(message.author.id)) return message.reply("**Você já roubou hoje. :confused:**");

    if (message.mentions.users.size < 1) {
        message.reply("**Mencione alguém para roubar. :confused:**");
    } else {
        if (message.mentions.users.first().id == message.author.id) return message.reply("**Você não pode roubar você mesmo!**");
        if (message.mentions.users.first().bot) return message.reply("**Você não pode roubar um bot!**");

        database.Users.findOne({
            "_id": message.author.id
        }, function(erro, documento) {

            database.Users.findOne({
                "_id": message.mentions.users.first().id
            }, function(err2, doc2) {

                if (documento) {

                    if (doc2) {

                        if(doc2.coins > 1000) {

                        if (Math.round(Math.random() * 1) == 1) {

                            documento.coins += dayRDM
                            documento.save();
                            doc2.coins -= dayRDM
                            doc2.save();
                            message.channel.send(`<a:clapping:484955550338252810> Sucesso ${message.author}! Você roubou **${Number(dayRDM).toLocaleString()}** Sycoins de <@${message.mentions.users.first().id}>`);
                            dayCol.add(message.author.id)
                            setTimeout(function() {
                                dayCol.delete(message.author.id)
                            }, 6 * 1000 * 60 * 60)

                        } else {
                            documento.coins -= dayRDM
                            documento.save();
                            message.channel.send(`<a:pm:436911890770165760> Ih ${message.author} sujo! Você foi pego ao tentar roubar <@${message.mentions.users.first().id}> e perdeu ${Number(dayRDM).toLocaleString()} Sycoins! **SE FODEU!**`);
                            dayCol.add(message.author.id)
                            setTimeout(function() {
                                dayCol.delete(message.author.id)
                            }, 6 * 1000 * 60 * 60)
                        }

                    } else {
                        message.channel.send(`<:PandaUh:447055990760931329> Desculpe ${message.author}, mas não posso roubar um usuário pobre.`);
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
                            rep: 0
                        })

                        pessoa.save()

                    }

                } else {

                     var pessoa = new database.Users({
                        _id: message.author.id,
                        name: message.author.username, 
                        discrim: "#" + message.author.discriminator,
                        bio: "Sobre você...",
                        rpup: 0,
                        adv: 0,
                        coins: 0,
                        rubys: 0,
                        containers: 0,
                        emerald: 0,
                        goldbox: 0,
                        star: 0,
                        backbalance: 'https://cdn.discordapp.com/attachments/442346665052209153/469407730797641738/SysopLogoLight.png',
                        profile_background: 'https://cdn.discordapp.com/attachments/442346665052209153/469407730797641738/SysopLogoLight.png',
                      
                    })
                    pessoa.save()
        message.reply("<:LikeSysop3:476062023629799424> **Perfil criado!** Use novamente este comando!");
      

                }

            })

        })


    }
    };