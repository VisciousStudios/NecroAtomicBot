const {CommandInteraction, Client, MessageEmbed, MessageButton, MessageActionRow, MessageSelectMenu} = require('discord.js');


module.exports = {

    name:'invite',
    description:'Invite',

    run:async (client, interaction) => {

    

    const embed = new MessageEmbed()
      .setDescription('Hi thanks for using my Invite Command I aprpecwaite u!w')
      const row = new MessageActionRow()
    .addComponents(
    new MessageButton()
    .setLabel("Invite")
    .setStyle("LINK")
    .setURL(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=36768832&scope=applications.commands%20bot`),
    new MessageButton()
    .setLabel("Support Server")
    .setStyle("LINK")
    .setURL(`https://discord.gg/FaAkw5qFqN`)
    .setEmoji(`😕`)
   
			);
    interaction.followUp({ embeds: [embed], components: [row] })
    }

}