const Exam = require('./exam.js');
const {Client, Intents} = require('discord.js');
const dotenv = require('dotenv');

const client = new Client({intents: [Intents.FLAGS.GUILDS]});

dotenv.config();

client.once('ready', () => {
	console.log("Hi");

	novoExame = new Exam("Gucci");
	console.log(novoExame.nome);
});

client.login(process.env.DISCORD_TOKEN);
