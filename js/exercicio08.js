const numero = Number(prompt("Digite um número:"));

if (!Number.isInteger(numero)) {
    console.log("Erro: informe um número inteiro válido.");   
}
else {
    for(let i = 1; i <=10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}