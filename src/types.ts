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
    },
    attachments: [],
    embeds: [],
    mentions: [],
    pinned: boolean,
    mention_everyone: boolean,
    tts: boolean,
    timestamp: string
}