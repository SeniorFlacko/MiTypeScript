class Saludo{
    saludo:string
    nombre:string

    constructor(nombre:string){
        this.nombre=nombre
    }
    saludoFormal(){
        this.saludo = "Buenos Dias, Mucho Gusto "
        return this.saludo + this.nombre
    }

    saludoCasual(){
        this.saludo = "Hola! "
        return this.saludo + this.nombre
    }

    setNombre(nombre:string){
        this.nombre=nombre
    }
}


var saludin = new Saludo("Brandon")
console.log(saludin.saludoCasual())
saludin.setNombre("Cristian")
console.log( saludin.saludoFormal())
console.log( saludin.saludoFormal())

interface UnEmpleado{
    id:number
    nombre:string
}
class Empleado{
    nombre:string
    id:number
    constructor(trabajador:UnEmpleado){
        this.id = trabajador.id
        this.nombre= trabajador.nombre   
    }

    getEmpleado():UnEmpleado{
        return {id:this.id,nombre:this.nombre}
    }
}

var pepito_perez:UnEmpleado ={
    id:1,
    nombre:"Pepito"
}

var este_empleado = new Empleado(pepito_perez)
console.log(este_empleado.id)
console.log(este_empleado.nombre)
console.log("Este empleado es " + este_empleado.getEmpleado().id + " " +este_empleado.getEmpleado().nombre)

console.log(este_empleado.nombre)
console.log(este_empleado.nombre)