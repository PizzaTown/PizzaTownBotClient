import WebSocket from "ws";
import Client from "../client/Client";
import { WebSocketEnum, OPCODES } from "../constants/enums";
import { auth, heartbeat } from "../constants/payloads";
import { Payload } from "../interfaces/payloads";

export default class WebSocketManager {
    private ws: WebSocket;
    private interval: any = 0;

    constructor(private client: Client) {

    }

    async connect(token: string) {
        try {
            this.ws = new WebSocket(WebSocketEnum.GATEWAY);
            this.ws.on('message', async (data: string) => {
                let payload: Payload = JSON.parse(data);
                const { t: event, d, s, op } = payload;

                switch (op) {
                    case OPCODES.TEN:
                        const { heartbeat_interval } = d;
                        this.interval = this.heartbeatFunction(heartbeat_interval, s);
                        await this.identify(token);
                        break;
                    case OPCODES.ZERO:
                        break;
                    case OPCODES.ELEVEN:
                        break;
                }
                if (event) {
                    try {
                        let eventName: string = event.toLowerCase();
                        if (event.includes('_CREATE')) {
                            eventName = event.toLowerCase().replace('_create', 'Create');
                        }
                        if (event.includes('_UPDATE')) {
                            eventName = event.toLowerCase().replace('_update', 'Update');
                        }
                        const { default: module } = await import(`../handlers/${eventName}.js`);
                        module(this.client, payload);
                    } catch (err) {
                        console.log(err);
                    }
                }

            })
        } catch (err) {
            console.log(err)
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
    heartbeatFunction(ms: number, s: number) {
        return setInterval(() => {
            heartbeat.d = s;
            this.ws.send(JSON.stringify(heartbeat))
        }, ms);
    }
    async identify(token: string) {
        auth.d.token = token;
        return this.ws.send(JSON.stringify(auth))
    }
}