
const telegramBot = require("node-telegram-bot-api")
const message = require("./router/message")
const Router = require("./router")
const routs = require("../routs")

const bot = new telegramBot(process.env.TELEGRAM_TOKEN, {polling : true});

const params = {

}

const router = new Router("/", routs)

bot.onText( /\/info\ (?<test>.*)/, (msg, match)=>{
	bot.sendMessage(msg.chat.id, "Hello")
})

bot.onText(/\/.*/, (msg)=>{

	var use = params
	if(msg.reply_to_message)
		use = { ...use, replied_to: msg.reply_to_message}

	const msgObj = new message(msg.text, use)

	router.dispatch(msgObj, (resp) => bot.sendMessage(msg.chat.id, resp))
})
/**
 * telegram_bot_router
 *
 * todo: add a start and stop button
 * todo: npm module
 * todo: readme.md
 */

module.exports = bot