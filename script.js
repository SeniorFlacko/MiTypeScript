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
var Empleado = (function () {
    function Empleado(trabajador) {
        this.id = trabajador.id;
        this.nombre = trabajador.nombre;
    }
    Empleado.prototype.getEmpleado = function () {
        return { id: this.id, nombre: this.nombre };
    };
    return Empleado;
}());
var pepito_perez = {
    id: 1,
    nombre: "Pepito"
};
var este_empleado = new Empleado(pepito_perez);
console.log(este_empleado.id);
console.log(este_empleado.nombre);
console.log("Este empleado es " + este_empleado.getEmpleado().id + " " + este_empleado.getEmpleado().nombre);
