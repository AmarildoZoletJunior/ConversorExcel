class Tabela{
    constructor(array){
        this.header = array[0];
        array.shift();
        this.rows = array;
    }

    get QuantidadeHeader(){
       let quantidade = this.header.length;
        return quantidade;
    }
    get QuantidadeColunas(){
        let quantidade = this.rows.length;
         return quantidade;
     }

}

module.exports = Tabela;