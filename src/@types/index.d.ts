export interface Message {
    type: number,
    tts: boolean,
    timestamp: string,
    referenced_message: {
        type: number,
        tts: boolean,
        timestamp: string,
        pinned: boolean,
        message_reference: {
            message_id: string,
            guild_id: string,
            channel_id: string,
        }
        mentions: [object[]],
        mention_roles: [],
        mention_everyone: boolean,
        id: string,
        flags: number,
        embeds: [],
        edited_timestamp: string | null,
        content: string,
        components: [],
        author: {
            username: string,
            public_flags: number,
            id: string,
            discriminator: number,
            avatar: string
        },
        attachments: [],
    },
    pinned: boolean,
    nonce: string,
    message_reference: {
        message_id: string,
        guild_id: string,
        channel_id: string,
    }
    mentions: [object[]],
    mention_roles: [],
    mention_everyone: boolean,
    member: {
        roles: string[]
        premium_since: null,
        pending: boolean,
        nick: string | null,
        mute: boolean,
        joined_at: string,
        is_pending: false,
        hoisted_role: string,
        deaf: boolean,
        avatar: string | null,
    },
    id: string,
    flags: number,
    embeds: [],
    edited_timestamp: string | null,
    content: string,
    components: [],
    channel: TextChannel
    author: TextChannelUser
    attachments: [],
    guild: Guilds,
}

export interface MessageOptions {
    content: string | null,
    tts: boolean | null,
    embeds: [] | null,
    components: [] | null
}

export interface TextChannel {
    readonly id: string
    send(o: any): Promise<Message>
}
export interface Guilds {
    region: string,
    lazy: boolean,
    name: string,
    verification_level: number,
    members: object[],
    emojis: [],
    channels: [],
    threads: [],
    stageInstances: [],
    ownerId: string,
    memberCount: number,
    id: string
}

export interface ClientUser {
    readonly verified: boolean,
    readonly username: string,
    readonly mfa_enabled: boolean,
    readonly id: string,
    readonly flags: number,
    readonly email: string | null,
    readonly discriminator: string,
    readonly bot: boolean,
    readonly avatar: string
}

export interface Client {
    user: ClientUser,
    connect(): Promise<void>,
    getAuth(): string,
}

export interface TextChannelUser {
    readonly username: string,
    readonly avatar: string,
    readonly discriminator: string,
    readonly bot: boolean,
    readonly id: string,
    displayAvatar(): string
}