const Eris = require("eris");

module.exports = new class Restart {

    /**
     * @param {Eris.Client} client 
     */
    destroy(client) {
        client.disconnect({ reconnect: true });
    }
}