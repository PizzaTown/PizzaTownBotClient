
import { createRequire } from "module"; // Bring in the ability to create the 'require' method
import { fetchLatestMessage, fetchMessage, fetchMessageSpecific } from "./utils/message.js";
const require = createRequire(import.meta.url); // construct the require method
const config = require("../config.json") // use the require method

const message: Message[] = await fetchMessage(config.token.beta, 'PizzaTown Beta', '889928301366366210');
const latestMessage: Message | undefined = await fetchLatestMessage(config.token.beta, 'PizzaTown Beta', '889928301366366210');
const specificMessage = await fetchMessageSpecific(config.token.beta, 'PizzaTown Beta', '889928301366366210', '890134487093084210')
//console.log(message);
console.log(latestMessage?.content)

