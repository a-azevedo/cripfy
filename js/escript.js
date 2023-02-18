const bt1 = document.getElementById("cript_bt");
bt1.addEventListener("click", criptografar);
const bt2 = document.getElementById("decript_bt");
bt2.addEventListener("click", descriptografar);
const bt3 = document.getElementById("bt_copy").style.value = "none";
var txtEntrada = document.getElementById("texto_de_entrada");
var txtSaida = document.getElementById("t_result").value;


function criptografar() {    
    var texto = txtEntrada.value;
    var result = texto.toLowerCase();        
    /* document.getElementById("t_result").innerHTML */txtSaida = result.replaceAll(/e/gi, "enter").replaceAll(/i/gi, "imes").replaceAll(/a/gi, "ai").replaceAll(/o/gi, "ober").replaceAll(/u/gi, "ufat");
    document.getElementById("t_result").innerHTML = txtSaida;
    document.getElementById("bt_copy").style.display = "block";
          
}

function descriptografar() {
    var texto = txtEntrada.value;
    var result = texto;
    document.getElementById("t_result").innerHTML = result.replace(/ai/gi, "a").replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ober/gi, "o").replace(/ufat/gi, "u");    
   
}