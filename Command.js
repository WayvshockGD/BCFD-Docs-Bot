module.exports = class Command {
    constructor(command) {
        this.name = command || '';
    }

    codeBlock(lang, args) {
        return `\`\`\`${lang || ''}\n${args}\n\`\`\``;
    }
}