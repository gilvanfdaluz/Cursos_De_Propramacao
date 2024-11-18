/*
Calcule a porcentagem entre 2 números.
Exemplo: 25% de 40 é 10
Formula da porcventagem: (Y / x) * 100
Udo da função:

let x =40;
let y = 10
let pct = calPct(x,y);
console.log(`${pct}% de ${x} é ${y}`)
*/

function calPct (x,y) {
    return (y / x) * 100;
}

let x =40;
let y = 10;
let pct = calPct(x,y);
console.log(`${pct}% de ${x} é ${y}`)


/*
//ALTERNATIVA 02
function calPct (x, y){
    let pct = (y / x) * 100;
    console.log(`${pct}% de ${x} é ${y}`);
}
calPct(40, 10);
calPct(50, 20);
*/