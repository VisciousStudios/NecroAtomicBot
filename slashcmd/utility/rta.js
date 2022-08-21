const { CommandInteraction, MessageActionRow, MessageButton, Client } = require('discord.js')

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
        const button = new MessageActionRow().addComponents(
            new MessageButton()
            .setStyle("LINK")
            .setURL("https://discord.gg/QFd7HyFd")
            .setLabel("Recommended Server")
        )
        
        interaction.followUp({ content: `RTA sus@!`, components: [button] });
    }
}