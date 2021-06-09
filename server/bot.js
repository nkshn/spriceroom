const TelegramBot = require('node-telegram-bot-api');
const config = require("config");

const TOKEN = config.get('telegramApiKey');

const chatId = 761818167; // @asdytrewq
// const chatId = 577033676; // @nataka

const bot = new TelegramBot(TOKEN, { polling: true });

module.exports = { bot, chatId }