
module.exports = class {
	/** Route
	 * abstract class
	 *
	 * @param {string} route_id	: Route string id /this.{route_id}.hello
	 * @function dispatch
	 *
	 * Scafold for route/router objects
	 */
	constructor(route_id){
		this.route_id = route_id
	}

	/**Dispatch
	 *
	 * @param msg : ./message
	 * @param {()=>{}} next : end function
	 *
	 * This is where the routs logic happens
	 */

	dispatch(msg, next = ()=>{}){}


	/** routeNotFound
	 * @param msg					: Message object './message'
	 * @param {string} command		: the last segment reached
	 * @param {(string)=>{}} next	: final call
	 */
	routeNotFound(msg, command, next = ()=>{}){
		console.log(`Route not found: ${msg.command}`)
	}


}