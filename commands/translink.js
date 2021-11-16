const { SlashCommandBuilder } = require('@discordjs/builders');
const { transliterate } = require('../utils/ml2en');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('translink')
		.setDescription('Replies with English transliteration of the message available in the provided link!')
        .addStringOption(option =>
            option.setName('link')
                .setDescription('The message link to transliterate')
                .setRequired(true)),
	async execute(interaction) {
        try{
            let link = interaction.options.getString('link').split('/');
            let channel = interaction.channel;
            let msg_id = link[6];
            let message = (await channel.messages.fetch(msg_id)).content;
            if(message && typeof message === 'string'){
                await interaction.reply(transliterate(message));
            }else{
                await interaction.reply({ content: 'Oops, there seems to be nothing to transliterate!', ephemeral: true });
            }
        }catch (error) {
            console.error(error);
            await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
        }
       
	},
};