const Command = require("../Command");

class Update extends Command {
    constructor() {
        super();

        this.name = 'update';
    }
    
    execute({ client, message }) {
        let link = 'https://github.com/WayvshockGD/BCFD-Docs-Bot.git';
        let { execSync } = require('child_process');

        message.channel.createMessage('Updating bot to latest...');
        let log = execSync(`git pull ${link} main`);
    }
}

module.exports = Update;