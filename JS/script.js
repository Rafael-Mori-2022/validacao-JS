function insere(n) {
    var numero = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = numero + n;
}

function limpar() {
    document.getElementById('result').innerHTML = "";
}

function backspace() {
    var resultado = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = resultado.substring(0, resultado.length-1);
}

function calcular() {
    var resultado = document.getElementById('result').innerHTML;
    
    if(resultado) {
        document.getElementById('result').innerHTML = eval(resultado);
    } else {
        document.getElementById('result').innerHTML = "Operacao invalida";
    }
}

function altera() {
    var resultado = document.getElementById('result');
    var String = resultado.innerHTML;

    if (String !== "") {
        if (String.charAt(0) === '-') {
            resultado.innerHTML = String.substring(1);
        } else {
            resultado.innerHTML = '-' + String;
        }
    }
}