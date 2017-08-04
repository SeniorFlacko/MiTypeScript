"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Avenger = (function () {
    function Avenger(av) {
        var nombre = av.nombre, equipo = av.equipo, nombreReal = av.nombreReal, puedePelear = av.puedePelear, peleasGanadas = av.peleasGanadas;
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
        this.puedePelear = puedePelear;
        this.peleasGanadas = peleasGanadas;
    }
    return Avenger;
}());
exports.Avenger = Avenger;
var javier = {
    nombre: "Javier",
    equipo: "Equipo 1",
    nombreReal: "El Javs",
    puedePelear: true,
    peleasGanadas: 90
};
var antman = new Avenger(javier);
console.log(antman);
