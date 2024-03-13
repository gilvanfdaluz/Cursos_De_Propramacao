function incrementarJuros(valor, percentualJuros){
    const valorDeacrecsimo = (percentualJuros/100)*valor;
    return valor + valorDeacrecsimo;
}

console.log(incrementarJuros(100, 10));
console.log(incrementarJuros(100, 15));
console.log(incrementarJuros(100, 20));
