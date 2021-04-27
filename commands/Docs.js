const Command = require("../Command");
const Manager = require("../keys/Manager");

class Docs extends Command {
    constructor() {
        super();

        this.name    = 'docs';
    }

    execute({ message, args }) {
        this.keys = new Manager(args[1]);
        let keywords = this.keys.findKey();

        if (!args[1]) {
            return message.channel.createMessage({
                content: 'You did not provide arguments to search!',
                messageReferenceID: message.id
            });
        }

        if (keywords === undefined) {
            return message.channel.createMessage({
                content: 'Could not find that keyword.',
                messageReferenceID: message.id
            });
        }

        let embed = {
            title: keywords.name,
            description: keywords.description,
            color: 0x2ECC71,
            fields: []
        }

        if (keywords.format) {
            embed.fields.push({
                name: 'Format',
                value: keywords.format,
                inline: true
            })
        }

        if (keywords.returns) {
            embed.fields.push({
                name: 'Returns',
                value: keywords.returns,
                inline: true
            })
        }

        if (keywords.params) {
            embed.fields.push({
                name: 'Params',
                value: keywords.params,
                inline: true
            })
        }

        return message.channel.createMessage({ embed });
    }
}

module.exports = Docs;