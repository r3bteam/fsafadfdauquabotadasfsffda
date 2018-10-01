const Discord = require('discord.js');
let database = require("../database.js");

exports.run = (Sysop, message, suffix) => {
     //  if (!['244489368717230090'].includes(message.author.id)) return message.channel.send(`<:sysalerta:469789950938841088> Opa ${message.author}, erro ao executar esse comando. Caso o erro persista contate: **! Aquaman 🐙#1408**`);
    
        
        suffix = suffix
        let razaou = suffix[0];
        
        database.Users.findOne({
            "_id": message.author.id
        }, function (erro, documento) {
            if(documento) {
                
                if (razaou === 'setbackground') {
                    if(Number(documento.rubys) >= 650000) {
                        documento.rubys = Number(documento.rubys) - 650000
                        documento.background_shoped = "yes"
                        message.channel.send(`<a:anirainbowblob:434952813177470986> ${message.author}, Compra realizada com sucesso!`)
                        documento.save()
                    } else {
                        message.channel.send(`<:sysalerta:469789950938841088> Opa ${message.author}! Você precisa de 650.000 Sy Crystal <:sysopcrystal:482651147111366656>`)
                    }
                     } else if(razaou === 'backbalance') {
                    if(Number(documento.emerald) >= 350000) {
                        documento.emerald = Number(documento.emerald) - 350000
                        documento.shopped_background = "yes"
                        message.channel.send(`<a:anirainbowblob:434952813177470986> ${message.author}, Compra realizada com sucesso!`)
                        documento.save()
                    } else {
                        message.channel.send(`<:sysalerta:469789950938841088> Opa ${message.author}! Você precisa de 350.000 esmeraldas <a:esmeral:442718169585680387>`)
                    }
                } else if(razaou === 'bio') {
                    if(Number(documento.emerald) >= 10000) {
                        documento.emerald = Number(documento.emerald) - 10000
                        documento.bio_shoped = "yes"
                        message.channel.send(`<a:anirainbowblob:434952813177470986> ${message.author}, Compra realizada com sucesso!`)
                        documento.save()
                    } else {
                        message.channel.send(`<:sysalerta:469789950938841088> Opa ${message.author}! Você precisa de 10.000 esmeraldas <a:esmeral:442718169585680387>`)
                    }
                    
                } else if(razaou === 'goldbox') {
                    if(Number(documento.rubys) >= 40900) {
                        documento.rubys = Number(documento.rubys) - 40900
                        documento.goldbox_shoped = "yes"
                        message.channel.send(`<a:anirainbowblob:434952813177470986> ${message.author} Compra realizada com sucesso!`)
                        documento.save()
                    } else {
                        message.channel.send(`<:sysalerta:469789950938841088> Opa ${message.author}! Você precisa de 40.900 Sy Crsytal`)
                    }
                } else if(razaou === 'setborder') {
                    if(Number(documento.rubys) >= 100000) {
                        documento.rubys = Number(documento.rubys) - 100000
                        documento.border_shoped = "yes"
                        message.channel.send(`<a:anirainbowblob:434952813177470986> ${message.author} Compra realizada com sucesso!`)
                        documento.save()
                        
                    } else {
                        message.channel.send(`<:sysopcrystal:482651147111366656> Opa ${message.author}! Você precisa de 100.000 Sy Crystal.`)
                    }
                    } else if(razaou === 'casar') {
                    if(Number(documento.rubys) >= 1600000) {
                        documento.rubys = Number(documento.rubys) - 1600000
                        documento.casar_shoped = "yes"
                        message.channel.send(`<a:anirainbowblob:434952813177470986> ${message.author} Compra realizada com sucesso!`)
                        documento.save()
                        
                    } else {
                        message.channel.send(`<:sysopcrystal:482651147111366656> Opa ${message.author}! Você precisa de 1.600.000 Sy Crystal.`)
                    }
                          } else if(razaou === 'Nv1') {
                    if(Number(documento.coins) >= 10000) {
                        documento.coins = Number(documento.coins) - 10000
                        documento.rubys = Number(documento.rubys) + 5000
                        message.channel.send(`<a:anirainbowblob:434952813177470986> ${message.author} Troca realizada com sucesso! Você ganhou **+5.000** Sy Crystal.`)
                        documento.save()
                        
                    } else {
                        message.channel.send(`<:sysopcrystal:482651147111366656> Opa ${message.author}! Você precisa de 10.000 Sycoins`)
                    }
                                   } else if(razaou === 'Nv2') {
                    if(Number(documento.coins) >= 10000) {
                        documento.rubys = Number(documento.rubys) - 10000
                        documento.coins = Number(documento.coins) + 20000
                        message.channel.send(`<a:anirainbowblob:434952813177470986> ${message.author} Troca realizada com sucesso! Você ganhou **+20.000** Sycoins.`)
                        documento.save()
                        
                    } else {
                        message.channel.send(`<:sysopcrystal:482651147111366656> Opa ${message.author}! Você precisa de 10.000 Sy Crystal`)
                    }
                                            } else if(razaou === 'Nv3') {
                    if(Number(documento.coins) >= 100000) {
                        documento.coins = Number(documento.coins) - 100000
                        documento.rubys = Number(documento.rubys) + 50000
                        message.channel.send(`<a:anirainbowblob:434952813177470986> ${message.author} Troca realizada com sucesso! Você ganhou **+50.000** Sy Crystal.`)
                        documento.save()
                        
                    } else {
                        message.channel.send(`<:sysopcrystal:482651147111366656> Opa ${message.author}! Você precisa de 100.000 Sy Coins`)
                    }
                      } else if(razaou === 'Nv4') {
                    if(Number(documento.coins) >= 2000000) {
                        documento.coins = Number(documento.coins) - 2000000
                        documento.emerald = Number(documento.emerald) + 600000
                        message.channel.send(`<a:anirainbowblob:434952813177470986> ${message.author} Troca realizada com sucesso! Você ganhou **+600.000** Esmeraldas.`)
                        documento.save()
                        
                    } else {
                        message.channel.send(`<:sysopcrystal:482651147111366656> Opa ${message.author}! Você precisa de 2.000.000 Sycoins`)
                    }
                     } else if(razaou === 'Nv5') {
                    if(Number(documento.goldbox) >= 500) {
                        documento.goldbox = Number(documento.goldbox) - 500
                        documento.containers = Number(documento.containers) + 250
                        message.channel.send(`<a:anirainbowblob:434952813177470986> ${message.author} Troca realizada com sucesso! Você ganhou **+250** Containers.`)
                        documento.save()
                        
                    } else {
                        message.channel.send(`<:sysopcrystal:482651147111366656> Opa ${message.author}! Você precisa de 500 Goldbox's`)
                    }
                         } else if(razaou === 'Nv6') {
                    if(Number(documento.star) >= 1500) {
                        documento.star = Number(documento.star) - 1500
                        documento.ruby = Number(documento.ruby) + 50000
                        message.channel.send(`<a:anirainbowblob:434952813177470986> ${message.author} Troca realizada com sucesso! Você ganhou **+250** Containers.`)
                        documento.save()
                        
                    } else {
                        message.channel.send(`<:sysopcrystal:482651147111366656> Opa ${message.author}! Você precisa de 1500 Estrelas`)
                    }
               
                } else {
                    const db = require("../database.js")
db.Guilds.findOne({"_id": message.guild.id }, function(erra, sysop) {

  message.channel.send(`<:sysalerta:469789950938841088> ${message.author} especifique algo para comprar! **Use** \`${sysop.setprefix}shop\``)
})
                }
                
            } else {
                let pessoa = new database.Users({
                    _id: message.author.id,
                    level: 0,
                    xp: 0,
                    coins: 0,
                    rubys: 0,
                    containers: 0,
                    rarebox: 0,
                    cupcake: 0,
                    goldbox: 0,
                })

                pessoa.save()
            }
            
        })
        };