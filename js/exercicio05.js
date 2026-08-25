const entrada = prompt("Digite sua idade:");

if (entrada === "" || entrada === null || isNaN(entrada) || Number(entrada) < 0) {
    console.log("Idade inválida");
} else {
    const idade = Number(entrada);

    if (idade < 16) {
        console.log("Não pode votar");
    } else if (idade === 16 || idade === 17) {
        console.log("Voto opcional");
    } else {
        console.log("Voto obrigatório");
    }
}