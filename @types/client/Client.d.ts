import EventEmitter from "events"
import WebSocketManager from "../../ws/WebSocketManager"
import { RESTManager } from "../api/REST"
export type Presence = {
    activities: {
        name: string,
        type?: number,
        url?: string,
    }[],
    status: "online" | "idle" | "dnd" | "invisible" | "offline",
    afk?: boolean,
    since: number,
}
export interface ClientUser {
    verified: boolean,
    username: string,
    mfa_enabled: boolean,
    id: string,
    flags: number,
    email: string | null,
    discriminator: string,
    bot: boolean,
    avatar: string
    setPresence(data: Presence): boolean,
}

export interface Client extends EventEmitter {
    connect(token: string): Promise<Boolean>
    user(): ClientUser
    getAuth(): string
    socket: {
        ws: WebSocket
    }
    token: string
    rest: RESTManager
}

export type Snowflake = string;