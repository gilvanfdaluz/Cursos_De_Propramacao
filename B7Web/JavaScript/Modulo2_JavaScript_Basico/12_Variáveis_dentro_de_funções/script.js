//Função para Raiz qudrada
function square(x) {
    return x * x;
}
console.log(square(2));

//Raiz quadrada e soma
function square2(x) {
    return x * x;
}
function addSquare(a, b){
    let sqrA = square2(a);
    let sqrB = square2(b);
    return sqrA + sqrB;
}
console.log(addSquare(2, 2));

//Raiz quadrada e soma dentro da funcion
function addSquare2(a, b){
    function square3(x) {
        return x * x;
    }
    let sqrA = square3(a);
    let sqrB = square3(b);
    return sqrA + sqrB;
}
console.log(addSquare2(2, 2));

//Raiz quadrada e soma dentro da funcion com arrow(Dica Professor)
function addSquare3(a, b){
    const square4 = x => {
        return x * x 
    }

    let sqrA = square4(a);
    let sqrB = square4(b);
    return sqrA + sqrB;
}
console.log(addSquare3(2, 2));