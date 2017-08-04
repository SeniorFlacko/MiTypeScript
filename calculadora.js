"use strict";
var Calculadora = (function () {
    function Calculadora(numero1, numero2) {
        var _this = this;
        this.suma = function () { return _this.numero1 + _this.numero2; };
        this.resta = function () { return _this.numero1 - _this.numero2; };
        this.multiplicacion = function () { return _this.numero1 * _this.numero2; };
        this.division = function () { return _this.numero1 / _this.numero2; };
        this.numero1 = numero1;
        this.numero2 = numero2;
    }
    return Calculadora;
}());
var casio = new Calculadora(4, 3);
console.log(casio.suma());
console.log(casio.resta());
console.log(casio.multiplicacion());
console.log(casio.division());
