/* Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos, nome e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC(IMC * peseo / altura));
Instancie uma pessoa chamada Josévque tenha 70Kg de peso 1 1.75 de altura e peça ao José para dizer o valor.
*/

class pessoa{
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura
    }

    calcularImc(){
        return this.peso / (this.altura * this.altura);
    }

    classificarImc(){
        const imc = this.calcularImc();{
            if (imc < 18.5){
                return ('Abaixo do peso');
            
            } else if (imc >= 18.5 && imc < 25){
                return ('Peso normal');
            
            } else if (imc >= 25 && imc < 30){
                return('Obeso');
            
            } else{
                return('Obesidade Grave');
            }
        
    }
    }
}

const antonio = new pessoa('Antonio', 68, 1.72);
console.log(antonio.classificarImc());
console.log(antonio.calcularImc().toFixed(2));

