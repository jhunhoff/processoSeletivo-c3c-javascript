let lado1 = document.getElementById("lado1");
let lado2 = document.getElementById("lado2");
let lado3 = document.getElementById("lado3");
let botaoVerificar = document.getElementById("btnverificar");
let resposta = document.getElementById("resposta");

botaoVerificar.onclick = () => verificarTriangulo(lado1.value, lado2.value, lado3.value);

function verificarTriangulo(lado1, lado2, lado3) {
    if (lado1 == "" || lado2 == "" || lado3 == "") { // se qualquer um dos lados não tiver preenchido, é solicitado que o faça
        resposta.innerHTML = "Digite valores para os tamanhos de todos os lados.";
        resposta.style = "color: red";
    } else if (lado1 > 0 && lado2 > 0 && lado3 > 0) { // só serão mostrado o tipo de triângulo caso os lados sejam positivos e não nulos
        if (lado1 == lado2 && lado2 == lado3) {
            resposta.innerHTML = "O triângulo é equilátero.";
            resposta.style = "color: green";
        } else if (lado1 != lado2 && lado2 != lado3 && lado1 != lado3) {
            resposta.innerHTML = "O triângulo é escaleno.";
            resposta.style = "color: green";
        } else {
            resposta.innerHTML = "O triângulo é isósceles.";
            resposta.style = "color: green";
        }
    } else { // se qualquer um dos lados for menor que 0, é pedido para que corrija
        resposta.innerHTML = "Os tamanhos do triângulo devem ser maiores do que 0.";
        resposta.style = "color: red";
    }
}


