const senha = '1234000';
const caracteres = senha.length;

if (caracteres < 4){
    console.log('Senha Fraca');
} else if (caracteres >=4 && caracteres <=6){
    console.log('Senha média');
} else {
    (console.log('Senha forte'));
}