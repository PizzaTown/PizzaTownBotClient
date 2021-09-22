import Client from "../client/Client";
import { Payload } from "../interfaces/payloads";

export default function(client: Client, payload: Payload) {
    client.emit('messageCreate', payload.d);
}