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
const fs = require('fs');
const PDFDocument = require('pdfkit');

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

let nome = "";
let cpf = "";
let salarioBruto = 0;

input.question("Nome do funcionario:", (nomeDigitado)=>{
    nome = nomeDigitado;
    
    input.question("CPF:", (cpfDigitado) => {
        cpf = cpfDigitado;

            input.question("Salário Bruto:", (salarioDigitado) => {
                salarioBruto = parseFloat(salarioDigitado);

                input.close()
                
        console.log(`        ~Folha de Pagamento~
        Nome: ${nome}
        CPF: ${cpf}
        Salario Bruto: ${salarioBruto}
        INSS: ${(calcularInss(salarioBruto)).toFixed(2)}
        Imposto de Renda: ${(calcularImposto(salarioBruto)).toFixed(2)}
        Salario Líquido: ${(calcularLiquido(salarioBruto)).toFixed(2)}
        `)
        

        const doc = new PDFDocument();
        doc.pipe(fs.createWriteStream('Folha_pagamento.pdf'));
        doc.fontSize(12);

        doc.text('-----Folha de Pagamento-----');
        doc.text('Dados do funcionário:')
        doc.text(`Nome: ${nome}`)
        doc.text(`Data: ${new Date().toLocaleDateString()}`);
        doc.text(`CPF: ${cpf}`)
        doc.text('---------------------------')
        doc.text(`Salario Bruto: ${salarioBruto}`)
        doc.text(`INSS: ${(calcularInss(salarioBruto)).toFixed(2)}`)
        doc.text(`CImposto de Renda: ${(calcularImposto(salarioBruto)).toFixed(2)}`)
        doc.text('---------------------------')
        doc.text(`Salario Líquido: ${(calcularLiquido(salarioBruto)).toFixed(2)}`)
        doc.end();
        console.log("Folha de pagamento salva em arquivo PDF com sucesso!")

        })
    })
})