# telegram-bot-router

An experimental routing system for a [telegram bot](https://core.telegram.org/bots).

## Requirements

- "npm": "^6.4.1"
- "node": "^10.15.1"
- "node-telegram-bot-api": "^0.50.0"

This code was done out of impulse. If you have any suggestions or ideas please open a ticket.

## Usage
---
## init

I don't know how to implement this yet but I want it to be:
		const botRouter = require('telegram-bot-router')

		const routs = [
			... Routs go here ...
		]

		const params = {
			... params go here ...
		}

		const bot = botRouter(params, routs)

---

## Route/r
Creating a route:

	const Route = require('telegram-bot-router/router/route')
	const route = new Route('/hello', (msg, next)=>{
		next("Hello World")
	})

Creating a router:

	const Router = require('telegram-bot-router/router')
	const router = new Router("/", [... routs ...])

	// Adding a route in post

	router.addRoute( router )
