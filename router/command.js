module.exports = class {
	constructor(commandRaw){
		// Clean and stuff

		this.command = commandRaw;
		this.pieces = this.command.split('-')
		this.index = 0
	}

	// get next command
	next(){
		if(this.index >= this.pieces.length) return '.'
		var ret = this.pieces[this.index]
		this.index++
		return ret
	}

	toString(){
		return `Command: ${this.command}\nCurrent command[${this.index}]: ${this.pieces[this.index]}\n`
	}
}