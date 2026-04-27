// recuperando o formulário
// escutador para o evento submit - Ele ficará escutando quando o evento for disparado 
// qndo for disparado, executar uma função
document.querySelector("#form-notas").addEventListener("submit", (e) => {
    // cancelar o envio
    e.preventDefault();

    //pegando cada informação digitada e armazenando em variáveis
    const nomeAluno = document.querySelector("#nome-aluno").value;
    console.log(nomeAluno);

    const disciplina = document.querySelector("#disciplina").value;
    console.log(disciplina);

    const nota1 = Number(document.querySelector("#nota1").value);
    console.log(nota1);

    const nota2 = Number(document.querySelector("#nota2").value);
    console.log(nota2);

    const nota3 = Number(document.querySelector("#nota3").value);
    console.log(nota3);

    const nota4 = Number(document.querySelector("#nota4").value);
    console.log(nota4);

    //calculando a média
    const media = (nota1 + nota2 + nota3 + nota4) / 4;
    console.log(media);
})