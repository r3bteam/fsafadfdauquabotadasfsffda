const Discord = require("discord.js");
const database = require("../database.js");

exports.run = (Sysop, message, args) => {
  
  if (!['282504900552949760','244489368717230090'].includes(message.author.id)) 
  return message.channel.send({
			embed: {
				color: 0xff2424,
				description:`Comando restrito, apenas proprietários do bot podem usar!`,
			}
		});
    
        let block = message.mentions.users.first()
        
            ? message.mentions.users.first().id 
     
            : args.slice(0).join(' ')
            ? args.slice(0).join(' ')
            : null;

if (!block) return message.reply('Mencione alguém ou especifique um ID');
let user = Sysop.users.has(block) ? Sysop.users.get(block) : null;
if (user) {
    database.Bloqueio.findOne({"_id":user.id},function(erro,documento){
        
    if (documento) {
        
        documento.block = "pudim"
        message.reply(`O usuário: ${user.username} foi removido da blacklist`)
        documento.save();
    } else {
        var pessoa = new database.Bloqueio({
            _id: user.id,
            name: user.username, 
            block: "pudim"
          
        })
        pessoa.save()
message.reply(`O usuário: ${user.username} foi removido blacklist`)
    }

})

} else {
    message.reply('Wow! O Usuário parece não existir');
}
};

