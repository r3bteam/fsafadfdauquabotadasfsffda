const database =  require('../database.js');

exports.run = (Sysop, message, args) => {
  
 
  
   if (!message.member.hasPermission('ADMINISTRATOR')) 
   return message.channel.send('É necessário permissões de`Administrator` para executar este comando'); // Tell them if they don't have the proper permissions.
   
    if (!args[0]) 
    return message.channel.send('Porfavor defina um novo prefixo. `sy!setprefix <new prefix>`'); // Tell them if they didn't supply any arguments.


    database.Guilds.findOne({
      "_id": message.guild.id
    }, function(erro, documento) {

      if (documento) {
  
        documento.setprefix = args.join(' ')
        documento.save()

        message.channel.send(`OK ${message.author}, Prefixo alterado para ${documento.setprefix}`);
      } else {
          var servidor = new database.Guilds({
                _id: message.guild.id,
                lvl: true,
                setprefix: '',
                autorole: '',
                sugestao: '',
                filterInvites: false,
                filterPrintscreen: '',
                filterWords: [],
                welcome: '',
                welcomeChannel: '',
                rremove: '',
                rremoveChannel: '',
             
        
            });
            servidor.save();
      }
      }) 
      
      

};

