const Command = require("../Command");
let config = require('../config.json');

class Help extends Command {
    constructor() {
        super();

        this.name = 'help';
    }

    execute({ message }) {
        return message.channel.createMessage([
            `Usages: \`${config.prefix}docs\` | \`${config.prefix}commandtypes\``
        ].join('\n'));
    }
}

module.exports = Help;