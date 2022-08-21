const {
    CommandInteraction,
    Client,
    MessageEmbed,
    WebhookClient,
  } = require('discord.js');
  
  module.exports = {
    name: 'suggest',
    description: 'Suggest a Features or Something to Developers.',
    options: [
      {
        type: 3,
        name: 'suggestion',
        description: 'Describe your suggestion',
        required: true,
      },
    ],
    userperm: 'SEND_MESSAGES',
    botperm: 'SEND_MESSAGES',
    /**
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
      const [suggestion] = args;
      const wc = new WebhookClient({
        id: '1010433373472313377',
        token:
          'UB8tmwDtCtgDLdS0rkOYOivDZsuVdqVXs8YQSRlDkc_jnXNqBXXFGmoZrF-RAoh7PLSo',
      });
      const logChannel = client.channels.cache.get('1007423740314914886');
      const suggestEmbed = new MessageEmbed()
        .setAuthor(
          interaction.user.tag,
          interaction.user.displayAvatarURL({ dynamic: true })
        )
        .addField('Suggestion', `${suggestion}`)
        .addField('Sent From', `${interaction.member.guild.name}`)
        .setColor('BLUE')
        .setTimestamp();
      wc.send({
        username: interaction.user.tag,
        avatarURL: interaction.user.displayAvatarURL({
          dynamic: true,
          size: 1024,
        }),
        embeds: [suggestEmbed],
      });
      const sankyuu = new MessageEmbed()
        .setTitle(`:white_check_mark: Thanks for your suggestion!`)
        .setDescription(
          `Hey <@${interaction.user.id}>, Thanks for your suggestion!\nYour suggestion has been sent to : [**Exxyll Development**](https://discord.gg/j2MfuWySfD) at <#849139267471933502>`
        )
        .setColor('#00FF00')
        .setTimestamp();
      interaction.followUp({ embeds: [sankyuu] });
      const log = new MessageEmbed()
        .setTitle(`New Suggestion`)
        .setThumbnail(
          interaction.user.displayAvatarURL({ dynamic: true, size: 1024 })
        )
        .setDescription(
          `New suggestion from [${interaction.user.tag}](https://discord.com/users/${interaction.user.id})!`
        )
        .addField(`User ID`, `${interaction.user.id}`)
        .addField(`Sent from`, `${interaction.member.guild.name}`)
        .setColor('#00FF00')
        .setTimestamp();
      logChannel.send({ embeds: [log] });
    },
  };