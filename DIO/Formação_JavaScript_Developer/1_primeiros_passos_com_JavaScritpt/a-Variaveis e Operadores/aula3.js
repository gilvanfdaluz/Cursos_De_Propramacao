//Ecercicio - Calculo de valor de uma Viagem

/*
Faça um programa para calclar o valor de uma viagem

Voçe terá 3 variaveis, sendo elas:
1-Preço do combustivel;
2-Gasto médio de combustivel do carro por KM;
3-Distancia em Km da viagem
*/

const precoCombustivel = 5.79;
const kmPorLitro = 10;
const distanciaPorKm = 100;

const litrosConsumido = distanciaPorKm / kmPorLitro;
const valorGasto = litrosConsumido * precoCombustivel;

console.log(`Valor da viagem: ${valorGasto.toFixed(2)}`);

//toFixed => altera a quantidade de casas decimais