const usuario = prompt("Digite o usuário:");
const senha = prompt("Digite a senha:");

// "=" é usado para atribuição de valores, enquanto "===" compara
// valores e também verifica se eles possuem o mesmo tipo.

if (usuario === "admin" && senha === "1234"){
    console.log("Acesso permitido");
} else {
    console.log("Acesso negado.");
}