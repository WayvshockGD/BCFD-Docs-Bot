let chalk = require('chalk');
let config = require('./config.json');
let { readdirSync } = require('fs');
let Eris = require('eris');
const ErrorHandler = require('./ErrorHandler');

//t

let token = config.testMode ? config.testToken : config.testToken;

let client = new Eris.Client(token, {
    compress: true,
    messageLimit: 40,
    autoreconnect: true,
    allowedMentions: {
        everyone: false,
        roles: false
    }
});

let Errors = new ErrorHandler(client);

client.once('ready', () => {
    console.log(`[INFO] ${chalk.green(`client started up on ${new Date()}`)}`);
    console.log(`[INFO] ${chalk.green(`Registered ${client.commands.size} Commands`)}`);

    if (token) {
        console.log(`[INFO] ${chalk.yellow(`Testing client is online now`)}`);
    };
})

client.commands = new Eris.Collection();

for (let file of readdirSync('./commands/').filter(f => f.endsWith('.js'))) {
    let getFile = require(`./commands/${file}`);
    let command = new getFile();
    console.log(`[LOADER] ${chalk.yellow(`Registered command ${command.name}`)}`);
    client.commands.set(command.name, command);
}

client.on('messageCreate', (message) => {
    if (!message.content.startsWith(config.prefix)) return false;

    let args = message.content.slice(config.prefix.length).split(/ +/);
    let command = client.commands.get(args[0]);

    if (!command) return false;

    command.execute({ message, args, client });
})

client.connect().catch(e => {Errors.handleErrors(e)});
