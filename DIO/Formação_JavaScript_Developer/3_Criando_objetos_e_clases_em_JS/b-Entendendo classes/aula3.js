//Criando Instnacias com Construtor

class pessoa {
    nome;   
    idade; 

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDoNascimento = 2023 - idade;
    }

    descrever(){
        console.log(`Meu nome é ${this.nome}, minha idade é ${this.idade}`);
    }
    
}

const antonio = new pessoa('Antonio', 25);
const carlos = new pessoa('Carlos', 30);


antonio.descrever();
carlos.descrever();
