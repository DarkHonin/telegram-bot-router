/**
 * Route abstract class
 *
 * Scafold for route/router objects
 * @param route_id
 * @function dispatch
 */


module.exports = class {
	constructor(route_id){
		this.route_id = route_id
	}

	dispatch(msg, next = ()=>{}){}

	routeNotFound(msg, command, next = ()=>{}){
		console.log(`Route not found: ${msg.command}`)
	}


}