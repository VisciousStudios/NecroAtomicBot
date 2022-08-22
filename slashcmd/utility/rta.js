const { CommandInteraction, MessageActionRow, MessageEmbed, MessageButton, Client } = require('discord.js')
const github = `https://github.com/VisciousStudios`
module.exports = {
    name: 'rta',
    description: 'Sends the bot invite link!',
    cooldown: 5000,
    reqPerm: "NONE",
    args: "",

    /**
     * @param {Client} client
     * @param {CommandInteraction} message
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {

        const embed = new MessageEmbed()
        .setTitle('Supportive')
      .setDescription('Please be kind')
        const button = new MessageActionRow().addComponents(
            new MessageButton()
            .setStyle("LINK")
            .setURL("https://discord.gg/QFd7HyFd")
            .setLabel("Recommended Server"),
            new MessageButton()
            .setStyle("LINK")
            .setURL(github)
            .setLabel("Github Respitory")
        )
            
        
        interaction.followUp({ embeds: [embed], components: [button] });
    }
}