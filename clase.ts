interface iavenger{
    nombre:string,
    equipo:string,
    nombreReal:string,
    puedePelear:boolean,
    peleasGanadas:number
}

export class Avenger{
    nombre:string
    equipo:string
    nombreReal:string

    puedePelear:boolean
    peleasGanadas:number

    constructor(av:iavenger){
        let {nombre,equipo,nombreReal,puedePelear,peleasGanadas} = av
        this.nombre = nombre
        this.equipo = equipo
        this.nombreReal = nombreReal
        this.puedePelear = puedePelear
        this.peleasGanadas = peleasGanadas
    }
}

let javier:iavenger = {
    nombre:"Javier",
    equipo:"Equipo 1",
    nombreReal:"El Javs",
    puedePelear:true,
    peleasGanadas:90
}

let antman:Avenger = new Avenger(javier)
console.log(antman)