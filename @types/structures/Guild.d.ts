export interface GuildUser {
    user: {},
    roles: {}[],
    premiumSince?: string | null,
    permissions: string,
    nick: string,
    mute: boolean,
    joinedAt: string,
    deaf: boolean,
    inTimeout: string | null,
    avatar: string,
}