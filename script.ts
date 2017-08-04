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
}


var saludin = new Saludo("Brandon")


