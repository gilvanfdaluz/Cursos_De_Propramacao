
// script.js
// Exemplos de formas de adicionar event listeners a botões:
// 1) declaração de função (exemplo isolado)
// 2) passar referência de função como handler
// 3) usar função anônima como wrapper
// 4) usar arrow function como callback

// 1) Declaração de função nomeada — exemplo de handler definido (aqui não está anexado a um elemento):
function clicou() {
    console.log("Clicou no botão 1");
}

// 2) Seleciona o primeiro elemento com classe "botao2" e adiciona o listener
// passando a referência da função `clicou2` diretamente como callback.
let botao2 = document.querySelector(".botao2");
botao2.addEventListener("click", clicou2);

function clicou2() {
    console.log("Clicou no botão 2");
}

// 3) Seleciona o elemento com classe "botao3" e adiciona um listener usando
// uma função anônima. A função anônima permite executar código extra
// antes de chamar o handler `clicou3`.
let botao3 = document.querySelector(".botao3");
botao3.addEventListener("click", function() { clicou3(); });

function clicou3() {
    console.log("Clicou no botão 3");
}

// 4) Seleciona o elemento com classe "botao4" e adiciona um listener
// utilizando uma arrow function como callback (sintaxe curta).
let botao4 = document.querySelector(".botao4");
botao4.addEventListener("click", () => { clicou4(); });

function clicou4() {
    console.log("Clicou no botão 4");
}


document.querySelector(".botao5").addEventListener("click", () => { clicou5();});

function clicou5() {
    console.log("Clicou no botão 5");
}