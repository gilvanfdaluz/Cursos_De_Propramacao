//Exercicio - Incrementando o valor de uma viagem.

/*Faça um programa para calcular o valor de uma viagem,

Você terá 5 variáveis. Sendo elas:
1 - Preço do etanol;
2 - Preço da gassolina;
3 - O tipo de combustivel que está no seu carro;
4 - Gasto médio de combustivel do carro;
4 - Distancia em KM da viagem;
5 - Distancia em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.
*/
const precoEtanol = 5.79;
const precoGasolina = 6.00;
const tipoCombustivel = 'etanol';
const kmPorLitro = 10;
const distanciaPorKm = 100;

const litrosConsumidos = distanciaPorKm / kmPorLitro;

if (tipoCombustivel === 'etanol'){
  const valorGasto = litrosConsumidos * precoEtanol;
     console.log(valorGasto.toFixed(2));

} else if (tipoCombustivel === 'gasolina'){
   const valorGasto = litrosConsumidos * precoGasolina;
     console.log(valorGasto.toFixed(2))

} else{
    console.log('Nome do combustivlel inválido');
}
