let produtos = [{nome: 'teclado', marca: 'tochiba', preco: 100, estoque: 3}]
produtos.push({nome: 'tmouse', marca: 'tochiba', preco: 50, estoque: 5})
produtos.push({nome: 'bateia', marca: 'sony', preco: 25, estoque: 10})

let q = 0
while(q < produtos.length) {
    console.log(`Produto: ${produtos[q].nome}, Produto: ${produtos[q].marca}, Preço: ${produtos[q].preco}`)
    q= q + 1
}