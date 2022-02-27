const { WebSocketEnum, OPCODES } = require("./Enums");
const WebSocket = require('ws');
const Client = require("../client/Client");

const heartbeat = {
    op: 1,
    d: null || 1
}

const auth = {
    op: 2,
    d: {
        token: '',
        intents: 513,
        properties: {
            $os: 'linux',
            $browser: 'pizzatown-client',
            $device: 'pizzatown-client'
        }
    }
}


class WebSocketManager {
    constructor(client) {
        this.client = client
    }

    async connect(token) {
        try {
            this.ws = new WebSocket(WebSocketEnum.GATEWAY);
            this.ws.on('message', async (data) => {
                /** 
                 * @type {import("../@types/websockets/Payloads").Payload} 
                 * 
                 * @see https://discord.com/developers/docs/topics/gateway#payloads
                */
                let payload = JSON.parse(data);
                const { t: event, d, s, op } = payload;

                switch (op) {
                    case OPCODES.HELLO:
                        const { heartbeat_interval } = d;
                        this.interval = this.heartbeatFunction(heartbeat_interval, s);
                        await this.identify(token);
                        break;
                    case OPCODES.DISPATCH:
                        break;
                    case OPCODES.HEARTBEAT_ACK:
                        break;
                }

                if (event) {
                    try {
                        let eventName = event.toLowerCase();
                        if (event.includes('_CREATE')) {
                            eventName = event.toLowerCase().replace('_create', 'Create');
                        }
                        if (event.includes('_UPDATE')) {
                            eventName = event.toLowerCase().replace('_update', 'Update');
                        }
                        const { default: module } = await import(`../handlers/${eventName}.js`);
                        module(this.client, payload);
                    } catch (err) {
                        console.error(err);
                    }
                }
            })
        } catch (err) {
            console.error(err)
            return err;
        }
    }

    /**
     * 
     * @param ms - Heartbeat Value
     * @param s -  last sequence number—s—received by the client
     * @documentation https://discord.com/developers/docs/topics/gateway#heartbeat
     * @returns - Heartbeat sent to Gateway
     */
    heartbeatFunction(ms, s) {
        return setInterval(() => {
            heartbeat.d = s;
            this.ws.send(JSON.stringify(heartbeat))
        }, ms);
    }

    async identify(token) {
        auth.d.token = token;
        return this.ws.send(JSON.stringify(auth))
    }

}

module.exports = WebSocketManager