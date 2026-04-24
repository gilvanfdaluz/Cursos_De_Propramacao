/*function clicou() {
    const teste = document.querySelector("#teste");
    const ul = teste.querySelector("ul");

//ul.children[0].append(" - item alterado");
ul.children[0].innerHTML +=(" - item alterado");


}*/


function clicou() {
    const teste = document.querySelector("#teste");
    const ul = teste.querySelector("ul");
   //ul.append("<li>item adicionado</li>");

   ul.innerHTML += "<li>item adicionado</li>";

   /*let newli = document.createElement("li");
   newli.innerText = "item adicionado";
   ul.appendChild(newli);*/
   
}

//função .append() é mais simples, mas não funciona em todos os navegadores, já a função .appendChild() é mais complexa, mas funciona em todos os navegadores. apend é usado quando queremos adicionar um elemento já criado, ou seja, um elemento que já existe no código html, já o appendChild é usado quando queremos criar um elemento do zero e depois adicioná-lo na página.

//inerHTML é usado para alterar o conteúdo de um elemento, ele substitui todo o conteúdo do elemento pelo novo conteúdo, já o innerText é usado para alterar o texto de um elemento, ele substitui apenas o texto do elemento, sem alterar as tags html.