//Vaviarel de escopo global
let count = 0;

function add() {
    count ++;
}
add();
add();
console.log(count);


//Veriavel local
//Nesse caso o sistema opta em usar a viriável dentro da funçção.
let count1 = 0;

function add() {
    let count1 = 0;
    count1 ++;
}
add();
add();
console.log(count1);