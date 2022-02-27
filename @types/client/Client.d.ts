import EventEmitter from "events"
type Presence = {
    activities: {
        name: string,
    }[],
    status: "online" | "idle" | "dnd" | "invisible" | "offline"
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
    user: {
        setPresence(data: Presence): boolean,
    }
}

export interface Client extends EventEmitter {
    connect(token: string): Promise<Boolean>
    user(): ClientUser
    getAuth(): string
    token: string,
}
