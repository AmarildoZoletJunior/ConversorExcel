let pdf = require("html-pdf");

class PDF{
    static Ler(file,html){
        pdf.create(html,{}).toFile(file,(erro)=>{});
    }
}
module.exports = PDF;