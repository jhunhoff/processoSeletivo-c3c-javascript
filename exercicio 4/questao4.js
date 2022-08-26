let tamanhoArray = document.getElementById("tamanhoArray");
let btnFormar = document.getElementById("construirArray");
let resposta = document.getElementById("resposta");
let luidyArray = [];
let tamanho = Number.parseInt(tamanhoArray.value)

btnFormar.onclick = () => construirArray(tamanhoArray.value);

function construirArray(tamanho) {
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