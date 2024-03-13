function calcularImc(peso, altura){
    return peso / Math.pow(altura, 2);
}

function classificarImc(imc) {
    if (imc < 18.5){
        return ('Abaixo do peso');
    
    } else if (imc >= 18.5 && imc < 25){
        return ('Peso normal');
    
    } else if (imc >= 25 && imc < 30){
        return('Obeso');
    
    } else{
        return('Obesidade Grave');
    }
}
const peso = 65;
const altura = 1.75;
const imc = calcularImc(peso, altura);
console.log(`Peso: ${imc.toFixed(2)}`);
console.log(classificarImc(imc));

