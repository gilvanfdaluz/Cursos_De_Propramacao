
//Condicionaiis
const valor = 80

const descnoto1 = (10/100) * valor
const descnoto2 = (20/100) * valor
const valorFinal1 = valor - descnoto1
const valorFinal2 = valor - descnoto2

if (valor >=100){

    console.log(`R$-${descnoto1} = Desconto 10%`)
    console.log(`Valor a Pagar R$ ${valorFinal1}`)

} else if (valor >=200){

    console.log(`R$-${descnoto2} = Desconto 20%`)
    console.log(`Valor a pagar R$ ${valorFinal2}`)

} else {

    console.log(`R$ ${valor} - Deconto 0%`)
}
