function nomeCompleto(nome, completo){
    console.log(`Nome Completo: ${nome} ${completo}`);
}
function idade(anoAtual, AnoNascimento){
    let calculo = anoAtual - AnoNascimento;
    console.log(`idade: ${calculo} anos`);
}


nomeCompleto('Anderson', 'Silva');
idade(2024, 2000);