let numero;
let quantidade = 0;
let soma = 0;
let maior;
let menor;

do {
    numero = Number(prompt("Digite um número (0 para finalizar):"));

    if (numero !== 0){
        quantidade++;
        soma += numero;

        if ( quantidade === 1) {
            maior = numero;
            menor = numero;

       
    } else {
        if ( numero > maior ) {
            maior = numero;
        }

        if (numero < menor ) {
            menor = numero;
       
        }
    }
}
} while (numero !== 0);

if (quantidade === 0) {
    console.log("Nenhuma número foi informado.");
} else {
    const media = soma / quantidade;

    console.log("Quantidade de números:", quantidade);
    console.log("Soma:", soma);
    console.log("Média:", media);
    console.log("Maior número:", maior);
    console.log("Menor número:", menor);
}
