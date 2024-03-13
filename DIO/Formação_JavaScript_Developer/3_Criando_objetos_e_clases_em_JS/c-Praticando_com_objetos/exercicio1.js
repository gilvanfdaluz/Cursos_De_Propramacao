/*1 - Crie uma classe para representar carros.
Os carros possuem uma marca, uma cor, e um gasto médio de combustivel por kilometro rodado.
Crie um meotodo que dado a quantidade e o preço do combustivel nos de o valor gasto em reais para realizar este percurso.
*/

class carro{
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    } 

//Criando metodo clacularGastoDoPercurso
    clacularGastoDoPercurso(distanciaEmKm, precoCombustivel){
        return distanciaEmKm * this.gastoMedioPorKm * precoCombustivel;
    }

}

//Criando a intancia

    const uno = new carro('Fiat','Prata', 1/12.);
    console.log(uno.clacularGastoDoPercurso(70, 5).toFixed(2));
    const palio = new carro('Fiat','Preto', 1/10);
    console.log(palio.clacularGastoDoPercurso(70, 5).toFixed(2));

    
