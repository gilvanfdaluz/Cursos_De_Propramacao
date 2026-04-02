/*function clicou() {
    const teste = document.querySelector("#teste");
    console.log(teste.children);
}*/

function clicou() {
    const teste = document.querySelector("#teste");
    const ul = teste.querySelector("ul");

    ul.children[0].innerHTML = "item alterdo";
}