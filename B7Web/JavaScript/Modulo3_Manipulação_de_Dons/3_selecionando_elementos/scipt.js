document.getElementsByTagName("div");
document.getElementById("teste");
document.getElementsByTagName("botao");


//Formula querySelector fuciona com qualquer elemento;

document.querySelector("#teste");
document.querySelector(".botao");
document.querySelector("h1");

/*document.getElementsByTagName("div") = Selecina pelo name da tag
document.getElementById("lista") = Seleciona pelo nome do Id
document.getElementsByTagName("div") = Selecina pelo name da tag

Sempre que tiver Elements no plural ou SelectorAll retorna uma array e o elemento dentro do array

Seleção de forma simples:
document.querySelector("#lista") = Id
document.querySelector("lbtn") = Class
document.querySelector("h1") = Tag Name

Encontrar vários elementos:
document.querySelectorAll("li")
document.querySelectorAll("#lista ul li")*/