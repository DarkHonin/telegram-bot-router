const route = require("./route")


module.exports = class extends route{

 /** Router
  *
  * @param {string} route_id
  * @param routs
  */
	constructor(route_id, routs = []){
		super(route_id)
		var that = this
		routs.forEach((e) => that.addRoute(e))
	}

	/** Dispatch
	 * @param msg: Message object './message'
	 * @param next: End callback, badly impleminted
	 *
	 * Within the router dispatch serves as a lookup system,
	 * fetching the next part of an instruction and testing
	 * for its existence.
	 *
	 * If a match is not found it defaults to routeNotFound
	 * who will end in killing the thread with a responce
	 *
	 */
	dispatch(msg, next){
		var digest = msg.command
		var command = digest.next
		if(this.routes[command] !== undefined)
			this.routes[command].dispatch(msg, next);
		else
			this.routeNotFound(msg, command, next)
	}

	/** addRoute
	 * @param r:an instance of ./route
	 *
	 * Adds the route to the routers child list
	 *
	 */

	addRoute(r){
		if(r instanceof route)
			this.routes[r.route_id] = r

	}

	toString(){
		return `Router: ${this.route_id}
				Routs: ${JSON.stringify(this.routes)}`
	}


	/** routeNotFound
	 * @param msg					: Message object './message'
	 * @param {string} command		: the last segment reached
	 * @param {(string)=>{}} next	: final call
	 */

	routeNotFound(msg, command, next = (string)=>{}){
		if(command == '.')
			console.log(`Route terminated in: ${this.route_id}`)
		else
			console.log(`Command route doesn not exist: ${command}`)
		console.log(`available routs: ${JSON.stringify(Object.keys(this.routes))}`)
	}
}