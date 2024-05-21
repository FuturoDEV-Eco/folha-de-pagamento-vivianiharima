function calcularImposto(salarioBruto){
    let aliquota = 0;
    let deduzirIR = 0;
    let valorPago = 0;

    if(salarioBruto <= 2112){
        aliquota = 0;
        deduzirIR = 0;
        valorPago = 0;
    }
    else if (salarioBruto <= 2826.65){
        aliquota = salarioBruto * 0.075;
        deduzirIR = 158.40;
        valorPago = aliquota - deduzirIR;
    }
    else if (salarioBruto <= 3751.05){
        aliquota = salarioBruto * 0.15
        deduzirIR = 370.40;
        valorPago = aliquota - deduzirIR;
    }
    else if (salarioBruto <= 4664.68 ){
        aliquota = salarioBruto * 0.225
        deduzirIR = 651.73;
        valorPago = aliquota - deduzirIR;
    }

    else {
        aliquota = salarioBruto * 0.275
        deduzirIR = 884.96;
        valorPago = aliquota - deduzirIR;
    }
   
    return valorPago;
}
module.exports = calcularImposto;