/*const calcularInss = require("./calculo_inss");
console.log(calcularInss(4664.68));


const calcularImposto = require ('./calculo_imposto_renda');
console.log (calcularImposto(4664.68));


const calcularLiquido = require ('./calculo_salario_liquido');
console.log(calcularLiquido(4664.68)); */


const readline = require('readline');
const calcularInss = require('./calculo_inss');
const calcularImposto = require('./calculo_imposto_renda');
const calcularLiquido = require('./calculo_salario_liquido');
const input = readline.createInterface(
    process.stdin,
    process.stdout,
);

let nome = "";
let cpf = "";
let salarioBruto = 0;

input.question("Nome do funcionario:", (nomeDigitado)=>{
    nome = nomeDigitado;
    
    input.question("CPF:", (cpfDigitado) => {
        cpf = cpfDigitado;

            input.question("Salário Bruto:", (salarioDigitado) => {
                salarioBruto = salarioDigitado;

                input.close()
                
        console.log(`        ~Folha de Pagamento~
        Nome: ${nome}
        CPF: ${cpf}
        Salario Bruto: ${salarioBruto}
        INSS: ${(calcularInss(salarioBruto)).toFixed(2)}
        Imposto de Renda: ${(calcularImposto(salarioBruto)).toFixed(2)}
        Salario Líquido: ${(calcularLiquido(salarioBruto)).toFixed(2)}
        `)
        })
    })
})