var Saludo = (function () {
    function Saludo(nombre) {
        this.nombre = nombre;
    }
    Saludo.prototype.saludoFormal = function () {
        this.saludo = "Buenos Dias, Mucho Gusto ";
        return this.saludo + this.nombre;
    };
    Saludo.prototype.saludoCasual = function () {
        this.saludo = "Hola! ";
        return this.saludo + this.nombre;
    };
    Saludo.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    return Saludo;
}());
var saludin = new Saludo("Brandon");
console.log(saludin.saludoCasual());
saludin.setNombre("Cristian");
console.log(saludin.saludoFormal());
console.log(saludin.saludoFormal());
