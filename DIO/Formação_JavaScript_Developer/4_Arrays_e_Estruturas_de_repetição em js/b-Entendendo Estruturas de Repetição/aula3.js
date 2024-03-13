//Executando For Para Exibir a Média de Notas

const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);
notas.push(8);

let soma = 0;

for (let i = 0; i < notas.length; i++){
    const nota = notas[i];
    soma = soma + nota;
}

const media = soma / notas.length;
console.log(`A soma é: ${soma.toFixed(2)}\nA média é: ${media.toFixed(2)}`);