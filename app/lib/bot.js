/* eslint-disable no-undef */
process.env.NTBA_FIX_319 = 1;
const { json } = require("express/lib/response");
const TelegramBot = require("node-telegram-bot-api");
const ExplorerController = require("./controllers/ExplorerController");
require("dotenv").config();

// replace the value below with the Telegram token you receive from @BotFather
const token = process.env.TOKEN;

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
    // 'msg' is the received Message from Telegram
    // 'match' is the result of executing the regexp above on the text content
    // of the message

    const chatId = msg.chat.id;
    const resp = match[1]; // the captured "whatever"

    // send back the matched "whatever" to the chat
    bot.sendMessage(chatId, resp);
});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on("message", (msg) => {
    const chatId = msg.chat.id;
    const menu = "1:getExplorersByMission(mission); \n2:getExplorersUsernamesByMission(mission); \n3:getExplorersAmonutByMission(mission), \n4:getExplorersByStack(stack); \n5:FizzBuzz(Number); \nExample: 1: node;";
    const menuOption = msg.text.split(":")[0];
    const param = msg.text.split(":")[1];
    // console.log(menuOption);
    // console.log(param);    

    if (msg.text ==="menu") {
        bot.sendMessage(chatId, menu);
    }else{
        switch (menuOption) {
        case "1": {
            console.log("getExplorersByMission");
            const explorers = ExplorerController.getExplorersByMission(param);
            console.log(explorers);
            bot.sendMessage(chatId, json.stringify(explorers));
        }
            break;
        case "2": {
            console.log("getExplorersUsernamesByMission");
            const explorers = ExplorerController.getExplorersUsernamesByMission(param);
            bot.sendMessage(chatId, json.stringify(explorers));
        }
            break;
        case "3": {
            console.log("getExplorersAmonutByMission");
            const explorers = ExplorerController.getExplorersAmonutByMission(param);
            bot.sendMessage(chatId, json.stringify(explorers));
        }
            break;
        case "4": {
            console.log("getExplorersByStack");
            const explorers = ExplorerController.getExplorersByStack(param);
            bot.sendMessage(chatId, json.stringify(explorers));
        }
            break;
        case "5":{
            console.log("FizzBuzz");
            const numberToApplyFb = parseInt(param);
            if(!isNaN(numberToApplyFb)){
                const fizzbuzzTrick = ExplorerController.applyValidationInNumber(numberToApplyFb);            
                const responseBot = `Tu número es: ${numberToApplyFb}. Validación: ${fizzbuzzTrick}`;
                bot.sendMessage(chatId, responseBot);
            } else {
                const responseBot = "Favor de ingresar un número válido.";
                bot.sendMessage(chatId, responseBot);
            }
        }
            break;        
        default:            
            bot.sendMessage(chatId, "Please enter menu, to get the available options.");
            break;
        }        
    }    
});