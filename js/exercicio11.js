function somar(numero1, numero2) {
    return numero1 + numero2;
}

function calcularMedia(nota1, nota2) {
    return somar(nota1, nota2) / 2;
}

function classificarMedia(media) {
    if (media >= 7) {
        return "Aprovado";
    } else if (media >= 5) {
        return "Recuperação";
    } else {
        return "Reprovado";
    }
}

function criarSaudacao(nome) {
    return `Olá, ${nome}!`;
}

const nome = prompt("Digite o nome do aluno:");
const N1 = Number(prompt("Digite a primeira nota:"));
const N2 = Number(prompt("Digite a segunda nota:"));

if (N1 < 0 || N1 > 10 || N2 < 0 || N2 > 10) {
    console.log("Nota inválida. As notas devem estar entre 0 e 10.");
} else {
    const resultadoSoma = somar(N1, N2);
    const media = calcularMedia(N1, N2);
    const situacao = classificarMedia(media);
    const saudacao = criarSaudacao(nome);

    console.log(saudacao);
    console.log(`Nome: ${nome}`);
    console.log(`Nota1: ${N1}`);
    console.log(`Nota2: ${N2}`);
    console.log(`Soma: ${resultadoSoma}`);
    console.log(`Média: ${media.toFixed(1)}`);
    console.log(`Situação: ${situacao}`);
}

