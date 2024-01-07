let valor = 0
let resultado

function eleva(num) {

    valor = Math.pow(valor, 2)
    document.getElementById('visor').innerHTML = valor;
    console.log(valor)
}
function raiz(num) {

    valor = Math.sqrt(valor, 2)
    document.getElementById('visor').innerHTML = valor;
    console.log(valor)
}
function botao(num) {

    valor = document.getElementById('visor').innerHTML += num;
    console.log(valor)
    document.getElementById('visor').innerHTML = valor;

}

function reseta() {

    document.getElementById('visor').innerHTML = "";
}

function calculo() {

    resultado = eval(valor);

    document.getElementById('visor').innerHTML = resultado

    valor = resultado
}
function inverso(){
    valor = valor * -1
    document.getElementById('visor').innerHTML = valor;
    console.log(valor)
}
