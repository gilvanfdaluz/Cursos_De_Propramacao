/*
Função padrão
======================

function somar(x, y) {
    return x + y
}
console.log(somar(10, 5))
*/

//OPÇÃO 1
const somar = (x, y) => {
    return x + y;
}
console.log(somar(10, 5));

//OPÇÃO 2
const subtracao = (x, y) => x - y;
console.log(subtracao(10, 5));

//opcao 3
function sobrenome(sob) {
    return 'Jose ' + sob;
}

//outras opções
const sobrenome = sob => 'José Carlos ' + sob;
const sobrenome = (sob) => 'Já Antonio ' + sob;
const sobrenome = (sob) => {
    return 'Jose' + sob
}

console.log(sobrenome('Fernando'));