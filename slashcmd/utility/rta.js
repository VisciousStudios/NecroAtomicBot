const { CommandInteraction, MessageActionRow, MessageEmbed, MessageButton, Client } = require('discord.js')

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
        .setURL(github)
      .setDescription('Please be kind')
        const button = new MessageActionRow().addComponents(
            new MessageButton()
            .setStyle("LINK")
            .setURL("https://discord.gg/QFd7HyFd")
            .setLabel("Recommended Server")
        )
        
        interaction.followUp({ embeds: [embed], components: [button] });
    }
}