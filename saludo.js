"use strict";
var Reverencia = (function () {
    function Reverencia(quien) {
        this.quien = quien;
    }
    Reverencia.prototype.hacerReverencia = function () {
        return "\n                Reina de los \u00C1ndalos y \n                los primeros hombres. \n                Del gran mar de hierba, \n                rompedora de cadenas y madre de dragones...\n\n\n                " + this.quien + " !!!";
    };
    return Reverencia;
}());
var simple_saludo = new Reverencia('KHALEESI');
console.log(simple_saludo.hacerReverencia());
