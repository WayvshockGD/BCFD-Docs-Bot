const actions = require("./actions");
const commandTypes = require("./commandTypes");
const keywords = require("./keywords")

module.exports = class Manager {

    /**
     * @param {string} arg 
     */
    constructor(arg) {
        this.keywords = keywords;
        this.commandTypes = commandTypes;
        this.actions = actions;
        this.args = arg;
    }

    findKey() {
        return this.keywords.find(key => key.name === this.args);
    }

    findType() {
        return this.commandTypes.search.find(key => key.name === this.args);
    }

    findAction() {
        return this.actions.search.find(key => key.name === this.args);
    }
}