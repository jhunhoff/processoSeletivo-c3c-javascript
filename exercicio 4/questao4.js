let tamanhoArray = document.getElementById("tamanhoArray");
let btnFormar = document.getElementById("construirArray");
let resposta = document.getElementById("resposta");
let tamanho = Number.parseInt(tamanhoArray.value)

btnFormar.onclick = () => construirArray(tamanhoArray.value);

function construirArray(tamanho) {
   /* Array foi declarado dentro da função pra ter escopo do bloco da função e ser reinicializado toda vez que o botão for clicado
    se for declarado fora da função, teria que esvaziar o array toda vez que clicasse no botão para não dar problema caso o segundo tamanho de array
    desejado seja menor que o primeiro
   */
    let luidyArray = []; 
    for (i = 1; i <= tamanho; i++) {
        if (i % 5 == 0 && i % 9 == 0) {
            luidyArray[i-1] = "LuidyMoura";
        } else if (i % 5 == 0) {
            luidyArray[i-1] = "Luidy";
        } else if (i % 9 == 0) {
            luidyArray[i-1] = "Moura";
        } else {
            luidyArray[i-1] = i;
        }
    }
    resposta.innerText = luidyArray;
}