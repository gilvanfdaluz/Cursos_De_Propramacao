/*
3)Elabore um algoritmo que calcule o que deve ser pago por um porduto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagmanento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
1 - À vsita débito, recebe 10% de desconto;
2 - À vista dinheiro ou PIX, recebi 15% de desconto;
3 - Em duas vezes, preço normal de etiqueta sem juros
4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

//Práticando exercicios:

const precoEtiqueta = 5.00;
const condicaoPagamento = 4;
const numeroParcela = 4;

if (condicaoPagamento === 1 && numeroParcela === 0){
    const pagamento = precoEtiqueta - (precoEtiqueta * 0.10);
        console.log(`Débito\nValor: R$${pagamento.toFixed(2)}`);

} else if (condicaoPagamento === 2 && numeroParcela === 0){
    const pagamento = precoEtiqueta - (precoEtiqueta * 0.15);
        console.log(`Dinheiro ou PIX\nValor: R$${pagamento.toFixed(2)}`);

} else if (condicaoPagamento === 3 && numeroParcela === 0 || numeroParcela === 2){
    const pagamento = precoEtiqueta / 2;
        console.log(`Valor: R$${precoEtiqueta.toFixed(2)}\nParcelas: 2x\nValor da parcela: R$${pagamento.toFixed(2)}`);

} else if (condicaoPagamento === 4 && numeroParcela > 2 && numeroParcela <= 6){
    const pagamento = precoEtiqueta + (precoEtiqueta * 0.10);
        const valorParcela = pagamento / numeroParcela;
            console.log(`Valor: R$${pagamento.toFixed(2)}\nParcelas: ${numeroParcela}x\nValor da parcela: R$${valorParcela.toFixed(2)}`);
} else{
    console.log('Nº de condição ou parcela inválida!')
}