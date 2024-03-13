//Função que escreve meu nome
//Verificar idade

function  escreverNome (nome){
    return `Meu nome é ${nome}`;
}

function verificrIdade(idade){

if (idade >= 18){
    console.log(`${escreverNome('Antonio')}\nSou maior de idade`);

} else{
    console.log (`${escreverNome('Antonio')}\nSou menor de idade`);
}

}

verificrIdade(17);