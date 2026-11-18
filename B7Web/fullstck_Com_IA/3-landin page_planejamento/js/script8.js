function calcularMedia(notas) {
    if (notas.length === 0) {
        throw new Error('A lista de notas não pode estar vazia.')
    }

    let soma = 0
    let indice = 0

    while (indice < notas.length) {
        soma = soma + notas[indice]
        indice = indice + 1
    }

    return soma / notas.length
}

function classificar(media) {
    if (media <= 4) {
        return 'ruim'
    } else if (media <= 7) {
        return 'bom'
    } else {
        return 'ótimo'
    }
}

const notas = [2, 5, 8, 9, 7, 6, 9, 8, 4, 6]
const media = calcularMedia(notas)

console.log(`Média: ${media}`)
console.log(`Classificação: ${classificar(media)}`)
