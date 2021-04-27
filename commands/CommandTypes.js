const Command = require("../Command");
const commandTypes = require("../keys/commandTypes");
const Manager = require("../keys/Manager");

class CommandTypes extends Command {
    constructor() {
        super();

        this.name = 'commandtypes';
    }

    execute({ message, args }) {
        
        if (!args[1]) {
            return message.channel.createMessage({
                embed: {
                    title: 'Command Types',
                    description: this.codeBlock(null, commandTypes.types.join('\n')),
                    color: 0x2ECC7
                }
            })
        }

        let parser = new Manager(args[1]);
        let types = parser.findType();

        if (types === undefined) {
            return message.channel.createMessage(`Couldn't find type **${args[1]}**`)
        }

        let hasIntent = types.presenceintent ? 'This uses presence intents.' : 'This does not use presence intents.';
        return message.channel.createMessage({
            embed: {
                title: types.fname,
                description: types.description,
                color: 0x3498DB,
                fields: [
                    { name: 'Intents', value: hasIntent, inline: false }
                ]
            }
        })
    }
}

module.exports = CommandTypes;