const fs = require("fs");
const util = require("util");


class Read {

    constructor() {
        this.reader = util.promisify(fs.readFile)
    }

    async Ler(file) {
        try {
            return await this.reader(file, "utf-8");
        } catch (erro) {
            return undefined;
        }
    }
}


module.exports = Read;