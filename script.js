var primerNumero = false;//declaracion de variables iniciales en falso
var segundoNumero = false;
var signo = false;
var pulsoSigno = false;//detecta cuando se termino de ingresar la primer cantidad
var signoOcupado = false;//solo permite introducir un operador a la vez

function numeroNuevo(idElemento) {//captura los numeros
  if (pulsoSigno) {//se captura el segundo numero
    signoOcupado = true;
    if (segundoNumero == false) {
      document.getElementById("resultado").value = idElemento;//escribe la cantidad      
    } else {
      document.getElementById("resultado").value += idElemento;//concatena la cantidad
    }
    segundoNumero = document.getElementById("resultado").value;//asigna valor
  } else {//se captura el primer numero
    document.getElementById("resultado").value += idElemento;//concatena la cantidad
    primerNumero = document.getElementById("resultado").value;//asigna valor
  }
}

function operacion(tipoSigno) {//analiza que operacion se va a realizar
  if (!signoOcupado) {//solo acepta 2 cantidades
    pulsoSigno = true;//la primer cantidad llego a su fin
    document.getElementById("resultado").value = tipoSigno;//se muestra el signo
    signo = tipoSigno;//se guarda el signo
  } else {
    alert("debe pulsar antes igual");//alerta
  }
}

function resultados() {//realiza la operacion y muestra el resultado
  primerNumero = parseFloat(primerNumero);//se asigna el numero como flotante
  segundoNumero = parseFloat(segundoNumero);//se asigna el numero como flotante
  if (!primerNumero || !segundoNumero) {//verifica que no falten cantidades
    //alert("Introduzca dos cantidades");
    if (signo == "!") {//operacion suma
      var total = 1; 
	for (i=1; i<=primerNumero; i++) {
		total = total * i; 
	}
  document.getElementById("resultado").value = total;//se imprime el total
    } 
  } else {
    let total;//variable local
    if (signo == "+") {//operacion suma
      total = primerNumero + segundoNumero;
    } else if (signo == "-") {//operacion resta
      total = primerNumero - segundoNumero;
    } else if (signo == "*") {//operacion multiplicacion
      total = primerNumero * segundoNumero;
    } else if (signo == "/") {//operacion division
      total = primerNumero / segundoNumero;
    }
    document.getElementById("resultado").value = total;//se imprime el total
    primerNumero = total;//se guarda el total como primer numero
    segundoNumero = false;//se resetean  las demas variables
    signo = pulsoSigno = signoOcupado = false;
  }
}

function borrarC() {//se resetean todas las variables
  document.getElementById("resultado").value = "";
  primerNumero = segundoNumero = false;
  signo = pulsoSigno = signoOcupado = false;
}

function retroceso() {//borra el ultimo caracter
  let actual = document.getElementById("resultado").value;//obtiene el valor que esta en resultado
  document.getElementById("resultado").value 
  = actual.slice(0,actual.length - 1);//le asigna el nuevo valor 
  if (segundoNumero) {//se verfiia si el segundo valor tienen valor
    segundoNumero = document.getElementById("resultado").value;//si no es false es porque ya tiene valores
  } else {
    primerNumero = document.getElementById("resultado").value;//si es falso aun no tiene no se esta capturando la segunda cantidad
  }
}