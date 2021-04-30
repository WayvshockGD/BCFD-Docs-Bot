const Command = require("../Command");
const Manager = require("../keys/Manager");

class Actions extends Command {
    constructor() {
        super();

        this.name = 'actions';
    }

    execute({ message, args }) {
        let manager = new Manager(args.slice(1).join(' ').replace(' ', '-'));

        if (!args.slice(1).join(' ')) {
            let { actions: { types }} = manager;

            return message.channel.createMessage({
                embed: {
                    title: 'Command Actions',
                    color: 0x2ECC71,
                    description: this.codeBlock(null, types.join('\n'))
                }
            });
        }

        let findAction = manager.findAction();

        if (findAction === undefined) {
            return message.channel.createMessage('Could not find that type.');
        }

        let embed = {
            title: findAction.name,
            description: findAction.description,
            fields: []
        }

        if (find.keywords) {
            embed.fields.push({
                name: 'Keywords',
                value: findAction.keywords.join('\n'),
                inline: true
            })
        }

        return message.channel.createMessage({ embed });
    }
}

module.exports = Actions;