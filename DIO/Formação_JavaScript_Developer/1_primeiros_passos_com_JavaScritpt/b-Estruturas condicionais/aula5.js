//Estrutura condicional if, else if, else

const numero = 9;
const numeroDivisivelPor5 = (numero % 5) ===0;

if (numero === 0){
    console.log('O número é inválido');
} else if(numeroDivisivelPor5){
    console.log('O número é divisivel de 5');
} else{
    console.log('O número não é diviível de 5');
}
