const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('poland')
		.setDescription('Replies with poland dialogue!'),
	async execute(interaction) {
		await interaction.reply('പോളണ്ടിനെ പറ്റി ഒരക്ഷരം മിണ്ടിപ്പോകരുത്!');
	},
};