//Criando Instnacias com Construtor

class pessoa {
    nome;   
    idade; 

    constructor(){
        this.nome = 'teste';
        this.idade = 20;
    }

    descrever(){
        console.log(`Meu nome é ${this.nome}, minha idade é ${this.idade}`);
    }
    
}

const antonio = new pessoa();
const carlos = new pessoa();


antonio.descrever();
carlos.descrever();