function calcularInss(salarioBruto){
    let inss = 0;
    let tetoInss = 908.85;

    if(salarioBruto <= 1412){
        inss = salarioBruto * 0.075
    }
    else if (salarioBruto <= 2666.68){
        inss = salarioBruto * 0.09
    }
    else if (salarioBruto <= 4000.03){
        inss = salarioBruto * 0.12
    }
    else if (salarioBruto >= 4000.04){
        inss = salarioBruto * 0.14
    }

    if (inss > tetoInss){
        inss = tetoInss
    }
    return inss;
}
module.exports = calcularInss;