const Discord = require('discord.js');

exports.run = (Sysop, message, suffix) => {
		
const db = require("../database.js")
db.Guilds.findOne({"_id": message.guild.id }, function(erra, sysop) {

let paginas = ["Seja bem-vindos a Loja do Sysop, aqui você pode fazer suas compras a vontade para evoluir seu perfil no bot."] 
let pages = [`<:commands:482758132775256064> | Comprar comandos\n<:sale:482758173070196737> | Comprar moedas\n<:btnvoltar:461495764443725844> | Menu inicial.`];
let page = 1;

const embed = new Discord.RichEmbed()
.setColor('#36393E')
//.setThumbnail('https://cdn.discordapp.com/attachments/439176584000307210/469847812709023745/SysopLogo.png')
.setTitle((paginas[page-1]))
.setDescription(pages[page-1])
.setFooter(`Página ${page} de  3`)
message.channel.send(embed).then(function(value) {
  
  
  setTimeout(function() {
  value.react(":commands:482758132775256064"); //Comandos
  }, 1000)
  setTimeout(function() {
      value.react(":sale:482758173070196737"); //Moedas
  }, 1500)
setTimeout(function() {
  value.react(":btnvoltar:461495764443725844"); //Volta menu inicial
}, 2000)
    

  /*voltar menu*/ const backFilter = (reaction, user) => reaction.emoji.id === '461495764443725844' && user.id === message.author.id;
  /*comandos*/    const comandosFilter = (reaction, user) => reaction.emoji.id === `482758132775256064` && user.id === message.author.id;
  /*moedas*/      const moedaFilter = (reaction, user) => reaction.emoji.id === '482758173070196737' && user.id === message.author.id;


  //const music = value.createReactionCollector(musicFilter);

  const h1 = value.createReactionCollector(comandosFilter);
  const h2 = value.createReactionCollector(moedaFilter);
  const h9 = value.createReactionCollector(backFilter);



  
//adm
h1.on('collect', r => {
if(page === 2) return;
page++;
embed.setTitle("<:commands:482758132775256064> | Comandos para comprar");
embed.setDescription(`\`\`\`https\nUso: ${sysop.setprefix}by <parâmetro
Parâmetros:
 
 Comando setbackground - Com este comando é possível modificar seu background do perfil.
 Preço: 650.000 SY CRYSTAL
 
Comando backbalance - Com este comando é possível modificar seu background no perfil do balance.
 Preço: 350.00 Esmeraldas
 Comando bio - Com este comando é possível alterar sua descrição no perfil.
 Preço: 10.00 Esmeraldas
 Comando goldbox - Este comando permite você soltar caixas douradas aleatoriamente dentro do seu servidor vindo como premio para qualquer um que pegar até 1000 coins.
 Preço 40.900 SY CRYSTAL
 
 Comando setborder - Este comando permitirá que você mude o quadro do seu perfil.
 Preço: 100.000 SY CRYSTAL
Comando casar - Case com alguém pelo bot e o nome da pessoa que você mencionou irá aparecer em seu perfil no bot.
Preço: 1.600.000 SY CRYSTAL\`\`\``);

embed.setFooter(`Pagina 2 de 3`);
value.edit(embed).then(m => { setTimeout(() => { m.delete() }, 5 * 60 * 1000) });
});


//utilidade
h2.on('collect', r => {
  if(page === 3) return;
  page++;
  embed.setTitle("<:sale:482758173070196737> | Comandos Moeda");
embed.setDescription(`\`\`\`diff\nUso: ${sysop.setprefix}by <parâmetro>
Como comprar? Use sy!by <parâmetro>
Parâmetros:
-----------------------------------
- Nv1 -----------------
+ 10.000 Sycoins para 5.000 Sy Crystal
-----------------------------------
- Nv2 -----------------
+ 10.000 Sy Crystal para 20.000 Sycoins
-----------------------------------
- Nv3 -----------------
+ 100.000 Sycoins para 50.000 Sy Crystal
-----------------------------------
- Nv4  -----------------
+ 2.000.000 Sycoins para 600.000 Esmeraldas
-----------------------------------
- Nv5  -----------------
+ 500 Goldboxs para 250 Containers
-----------------------------------
- Nv6 -----------------
+ 1500 Estrelas para +50.000 Sycrystal
-----------------------------------
\`\`\``)
embed.setFooter(`Pagina 3 de 3`);
value.edit(embed).then(m => { setTimeout(() => { m.delete() }, 5 * 60 * 1000) });
  
})




h9.on('collect', r => {
  if(page === 1) return;
  page++;
  embed.setTitle("MENU LOJA");
  embed.setDescription(`<:commands:482758132775256064> | Comprar comandos\n<:sale:482758173070196737> | Comprar moedas\n<:btnvoltar:461495764443725844> | Menu inicial.`);
  embed.setFooter(`Pagina 1 de 3`);
  value.edit(embed).then(m => { setTimeout(() => { m.delete() }, 5 * 60 * 1000) });
  
});
}).catch(e => console.log(e));
});
	};