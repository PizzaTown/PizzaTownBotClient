const EventEmitter = require('events');
const RESTManager = require('../rest/RESTManager');
const WebSocketManager = require('../ws/WebSocketManager');
const ClientUser = require('./ClientUser');

class Client extends EventEmitter {
    socket = new WebSocketManager(this);
    async connect(token) {
        this.socket.connect(token)
        this.token = token;
    }
    /**
     * @param {import('../@types/client/Client').ClientUser} $user
     */
    set user($user) {
        this._user = $user;
    }
    get user() {
        this._user = new ClientUser(this);
        return this._user;
    }

    get getAuth() {
        return this.token;
    }

    get socket() {
        return this.socket;
    }

    get rest() {
        this._rest = new RESTManager();
        return this._rest;
    }
}

module.exports = Client;