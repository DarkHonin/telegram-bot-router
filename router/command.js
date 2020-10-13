module.exports = class {
	/** Command
	 * @param {string} commandRaw : The raw first piece of the message /this.that.hello
	 */
	constructor(commandRaw){
		// todo: clean?

		this.command = commandRaw;
		this.pieces = this.command.split('.')
		this.index = 0
	}

	/**
	 * @property
	 */
	get next(){
		if(this.index >= this.pieces.length) return '.'
		var ret = this.pieces[this.index]
		this.index++
		return ret
	}

	toString(){
		return `Command: ${this.command}\nCurrent command[${this.index}]: ${this.pieces[this.index]}\n`
	}
}