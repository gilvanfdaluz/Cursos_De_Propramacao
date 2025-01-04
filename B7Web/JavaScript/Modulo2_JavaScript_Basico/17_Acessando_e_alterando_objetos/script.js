let veiculo = {
    nome: 'Celta',
    ano: 2024,
    pais: 'Brasil',
    cambio: ['Autmomático', 'Manual'],
    caracteristicas: {
        cor: ['Branco', 'Azul'],
        potencia: '150-CV'
    }
}
veiculo.nome = 'Golf';
veiculo.ano += 5;
veiculo.caracteristicas.cor.push('Verde');
console.log(`Veiculo ${veiculo.nome}, ano ${veiculo.ano}, nas cores ${veiculo.caracteristicas.cor[2]}`);

//================================================

let personagem = {
    nome: 'Paulo',
    idade: 65,
    carros: [
        {modelo: 'Fiat', cor: 'Preto'},
        {modelo: 'Ferrari', cor: 'Vermelho'}
    ]
}

console.log(personagem.carros[0].modelo + ' ' + personagem.carros[0].cor);