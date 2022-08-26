let coeficienteA = document.getElementById("coeficiente1");
let coeficienteB = document.getElementById("coeficiente2");
let coeficienteC = document.getElementById("coeficiente3");
let btnCalcular = document.getElementById("calcRaizes");
let resposta = document.getElementById("resposta");
let resposta2 = document.getElementById("resposta2");
let raizes = [];

btnCalcular.onclick = () => calcularRaizes(coeficienteA.value, coeficienteB.value, coeficienteC.value);

function calcularRaizes(coefA, coefB, coefC) {
    if (coefA != "" && coefB != "" && coefC != "" && coefA != 0) { // delta só é calculado caso os valores tenham sido preenchidos e o coeficiente A seja diferente de 0
        delta = (coefB * coefB) - (4 * coefA * coefC);
        if (delta < 0) {
            resposta.innerHTML = "Delta é negativo: não possui raízes reais."
        } else { // calculado as raizes indistintamente de serem iguais ou não
            raizes[0] = (-coefB + Math.sqrt(delta)) / (2.0 * coefA);
            raizes[1] = (-coefB - Math.sqrt(delta)) / (2.0 * coefA);
            if (raizes[0] === raizes[1]) { // se forem iguais, é mostrado apenas uma vez
                resposta.innerHTML = `A raiz da função é ${raizes[0]}.`
            } else { // se forem diferentes são mostradas as duas raizes
                resposta.innerHTML = `As raízes da função são ${raizes[0]} e ${raizes[1]}.`
            }
        }
    } else if (coefA == 0) { // se o coeficiente A for 0, não é uma equação do segundo grau, e a raiz apareceria como NaN
        resposta.innerHTML = `O valor do coeficiente A não pode ser 0.`
    } else { // se qualquer um dos coeficientes não for preenchido, é solicitado para que o faça
        resposta.innerHTML = `Digite valores para todos os coeficientes.`
    }
}


