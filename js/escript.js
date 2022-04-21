var bt1 = document.getElementById("cript_bt");
bt1.addEventListener("click", criptografar);
var bt2 = document.getElementById("decript_bt");
bt2.addEventListener("click", descriptografar);
var txtEntrada = document.getElementById("texto_de_entrada");
var txtSaida = document.getElementById("t_result");

function criptografar() {
    var texto = txtEntrada.value;
    var result = texto.toLowerCase();
    document.getElementById("t_result").innerHTML = result.replace(/a/g, "ai").replace(/e/g, "enter").replace(/i/g, "imes").replace(/o/g, "ober").replace(/u/g, "ufat");
    result = "";
}

function descriptografar() {
    var texto = txtEntrada.value;
    var result = texto;
    document.getElementById("t_result").innerHTML = result.replace(/ai/g, "a").replace(/enter/g, "e").replace(/imes/g, "i").replace(/ober/g, "o").replace(/ufat/g, "u");
    result = "";
   
}