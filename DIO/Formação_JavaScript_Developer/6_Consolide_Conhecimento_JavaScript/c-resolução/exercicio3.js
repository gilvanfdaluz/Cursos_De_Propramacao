//Faça um progrma que receba N (qunatidade de números) e seu respectivos valores.
//Imprima o maior número par e o menor número impar.

//      Exemplo
//          Entrada:
//             5
//             3
//             4
//             1
//             10
//             8

//          Saida:
//              Maior número par: 10
//              Menor número impar: 1

const { gets, print } = require('./funcoes-auxiliares-ex3');

const n = gets();
let maiorNumeroPar = null;
let menorNumeroImpar = null;

for (let i = 0; i < n; i++) {
    const numero = gets();
    if (numero % 2 === 0) {
        if (maiorNumeroPar === null || numero > maiorNumeroPar){
            maiorNumeroPar = numero;
        }
    } else {
        if (menorNumeroImpar === null || numero < menorNumeroImpar) {
            menorNumeroImpar = numero;
        } 
    }
}

print(`Maior número par: ${maiorNumeroPar}`);
print(`Menor número Impar: ${menorNumeroImpar}`);