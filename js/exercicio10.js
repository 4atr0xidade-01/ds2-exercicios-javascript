let tentativas = 0;
let acesso = false;

while (tentativas < 3){
    const usuario = prompt("Digite o usuário:");
    const senha = prompt("Digite a senha;");

    tentativas++;

    if (usuario === "admin" && senha === "1234") {
        console.log("Acesso permitido");
        acesso = true;
        break;
    } else {
        const restantes = 3 - tentativas;

        if (restantes > 0) {
            console.log(`Acesso negado. Tentativas restantes: ${restantes}`);
        }
    }
}
if (!acesso) {
    console.log("Acesso bloqueado");
}