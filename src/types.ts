interface Message {
    id: string,
    type: number,
    content: string,
    channel_id: string,
    author: {
        id: string,
        username: string,
        avatar: string,
        discriminator: string,
        public_flags: number,
        bot: boolean,
    },
    attachments: MessageAttachements[],
    embeds: [],
    mentions: [],
    pinned: boolean,
    mention_everyone: boolean,
    tts: boolean,
    timestamp: string,
    edited_timestamp?: null | string,
    flags: 0,
    components: MessageComponents[]
}

interface MessageAttachements {
    id: string,
    filename: string,
    size: number,
    url: string,
    proxy_url: string,
    width: number,
    height: number,
    content_type: string
}

interface MessageEmebd {
    type: 'rich',
    title?: string,
    description?: string,
    color: number,
    fields: [],
    timestamp: string
}

interface MessageComponents {
    type: 1 | 2 | 3,
    components: ButtonComponents[] | LinkButtonComponents[],
}

interface ButtonComponents {
    customID: string,
    type: 1, 
    label: string,
    style: "PRIMARY" | "SECONDARY" | "DANGER",
    emoji?: string,
    disabled?: boolean
}

interface LinkButtonComponents {
    type: 1, 
    label: string,
    style: "LINK",
    url: string,
    emoji?: string,
    disabled?: boolean,
}