const { throws } = require('assert');
const https = require('https');
let counter = 0;


class RESTManager {
    /**
     * 
     * @param {any} options 
     */
    constructor() {
        this.queueArr = [];
        this.counter = counter;
    }

    get queue() {
        return this.queueArr;
    }

    get Counter() {
        return this.counter;
    }
    /**
     * 
     * @param {string} url - Endpoint URL
     * @param {import('../@types/api/REST').APIInteractionData | import('../@types/api/REST').APIInteractionEditData | import('../@types/api/REST').APIMessageData} data - Data that's being sent.
     * @param {import('../@types/api/REST').APIHTTPSMethods} method - REST Method.
     * 
     * @description Running REST event
     */
    async run(url, data, method) {
        if (this.counter === 50) {
            this.queue.push({
                url,
                data,
                method,
            })
        }

        setTimeout(() => {
            this.counter = 0;
            return;
        }, 180000)

        const options = {
            hostname: 'discord.com',
            port: 443,
            path: this.queue.length === 0 ? url : this.queue[0].url,
            method: this.queue.length === 0 ? method : this.queue[0].url,
            headers: {
                "Content-Type": 'application/json',
            },
        }
        const req = https.request(options, (res) => {
            res.on('data', (d) => {
            })
        })



        req.on('error', (error) => {
            console.error(error)
        })

        req.write(JSON.stringify(this.queue.length === 0 ? data : this.queue[0].url))
        req.end();
        this.counter += 1;
        if (this.queue.length !== 0) this.queue.shift();
    }

}

module.exports = RESTManager