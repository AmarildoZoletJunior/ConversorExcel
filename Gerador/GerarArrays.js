class Processar{
    static processo(data){
        let a = data.split("\r\n");
        let newArray = [];
        a.forEach(row => {
            let teste = row.split(",");
            newArray.push(teste);
        });
        return newArray
    }
}

module.exports = Processar;