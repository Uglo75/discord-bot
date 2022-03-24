const Discord = require("discord.js");
const Client = new Discord.Client({
intents: [
 Discord.Intents.FLAGS.GUILDS,
 Discord.Intents.FLAGS.GUILD_MESSAGES,
 Discord.Intents.FLAGS.DIRECT_MESSAGES,
 Discord.Intents.FLAGS.GUILD_MEMBERS

]
});

const prefix = "!";


Client.on ("ready", () => {
    console.log("bot opépp");
});

Client.on("messageCreate", message => {
    if(message.author.bot) return;
    
//!help
    if(message.content === prefix + "help"){
        const embed = new Discord.MessageEmbed()
            .setColor("#000001")
            .setTitle("Liste des commandes")
            .setAuthor("Auteur du bot")
        message.channel.send({ embeds : [embed]});
    }

    if(message.content === prefix + "createur"){
        message.reply ("Le createur du bot est MTLG_Uglo")
    }
    
    if(message.member.hasPermission("ADMINISTRATOR")){
        if(message.content.startsWith(prefix + "ban")){
            let mention = message.mentions.members.first();

            if(mention == undefined){
                message.reply("Membre non ou mal mentionné.");
            }
            else{
                if(mention.bannable){
                   mention.ban();
                   message.channel.send(mention.displayName + "a été banni avec succés");
                }
            else{
                message.reply("Imposible de bannir ce membre.")
            }
            }
        }
    }
});



Client.login(process.env.TOKEN);