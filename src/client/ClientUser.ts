export default class ClientUser {
    constructor(
        private verified: boolean,
        private username: string,
        private mfa_enabled: boolean,
        private id: string,
        private flags: number,
        private email: string | null,
        private discriminator: string,
        private bot: boolean,
        private avatar: string
    ) {
        
    }
}