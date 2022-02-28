const BaseUser = require('./User')

/**
 * @type {import('../@types/structures/Guild').GuildUser}
 */
class GuildUser {
    constructor(data) {
        this.data = data;
    }

    get roles() {
        return this.data.roles;
    }

    get user() {
        const user =  new BaseUser(this.data.user)
        return user;
    }

    get premiumSince() {
        return this.data.premium_since;
    }

    get permissions() {
        return this.data.permissions;
    }

    get nick() {
        return this.data.nick;
    }

    get mute() {
        return this.data.mute;
    }

    get joinedAt() {
        return this.data.joined_at;
    }

    get deaf() {
        return this.data.deaf;
    }

    get inTimeout() {
        return this.data.communication_disabled_until;
    }

    get avatar() {       
        return this.avatar();
    }
}

module.exports = GuildUser