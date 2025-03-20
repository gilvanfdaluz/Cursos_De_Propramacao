let fruits = ['maçâ', 'uva', 'laranja', 'banana'];

/*let bigFruits = fruits.filter((item) => {
    if(item.length > 4) {
        return true;
    } else {
        return false;
    }
});

let bigFruits = fruits.filter((item) => {
    return item.length > 4
});*/

/*
let bigFruits = fruits.filter((item) => item.length > 4);
console.log(bigFruits)
*/

/*parametros para processo de filtragem;
value;
index;
array;
*/

/*
=========================================
Função para etornar positivo ou falso
*/
let ok = fruits.some((value) => {
return value.length > 3;

});

if (ok) {
    console.log('Algum item é maior que 3');
} else {
    console.log('Nenhum item é maior que 3');
}

//O everyre retorna true quando todos os itens do array satisfazem a condição
//O some retona true quando algum item satisfazem a condição

/*=================================
 Identificado item no Array
*/

if (fruits.includes('uva')) {
    console.log('Tem uva sim');
} else {
    console.log('Não tem uva...')
}