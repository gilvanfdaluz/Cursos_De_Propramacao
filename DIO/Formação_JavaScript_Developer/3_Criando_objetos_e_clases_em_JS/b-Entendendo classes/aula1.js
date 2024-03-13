//como Criar classes instantaneas

// Class é a definição do que deve ser oo
class pessoa {
    nome;   
    idade; 
    

    descrever(){
        console.log(`Meu nome é ${pessoa.nome}, minha idade é ${pessoa.idade}`);
    }
    
};

// const é a ocorrencia do objeto .
const antonio = new pessoa();
pessoa.nome = 'Antonio';
pessoa.idade = 25;

const carlos = new pessoa();
pessoa.nome = 'Carlos';
pessoa.idade = 25;

antonio.descrever();
carlos.descrever();