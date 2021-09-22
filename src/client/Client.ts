import EventEmitter from "events"
import WebSocketManager from "../ws/WebSocketManager"
import ClientUser from "./ClientUser";

export default class Client extends EventEmitter {
    private socket: WebSocketManager = new WebSocketManager(this);
    private _user: ClientUser;

    async connect(token: string) {
        this.socket.connect(token);
    }

    set user($user: ClientUser) {
        this._user = $user;
    }

    get user() {
        return this._user;
    }
}