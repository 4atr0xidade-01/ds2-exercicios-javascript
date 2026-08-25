function calcularMedia(N1,N2) {
    return (N1 + N2) / 2;
}

function classificarSituacao(media){
    if (media >=7) {
        return "Aprovado";
    } else if (media >=5){
        return "Recuperação";
    } else {
        return "Reprovado";
    }
}

let continuar = "sim";
let quantidadeAlunos = 0;

while (continuar.toLowerCase() === "sim") {

    const nome = prompt("Digite o nome do aluno:");
    const curso = prompt("Digite o nome do curso:");
    const N1 = Number(prompt("Digite a primeira nota:"));
    const N2 = Number(prompt("Digite a primeira nota:"));

    if (isNaN(N1) || isNaN(N2)|| N1 < 0 || N1 > 10 || N2 < 0 || N2 > 10)
    {console.log("Erro: as notas devem ser números entre 0 e 10.");

    } else{ 
        const media = calcularMedia (N1,N2);
        const situacao = classificarSituacao (media);

        quantidadeAlunos++;
        console.log("================================"); 
        console.log(" FICHA ACADÊMICA"); 
        console.log("================================"); 
        console.log(`Aluno: ${nome}`);
        console.log(`Curso: ${curso}`); 
        console.log(`Nota 1: ${N1}`); 
        console.log(`Nota 2: ${N2}`); 
        console.log(`Média: ${media.toFixed(1)}`); 
        console.log(`Situação: ${situacao}`); 
        console.log("================================"); 
    } 
    continuar = prompt("Deseja cadastrar outro aluno? (sim/não)");
 } console.log(`Total de alunos cadastrados: ${quantidadeAlunos}`);