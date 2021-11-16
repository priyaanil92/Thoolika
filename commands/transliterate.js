const { SlashCommandBuilder } = require('@discordjs/builders');
const { transliterate } = require('../utils/ml2en');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('transliterate')
		.setDescription('Replies with English transliteration of Malayalam text!')
        .addStringOption(option =>
            option.setName('input')
                .setDescription('The input to transliterate')
                .setRequired(true)),
	async execute(interaction) {
		await interaction.reply(transliterate(interaction.options.getString('input')));
	},
};