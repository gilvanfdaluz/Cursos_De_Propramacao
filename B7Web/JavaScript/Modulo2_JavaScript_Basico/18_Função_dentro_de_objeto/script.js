let pessoa = {
    nome: 'Paulo',
    sobrenome: 'Ribeiro',
    idade: 90,
    nomeCompleto: function () {
        return `${this.nome} ${this.sobrenome}`;
    }
}
console.log(pessoa.nomeCompleto());