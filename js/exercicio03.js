
const nome = prompt("Qual é o seu nome?");
let idade = prompt("Qual é a sua idade?");
const curso = prompt("Qual é o seu curso?");
const cidade = prompt("Qual é a sua cidade?");

// Solução 1
console.log("Olá, meu nome é " + nome + ", tenho " + idade + " anos, moro em " + cidade + " e estou cursando " + curso + ".");

// Solução 2
console.log(`Olá, meu nome é ${nome}, tenho ${idade} anos, moro em ${cidade} e estou cursando ${curso}.`);