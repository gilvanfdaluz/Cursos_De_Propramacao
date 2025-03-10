/*
Length => mostra a quantidade de itens em um array
Puch => adiciona um item novo ao array
pops => tira o ultimo item do array
shift => tira o primeiro item do array
join => gera uma string com o sapeador que definir

fruits[0] = 'pera'; => substituindo valor no index [0]
fruits[fruits.length - 1] = 'pera'; => Remove e altera o ultimo item
*/

let fruits = ['maçã', 'uva', 'larana', 'banana'];
fruits.push('abacaxi');
fruits.pop()
fruits.shift()
fruits[1] = 'pêra';
fruits[2] = 'goiaba';
fruits[fruits.length - 1] = 'graviola';

console.log(`${fruits.join(', ')}\n${fruits.length} itens`);
