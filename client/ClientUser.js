class ClientUser {

    constructor(client) {
        this.client = client;
    }

    setPresence(data) {
        return this._set(data);
    }

    _set(presence) {
        const packet = this._parse(presence);
        this._patch(packet);
        /*if (typeof presence.shardId === 'undefined') {
            this.client.ws.broadcast({ op: GatewayOpcodes.PresenceUpdate, d: packet });
        } else if (Array.isArray(presence.shardId)) {
            for (const shardId of presence.shardId) {
                this.client.ws.shards.get(shardId).send({ op: GatewayOpcodes.PresenceUpdate, d: packet });
            }
        } else {
            this.client.ws.shards.get(presence.shardId).send({ op: GatewayOpcodes.PresenceUpdate, d: packet });
        }*/
        return this;
    }

    /**
   * Parses presence data into a packet ready to be sent to Discord
   * @param {any} presence The data to parse
   * @private
   */
    _parse({ status, since, afk, activities }) {
        const data = {
            activities: [],
            afk: typeof afk === 'boolean' ? afk : false,
            since: typeof since === 'number' && !Number.isNaN(since) ? since : null,
            status: status ?? this.status,
        };
        if (activities?.length) {
            for (const [i, activity] of activities.entries()) {
                if (typeof activity.name !== 'string') throw new TypeError('INVALID_TYPE', `activities[${i}].name`, 'string');
                activity.type ??= 0;

                data.activities.push({
                    type: activity.type,
                    name: activity.name,
                    url: activity.url,
                });
            }
        } else if (!activities && (status || afk || since) && this.activities.length) {
            data.activities.push(
                ...this.activities.map(a => ({
                    name: a.name,
                    type: a.type,
                    url: a.url ?? undefined,
                })),
            );
        }

        return data;
    }

    _patch(data) {
        this.client.socket.ws.send(JSON.stringify({
            op: 3,
            d: {
                activities: data.activities,
                afk: data.afk,
                since: null,
                status: data.status
            }
        }));
        return this;
    }

}

module.exports = ClientUser;