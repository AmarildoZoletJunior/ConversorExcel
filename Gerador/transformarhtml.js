const fs = require("fs");
const util = require("util");

class Leitura{
    constructor(){
        this.writer = util.promisify(fs.writeFile);
    }

    async Ler(file,data){
        try{
            await this.writer(file,data);
            return true;
        }catch(err){
            return false;
        }
    }
}
module.exports = Leitura;