"use strict";
var nombre_ = "Ricardo Tapia";
var edad = 23;
var PERSONAJE = {
    nombre: nombre_,
    edad: edad
};
var resultadoDoble = function (a, b) { return (a + b) * 2; };
function getAvenger(nombre, poder, arma) {
    if (arma === void 0) { arma = "Arco"; }
    var mensaje;
    if (poder) {
        mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
    }
    else {
        mensaje = nombre + " tiene un " + poder;
    }
}
