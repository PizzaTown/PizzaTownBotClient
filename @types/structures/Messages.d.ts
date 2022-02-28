import { Snowflake } from "../client/Client"

export enum CommandOptionsTypes {
    SubCommand = 1,
    SubCommandGroup = 2,
    String = 3,
    Integer = 4,
    Boolean = 5,
    User = 6,
    Channel = 7,
    Role = 8,
    Mentionable = 9,
    Number = 10,
}

export type MessageEmbed = {
    url: string,
    color?: string,
    title?: string,
    timestamp?: Date,
    description?: string,
    fields?: {
        name: string,
        value: string,
    }[],
    footer?: {
        text?: string,
        author?: {

        }
    },
    author: {
        icon_url?: string,
        name: string,
    },
    image: {
        url: string,
    }
}

export type MessageComponents = {
    type: CommandOptionsTypes,
    components: {
        customId: string,
        type: CommandOptionsTypes,
        label: string,
        style: "DANGER" | "PRIMARY" | "SECONDARY" | "LINK",
        emoji: string,
        url?: string,
    }[],
}

export type MessageData = {
    content?: string | null,
    tts?: boolean | null,
    embeds?: MessageEmbed[] | null,
    components?: MessageComponents[] | null,
}

export interface TextChannelMessage {
    content: string,
    channel: {
        id: Snowflake,
        send(o: MessageData): Promise<void>
    }
    guild: {
        id: Snowflake
    },
    timestamp: Date,
    member: {
        roles: {}[],
        nickname: string,
    },
    id: Snowflake,
    embeds: MessageEmbed[],
    components: MessageComponents[],
    author: {
        username: string,
        id: Snowflake,
        discriminator: string,
        avatar: string,
        bot: boolean,
        displayAvatar(size: number): string
    },
    attachments: {}[] | [],
}