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
