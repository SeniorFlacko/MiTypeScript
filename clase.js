"use strict";
var Avenger = (function () {
    function Avenger(av) {
        this.nombre = "Antman";
        var nombre = av.nombre, equipo = av.equipo, nombreReal = av.nombreReal, puedePelear = av.puedePelear, peleasGanadas = av.peleasGanadas;
    }
    return Avenger;
}());
var javier = {
    nombre: "Javier",
    equipo: "Equipo 1",
    nombreReal: "El Javs",
    puedePelear: true,
    peleasGanadas: 90
};
var antman = new Avenger(javier);
console.log(antman);
