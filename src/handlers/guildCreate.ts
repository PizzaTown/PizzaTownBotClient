import { groupCollapsed } from "console";
import { Guilds } from "../@types";
import Client from "../client/Client";
import { Payload } from "../interfaces/payloads";

export default function (client: Client, payload: Payload) {
    const guild = payload.d;
    client.emit('guildCreate', {
        region: guild.region,
        lazy: guild.lazy,
        name: guild.name,
        verification_level: guild.verification_level,
        members: guild.members,
        emojis: guild.emojis,
        channels: guild.channels,
        threads: guild.threads,
        stageInstances: guild.stage_instances,
        ownerId: guild.owner_id,
        memberCount: guild.member_count,
        id: guild.id
    } as Guilds);

}