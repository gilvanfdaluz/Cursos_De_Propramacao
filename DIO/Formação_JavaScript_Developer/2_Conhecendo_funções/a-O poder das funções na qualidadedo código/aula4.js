function incrementarJuros(valor, percentualJuros){
    return (percentualJuros / 100)*valor;
}

const juros = incrementarJuros(50,10)
console.log(juros);