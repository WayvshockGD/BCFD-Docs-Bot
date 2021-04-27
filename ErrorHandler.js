let chalk = require('chalk');
const Eris = require('eris');

module.exports = class ErrorHandler {

    /**
     * @param {Eris.Client} client 
     */
    constructor(client) {
        this.date = new Date();

        client.on('error', (e) => this.handleErrors(e));
        client.on('warn', (e) => this.handleWarns(e));
        client.on('shardDisconnect', (error, id) => this.handleShard(error, id));
        process.on('uncaughtException', (e) => this.handleErrors(e));
        process.on('unhandledRejection', (reason) => this.handleErrors(reason));
    }

    handleErrors(error) {
        console.log(chalk.red(`[${this.date}] [ERROR] ${error}`));
    }

    handleWarns(error) {
        console.log(chalk.yellow(`[${this.date}] [WARN] ${error}`));
    }

    handleShard(error, id) {
        console.log(chalk.yellow(`[${this.date}] [SHARD: ${id}] ${error}`))
    }
}