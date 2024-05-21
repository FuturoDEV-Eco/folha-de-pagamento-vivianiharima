const calcularInss = require("./calculo_inss");
const calcularImposto = require ('./calculo_imposto_renda');


let salarioLiquido = 0;

function calcularLiquido(salarioBruto){
    salarioLiquido = salarioBruto - calcularInss(salarioBruto) - calcularImposto(salarioBruto);
    return salarioLiquido;
}


module.exports = calcularLiquido;