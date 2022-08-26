let notaAluno = document.getElementById("notaAluno");
let btnAprovacao = document.getElementById("verificarAprovacao");
let resposta = document.getElementById("resposta");

btnAprovacao.onclick = () => analisarAprovacao(notaAluno.value);

function analisarAprovacao(notaAluno) {
    notaFloat = Number.parseFloat(notaAluno);
    if (notaFloat < 0 || notaFloat > 100 || isNaN(notaFloat)) {
        resposta.innerHTML = "Digite uma nota válida no intervalo de 0 a 100.";
        resposta.style = "color: orange";
    } else {
        if (notaFloat < 38) {
            resposta.innerHTML = `O aluno foi reprovado e a nota foi mantida em ${notaFloat}.`;
            resposta.style = "color: red";
        } else if ((notaFloat + (5 - (notaFloat % 5))) - notaFloat < 3) {
            notaArredondada = notaFloat + (5 - (notaFloat % 5));
            resposta.innerHTML = `O aluno foi aprovado e a nota foi arredondada para ${notaArredondada}.`;
            resposta.style = "color: green";
        } else {
            resposta.innerHTML = `O aluno foi aprovado e a nota foi mantida em ${notaFloat}.`;
            resposta.style = "color: green";
        }
    }

}