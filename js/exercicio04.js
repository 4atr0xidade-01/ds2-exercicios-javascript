const idade = prompt("Qual é a sua idade?");

console.log("Valor original:", idade);
console.log("Tipo original:", typeof idade);

const idadeNumero = Number(idade);

console.log("Valor convertido:", idadeNumero);
console.log("Tipo convertido:", typeof idadeNumero);

const idadeFutura = idadeNumero + 5;

console.log("Daqui a 5 anos você terá:", idadeFutura, "anos.");