const Command = require("../Command");

class Ping extends Command {
    constructor() {
        super();

        this.name = 'ping';
    }

    execute({ message }) {
        let now = Date.now();

        message.channel.createMessage('Pinging...').then(msg => {
            let diff = (Date.now() - now);
            msg.edit(`Pong! ${diff}`);
        })
    }
}

module.exports = Ping;