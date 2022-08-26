let coeficienteA = document.getElementById("coeficiente1");
let coeficienteB = document.getElementById("coeficiente2");
let coeficienteC = document.getElementById("coeficiente3");
let btnCalcular = document.getElementById("calcRaizes");
let resposta = document.getElementById("resposta");
let resposta2 = document.getElementById("resposta2");
let raizes = [];

btnCalcular.onclick = () => calcularRaizes(coeficienteA.value, coeficienteB.value, coeficienteC.value);

function calcularRaizes(coefA, coefB, coefC) {
    if (coefA != "" && coefB != "" && coefC != "") {
        delta = (coefB * coefB) - (4 * coefA * coefC);
        if (delta < 0) {
            resposta.innerHTML = "Delta é negativo: não possui raízes reais."
        } else {
            raizes[0] = (-coefB + Math.sqrt(delta)) / (2.0 * coefA);
            raizes[1] = (-coefB - Math.sqrt(delta)) / (2.0 * coefA);
            if (raizes[0] === raizes[1]) {
                resposta.innerHTML = `A raiz da função é ${raizes[0]}.`
            } else {
                resposta.innerHTML = `As raízes da função são ${raizes[0]} e ${raizes[1]}.`
            }
        }
    } else {
        resposta.innerHTML = `Digite valores para todos os coeficientes.`
    }

}


