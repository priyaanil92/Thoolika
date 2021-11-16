const { transliterate } = require('../utils/ml2en');

const movie_dialogues = [
    "സാധനം കയ്യിൽ ഉണ്ടോ?",
    "കൊച്ചി പഴയ കൊച്ചി അല്ലെന്നറിയാം , പക്ഷെ ബിലാൽ പഴയ ബിലാൽ തന്നെയാ!",
    "നമുക്ക് ചോദിച്ചു ചോദിച്ചു പോകാം..",
    "കേസ് കൊടുക്കണം പിള്ളേച്ചാ!",
    "നിന്നെ തൂക്കാൻ ഇവിടുത്തെ നിയമത്തിനു ഭയം ആയിരുന്നു. മരിക്കാൻ നിനക്കും. പക്ഷെ ഇതിനു രണ്ടിനും മന്നാഡിയാർക്കു ഭയമില്ല!",
    "കാണാൻ ഒരു ലുക്ക് ഇല്ലന്നെ ഉള്ളു. ഭയങ്കര ബുദ്ധിയാ!",
    "നമുക്ക് ഗ്രാമങ്ങളിൽ ചെന്ന് രാപാർക്കാം..",
    "My phone number is double-two double-five",
    "കാക്ക തൂറി...",
    "…നാളെ  കാവിലെ  പാട്ടുമത്സരത്തിനു  കാണാം",
    "വാരിയരെ… എന്താടോ ഞാൻ ഇങ്ങനെ ആയി പോയത്?",
    "അടിച്ചു മോളെ!",
    "ഓർമ്മയുണ്ടോ ഈ മുഖം?",
    "അത് എന്നെ ഉദ്ദേശിച്ചാണ്…എന്നെ തന്നേയ് ഉദ്ദേശിച്ചാണ്…എന്നെ മാത്രം ഉദ്ദേശിച്ചാണ്!",
    "യെവൻ പുലിയാണ് കേട്ട!",
    "ഞാനല്ല… എന്റെ ഗർഭം ഇങ്ങനെ അല്ല!",
    "I am the answer! Kilometers and kilometers…",
    "പുരുഷു എന്നെ അനുഗ്രഹിക്കണം!",
    "വട്ടാണല്ലേ?",
    "അങ്ങനെ പവനായി ശവമായി!"
]

module.exports = {
	name: 'messageCreate',
	async execute(message) {
        try{
            if (message.mentions.has(message.client.user)) {
                let index = getRandomInt(0, 19);
                message.reply(movie_dialogues[index]);
            }
        }catch (error) {
            console.error(error);
            await message.reply({ content: 'There was an error while executing this command!', ephemeral: true });
        }
       
    },
};

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}