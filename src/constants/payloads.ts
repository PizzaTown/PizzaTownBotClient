export const hello = {
    op: 10,
    d: null
}

export const heartbeat = {
    op: 1,
    d: null || 1
}

export const auth = {
    op: 2,
    d: {
        token: '',
        intents: 513,
        properties: {
            $os: 'linux',
            $browser: 'pizzatown-client',
            $device: 'pizzatown-client'
        }
    }
}