"use strict";
var flecha = function (a) { return a; };
var UnaClase = (function () {
    function UnaClase() {
        this.funcion_chevere = function (a) { return a; };
    }
    return UnaClase;
}());
console.log(flecha("Este es el string"));
var objeto = new UnaClase();
console.log(objeto.funcion_chevere("Holi crayoli"));
console.log(objeto.funcion_chevere("Holo crayoli"));
