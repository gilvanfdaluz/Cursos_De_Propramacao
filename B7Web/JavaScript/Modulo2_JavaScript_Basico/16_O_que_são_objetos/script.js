let veiculo = {
    nome: 'Celta',
    ano: 2024,
    pais: 'Brasil',
    cambio: ['Autmomático', 'Manual'],
    caracteristicas: {
        cor: 'Branco',
        potencia: '150-CV'
    }
}

console.log(`Veiculo ${veiculo.nome}, ano de fabricação ${veiculo.ano}, cidade de origem ${veiculo.pais}`);
console.log(`Caractristicas:\nCor: ${veiculo.caracteristicas.cor}`);
console.log(`Cambio: ${veiculo.cambio[1]}`);