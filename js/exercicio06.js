const nome = prompt("Digite o nome do aluno:");
const N1 = Number(prompt("Digite a primeira nota:"));
const N2 = Number(prompt("Digite a segunda nota:"));

if ( N1 < 0 || N1 > 10 || N2 < 0 || N2 > 10) { console.log("Nota inválida. As notas devem estar entre 0 e 10.");}  else {
    const media = (N1 + N2) / 2;
    
    console.log(`Nome: ${nome}`);
    console.log(`Nota1: ${N1}`);
    console.log(`Nota2: ${N2}`);
    console.log(`Média: ${media.toFixed(1)}`);

    if (media>=7){
        console.log("Situação: Aprovado.");
    } 
    else if ( media >=5) {
        console.log("Situação: Recuperação.");
    } 
    else {
        console.log("Situação: Reprovado.");
    }
}