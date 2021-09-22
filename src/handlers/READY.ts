import Client from "../client/Client";
import ClientUser from "../client/ClientUser";
import { Payload } from "../interfaces/payloads";

export default function(client: Client, payload: Payload) {
    const { user } = payload.d;
    client.user = new ClientUser(user.username, user.discriminator, user.mfa_enabled, user.id, user.flags, user.email, user.discriminator, user.bot, user.avatar);
    client.emit('ready');

}