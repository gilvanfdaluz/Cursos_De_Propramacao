/*
3)Elabore um algoritmo que calcule o que deve ser pago por um porduto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagmanento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
1 - À vsita débito, recebe 10% de desconto;
2 - À vista dinheiro ou PIX, recebi 15% de desconto;
3 - Em duas vezes, preço normal de etiqueta sem juros
4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/
function aplicarDesconto(valor, desconto){
    return (valor - (valor * (desconto / 100)))
}

function aplicarJuros(valor, juros){
    return (valor + (valor *  (juros / 100)));
}

const precoEtiqueta = 100.00;
const condicaoPagamento = 4;

if (condicaoPagamento === 1){
    console.log(aplicarDesconto(precoEtiqueta, 10));

} else if (condicaoPagamento === 2){
    console.log(aplicarDesconto(precoEtiqueta, 15));

} else if (condicaoPagamento === 3){
    console.log(precoEtiqueta);

} else if (condicaoPagamento === 4){
    console.log(aplicarJuros(precoEtiqueta, 10));
} else{
    console.log('Condição inválida');
}