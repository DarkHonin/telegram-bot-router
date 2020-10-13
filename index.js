const serverCfg = require("../../config/server")

const telegramBot = require("node-telegram-bot-api")
const message = require("./router/message")
const Router = require("./router")

const helpRoute = require("../routs").helpRoute
const projectRouter = require("../routs").projectRouter
const postRouter = require("../routs").postRouter

const bot = new telegramBot(process.env.TELEGRAM_TOKEN, {polling : true});

const params = {

}

const router = new Router("/")

router.addRoute(new helpRoute())
router.addRoute(new projectRouter())
router.addRoute(new postRouter())


bot.onText( /\/info\ (?<test>.*)/, (msg, match)=>{
	console.log(match)
	bot.sendMessage(msg.chat.id, "Hello")
})

bot.onText(/\/.*/, (msg)=>{
	console.log(msg)
	var use = params
	if(msg.reply_to_message)
		use = { ...use, replied_to: msg.reply_to_message}

	const msgObj = new message(msg.text, use)

	router.dispatch(msgObj, (resp) => bot.sendMessage(msg.chat.id, resp))
})

module.exports = bot