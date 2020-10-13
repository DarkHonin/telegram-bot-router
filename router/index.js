const route = require("./route")

module.exports = class extends route{
	constructor(route_id, routs = {}){
		super(route_id)
		this.routes = routs
	}

	dispatch(msg, next){
		var digest = msg.getCommand()
		var command = digest.next()
		if(this.routes[command] !== undefined)
			this.routes[command].dispatch(msg, next);
		else
			this.routeNotFound(msg, command, next)
	}

	addRoute(r){
		if(r instanceof route)
			this.routes[r.route_id] = r

	}

	toString(){
		return `Router: ${this.route_id}
				Routs: ${JSON.stringify(this.routes)}`
	}

	routeNotFound(msg, command, next = ()=>{}){
		if(command == '.')
			console.log(`Route terminated in: ${this.route_id}`)
		else
			console.log(`Command route doesn not exist: ${command}`)
		console.log(`available routs: ${JSON.stringify(Object.keys(this.routes))}`)
	}
}