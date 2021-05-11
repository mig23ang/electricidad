$(document).ready(function () {

  $("#boton1").on("click", function () {

    $("#juego").removeClass("juego").addClass("mostrar-juego");
    $("#boton1").remove();

  });

  $("#boton1").on("click", function () {

    var aPalabras = ["conductividad","voltio", "ohmnios","amperios","sigma","resistividad", "resistencia"];

    var sPalabraAdivinar;

    function PalabraAdivinar() {
      var i = Math.floor((Math.random() * (aPalabras.length)) + 0);
      sPalabraAdivinar = aPalabras[i];
      sPalabraAdivinar = sPalabraAdivinar.toUpperCase();
      // alert(sPalabraAdivinar);
    }

    PalabraAdivinar();
    var aResultado = sPalabraAdivinar.split("");
    var prueba = ""
    for (var j = 0; j < aResultado.length; j++) {
      prueba = prueba + aResultado[j];
      document.getElementById("palabra").innerHTML = prueba;

    }

    // Ha escogido la palabra con la que jugar.

    function CrearPalabra() {
      var sRayas = "";
      for (var j = 1; j <= sPalabraAdivinar.length; j++) {
        sRayas = sRayas + "_ ";
      }
      document.getElementById("palabra").innerHTML = sRayas;
    }

    CrearPalabra();
    // Crea el tablero de juego _ _ _ _ _ (Con tantasrayas como letras sean necesarias)

    var aAbecedario = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x","_", "y", "z", " ", "=", "/"];
    var sLetra;

    // Recogeremos la letra del input cuando se le de al boton go!
    document.getElementById("boton").addEventListener("click", RecogerLetra);

    function RecogerLetra() {
      sLetra = document.getElementById("letra").value;
      sLetra = sLetra.toUpperCase();
      //Comparamos si la letra está en el abecedario o es un caracter no valido
      //Solo entrara a jugar si la letra pertenece al abecedario.
      var bCorrecto = false;
      for (var j = 0; j <= (aAbecedario.length) - 1; j++) {
        if (sLetra == aAbecedario[j].toUpperCase()) {
          bCorrecto = true;
        }
      }
      if (!bCorrecto) {
        alert("Caracter incorrecto");
      } else {
        ComprobarLetra(sLetra);
      }
    }

    //Empezamos a jugar:
    var iContadorAhorcado = -1;
    //AHORCADO tiene 8 letras habrá 8 intentos
    var aAhorcado = ["A", "H", "O", "R", "C", "A", "D", "O"];
    var sAhorcado = "";
    var aLetrasUser = [""];
    var aLetrasUserA = [""];
    var aPalabraAdivinar = ["_"]
    for (var j = 0; j <= sPalabraAdivinar.length; j++) {
      aPalabraAdivinar[j] = ["_"];
    }
    var iContadorAciertos = sPalabraAdivinar.length;

    function ComprobarLetra(sLetra) {

      var n = sPalabraAdivinar.search(sLetra);

      //Programacion de los fallos del usuario:
      if (n == -1) {
        for (var j = 0; j < aLetrasUser.length; j++) {
          if (sLetra == aLetrasUser[j]) {
            alert("Letra Repetida");
            var bLetraRepetida = true;
            break;
          }
        }
        if (!bLetraRepetida) {
          aLetrasUser[aLetrasUser.length] = sLetra;
          var sLetrasUser = "";
          for (var j = 1; j < aLetrasUser.length; j++) {
            sLetrasUser = sLetrasUser + aLetrasUser[j] + "   ";
          }
          iContadorAhorcado += 1;
          sAhorcado = sAhorcado + aAhorcado[iContadorAhorcado];
          document.getElementById("ahorcado").innerHTML = sAhorcado;
          document.getElementById("letras_incorrectas").innerHTML = sLetrasUser;
          if (iContadorAhorcado == 7) {
            alert("¡Has Perdido!");
            FinDelJuego();
          }
        }
      }

      //Programación de los aciertos:
      else {
        var aResultado = sPalabraAdivinar.split("");
        for (var j = 0; j < aLetrasUserA.length; j++) {
          if (sLetra == aLetrasUserA[j]) {
            alert("Letra Repetida");
            var bLetraRepetidaA = true;
            break;
          }
        }
        if (!bLetraRepetidaA) {
          aLetrasUserA[aLetrasUserA.length] = sLetra;
          for (var j = 0; j < aResultado.length; j++) {
            if (sLetra == aResultado[j]) {
              aPalabraAdivinar[j + 1] = sLetra;
              iContadorAciertos--;
            }
          }
          var sLetrasUserA = "";
          for (var j = 1; j < aPalabraAdivinar.length; j++) {
            sLetrasUserA = sLetrasUserA + aPalabraAdivinar[j] + " ";
          }
          document.getElementById("palabra").innerHTML = sLetrasUserA;

          if (iContadorAciertos === 0) {
            alert("¡Has Ganado!");
            FinDelJuego();
          }
        }
      }

    }

    function FinDelJuego() {
      location.reload(true);
    }

  });

});
