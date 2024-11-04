let idade = 55;

//Formula simples
if (idade >= 18) {
    if (idade < 60){
        console.log('Você é um adulto');
    }
}


//Formula vom (&& e ||)
if (idade >= 18 && idade <= 60){
    console.log('Voecê é maior de idade');
}

if (idade >= 18 || idade <=60){
    console.log('Você está apto para Votar');
}