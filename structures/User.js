class BaseUser {
    constructor(data) {
        this.data = data;
    }

    get username() {
        return this.data.username;
    }

    get publicFlags() {
        return this.data.public_flags;
    }

    get id() {
        return this.data.id;
    }
    get discriminator() {
        return this.data.discriminator;
    }

    get avatar() {
        return this.data.avatar;
    }
}

module.exports = BaseUser;