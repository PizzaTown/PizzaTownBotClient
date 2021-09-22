export interface TextChannelMessage {
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
    content: string | null,
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
  content: string | null,
  components: [],
  channel_id: string
  author: {
    username: string,
    public_flags: number,
    id: string,
    discriminator: number,
    avatar: string
  },
  attachments: [],
  guild_id: string
}
/**
 * {
  type: 0,
  tts: false,
  timestamp: '2021-09-22T18:07:36.120000+00:00',
  referenced_message: null,
  pinned: false,
  nonce: '890298301344120832',
  mentions: [
    {
      username: 'Rocky43007',
      public_flags: 128,
      member: [Object],
      id: '361212545924595712',
      discriminator: '7727',
      avatar: 'ab7f6897cab8e63c4baacad110dd0124'
    }
  ],
  mention_roles: [],
  mention_everyone: false,
  member: {
    roles: [
      '860212304607182898',
      '748570196205240411',
      '860212150496264214'
    ],
    premium_since: null,
    pending: false,
    nick: 'Rocky',
    mute: false,
    joined_at: '2020-08-21T18:27:57.601000+00:00',
    is_pending: false,
    hoisted_role: '860212304607182898',
    deaf: false,
    avatar: null
  },
  id: '890298301918904401',
  flags: 0,
  embeds: [],
  edited_timestamp: null,
  content: 'test13 <@!361212545924595712>',
  components: [],
  channel_id: '889928301366366210',
  author: {
    username: 'Rocky43007',
    public_flags: 128,
    id: '361212545924595712',
    discriminator: '7727',
    avatar: 'ab7f6897cab8e63c4baacad110dd0124'
  },
  attachments: [],
  guild_id: '746435442521538730'
}
 */