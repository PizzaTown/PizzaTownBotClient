export interface APIInteractionEditData {
    content?: o.content | null,
    tts?: o.tts | false,
    embeds?: o.embeds | [],
    components?: o.components | [],
    allowed_mentions?: {
        parse: []
    }
}

export interface APIInteractionData {
    type: 4,
    data: {
        content?: o.content | null,
        tts?: o.tts | false,
        embeds?: o.embeds | [],
        components?: o.components | [],
        allowed_mentions?: {
            parse: []
        }
    }
}

export interface APIMessageData {
    content?: o.content | null,
    tts?: o.tts | null,
    embeds?: o.embeds | null,
    components?: o.components | null,
}

type APIHTTPSMethods = "POST" | "PATCH" | "DELETE" | "PUT" | "GET";

export interface RESTManager {
    queue: [],
    Counter: number,
    /* Run REST endpoint with queue for Rate Limiting. */
    run(url: string, data: APIInteractionData | APIInteractionEditData | APIMessageData, method: APIHTTPSMethods): void
}