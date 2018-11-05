const Discord = require("discord.js");
const db = require("../database.js");
var moment = require('moment'); moment.locale('pt-BR'); 


exports.run = (Sysop, message, args) => {
message.delete(1000);

let p1 =   message.guild.id+message.author.id;

    let pp1 = message.mentions.users.first()

    ? message.mentions.users.first().id 

    : args
    ? args[0]
    : null;
    if(!pp1) 
    return message.channel.send(`${message.author} mencione um usuário ou ensira um id.`)
    
    let user1 = message.guild.members.has(pp1) ? message.guild.members.get(pp1) : null;
    if(!user1) return message.channel.send(`${message.author} não encontrei nenhum usuário. Tente de novo!`);
    
    
    db.Guilds.findOne({
        "_id": message.guild.id },
            function (erro, doc) {
                
            if(doc) {
                
    
    var mas = message.guild.roles.find(un => un.id === doc.man);
    if (mas == null) return message.channel.send(`<:kryptonX:505995195024932877> | ${message.author} O cargo \`masculino\` não foi definido neste servidor. **Use:** ${doc.prefixo}registrador para mais informações.`);

    var mass = message.guild.roles.find(un => un.id === doc.girl);
    if (mass == null) return message.channel.send(`<:kryptonX:505995195024932877> | ${message.author} O cargo \`feminino\` não foi definido neste servidor. **Use:** ${doc.prefixo}registrador para mais informações.`);

    var no = message.guild.roles.find(un => un.id === doc.staffer);
    if (no == null) return message.channel.send(`<:kryptonX:505995195024932877> | ${message.author} O cargo \`registrador\` não foi definido neste servidor. **Use:** ${doc.prefixo}registrador para mais informações.`);
   
    var noo = message.guild.roles.find(un => un.id === doc.autorole);
    if (noo  == null) return message.channel.send(`<:kryptonX:505995195024932877> | ${message.author} O cargo \`membro\` não foi definido neste servidor. **Use:** ${doc.prefixo}registrador para mais informações.`);

       
if(!message.guild.members.get(message.author.id).roles.find(un => un.id === doc.staffer)) 
return message.channel.send(`<:kryptonX:505995195024932877> Opa ${message.author}, que situação complicada! Você não é um usuário Staff por tanto não tem acesso ao comando.`);
         
if(!message.guild.members.get(user1.id).roles.find(un => un.id === doc.autorole)) 
return message.channel.send(`<:kryptonX:505995195024932877> ${message.author} Este usuário já foi registrado ou não tem a tag Novatos para ser registrado.`);

if(!message.guild.members.get(user1.id).roles.some(r=>[doc.man , doc.girl].includes(r.id))) 
return message.channel.send(`<:kryptonX:505995195024932877> Registro incompleto ${message.author}, Verifique se o usuário a ser registrado possui a tag \`menino\` ou \`menina\` em seu registro.`);

if (message.mentions.users.first().id == message.author.id)
return message.channel.send(`<:kryptonX:505995195024932877> | Então né... ${message.author} você não pode se auto registrar.`);
    
if(message.guild.members.get(user1.id).roles.find(un => un.id === doc.man)) {     

db.Registrador.findOne({ "_id": message.guild.id+message.author.id }, function (erro, doc2) {
if(doc2) {  
    

    
let server = message.guild;    

message.guild.members.get(pp1).removeRole(message.member.guild.roles.find(un => un.id === doc.autorole));

                    doc2.hm += 1;
                    doc2.save();
                    let user =  message.mentions.users.first() ? message.mentions.users.first() : message.author;
                    const embed = new Discord.RichEmbed()
                    .setAuthor(user.username, user.avatarURL)
                    .setThumbnail(user.avatarURL)
                    .setDescription(`<:sucesso:506651090272649217> Registro bem sucedido!`)
                    .addField(`:star2: Registrador (a):`,`<@${message.author.id}>`)
                    .addField(`:blue_heart: Usuário Registrado:`, `<@${user1.id}>`)
                    .setTimestamp()
                    .setFooter(server.name)
                    .setColor('#97ff4a');
                    message.channel.send({embed}); 
                   
                    user1.send({embed});
                    

                    
                    
} else {
                    var pessoa = new db.Registrador({
                        _id: p1,
                        mh: 0,
                        hm: 0,
                     
                    });
                    pessoa.save();
       message.channel.send(`<:warn:506568193154744360> ${message.author} Você não possui uma histórico! Use o comando novamente.`);
            }
        
               });
           }    
  
   if(message.guild.members.get(user1.id).roles.find(un => un.id === doc.girl)) {        
   if(message.guild.members.get(user1.id).roles.find(un => un.id === doc.man)) return;
   
   db.Registrador.findOne({ "_id": message.guild.id+message.author.id }, function (erro, documento) {
   if(documento) {   
   let server = message.guild;
   
   message.guild.members.get(pp1).removeRole(message.member.guild.roles.find("id", doc.autorole));

                    documento.mh += 1 ;
                    documento.save();
                    let user =  message.mentions.users.first() ? message.mentions.users.first() : message.author;
                    const embed = new Discord.RichEmbed()
                    .setAuthor(user.username, user.avatarURL)
                    .setThumbnail(user.avatarURL)
                    .setDescription(`<:sucesso:506651090272649217> Registro bem sucedido!`)
                    .addField(`:star2: Registrador (a):`,`<@${message.author.id}>`)
                    .addField(`:heart: Usuário Registrado:`, `<@${user1.id}>`)
                    .setFooter(server.name)
                    .setTimestamp()
                    .setColor('#f30052');
                    message.channel.send({embed}); 
                    user1.send({embed});
           
                } else {
                    var pessoa = new db.Registrador({
                        _id: p1,
                        mh: 0,
                        hm: 0,
                     
                    });
                    pessoa.save();
                    message.channel.send(`<:warn:506568193154744360> ${message.author} Você não possui uma histórico! Use o comando novamente.`);

            }
                   
               });
   }
           
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
