
import { log } from "console";
import { createRequire } from "module"; // Bring in the ability to create the 'require' method
import { fetchLatestMessage, fetchMessage, fetchMessageSpecific } from "./utils/message.js";
const require = createRequire(import.meta.url); // construct the require method
const config = require("../config.json") // use the require method

const message: Message[] = await fetchMessage(config.token.beta, 'YOUR_BOT_NAME_HERE', 'CHANNEL_ID_HERE');
const latestMessage: Message | undefined = await fetchLatestMessage(config.token.beta, 'YOUR_BOT_NAME_HERE', 'CHANNEL_ID_HERE');
const specificMessage = await fetchMessageSpecific(config.token.beta, 'YOUR_BOT_NAME_HERE', 'CHANNEL_ID_HERE', 'MESSAGE_ID_HERE')

//log(message);

log(latestMessage)

//log(specificMessage?.content);

