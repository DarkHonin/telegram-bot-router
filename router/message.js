/**
 * Message Object class
 *
 * Basic request info container
 * @param msg
 * @param params
 */

const Command = require("./command")

module.exports = class {
	constructor(msg, params = {}){
		this.msg = msg
		var parts = msg.split(' ')
		this.command = parts[0]
		this.params = params
		if(parts.length > 1)
			this.args = parts.slice(1);
		else
			this.args = [];
		this.commandDigest = undefined
	}

	getCommand(){
		if(this.commandDigest) return this.commandDigest
		this.commandDigest = new Command(this.command)
		return this.commandDigest
	}


	toString(){
		return `
		msg:     ${this.msg}
		command: ${this.command}
		args:    ${JSON.stringify(this.args)}
		params:  ${JSON.stringify(this.params)}\n`;
	}
}