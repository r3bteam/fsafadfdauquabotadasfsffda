exporst.run = (Sysop, message, args) => {

if(!['244489368717230090'].includes(message.author.id) return;

if(!args) return message.channel.send(`${message.author} Defina ID da guilda que criarei um documento.`)

let createAccount = args => {
                let server = new args db.Guilds({
                    _id: args,
                    "setprefix": "sy!"
                });

                server.save();
                return server;
            };	
            
}
