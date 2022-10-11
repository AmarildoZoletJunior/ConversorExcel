let lerExcel = require("./leitorExcel");
let ConfigurarParaTabelas = require("./Gerador/GerarArrays");
let Tabela = require("./gerarArrays");
let TransformarEjs = require("./Gerador/transformarejs");
let TransformarHTML = require("./Gerador/transformarhtml");
let TransformarPDF = require("./Gerador/geradorPDF")


//classe lerExcel
let leitor = new lerExcel();


let escritor = new TransformarHTML();

let  novoAsync = async ()=>{
    //fazendo a leitura do arquivo csv
    let teste = await leitor.Ler("./teste.csv");
    let dadosProcessados = ConfigurarParaTabelas.processo(teste);
    let usuarios = new Tabela(dadosProcessados);
   console.log(usuarios.QuantidadeColunas);
   console.log(usuarios.QuantidadeHeader);

   let ejs = await TransformarEjs.Parse(usuarios);

   escritor.writer(`./arquivosGerados/html/${Date.now() + ".html"}`,ejs)
   TransformarPDF.Ler(`./arquivosGerados/pdf/${Date.now() + ".pdf"}`,ejs)
}

novoAsync();


