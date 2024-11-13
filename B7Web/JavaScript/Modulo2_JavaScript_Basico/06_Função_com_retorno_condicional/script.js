function maiorIdade(idade){
    if (idade >= 18){
        return true;
    } else {
        return false;
    }
}

let idade = 19;
let verificacao = maiorIdade(idade);

if (verificacao) {
    console.log('Maior de idade');
} else {
    console.log('Menor de idade');
}