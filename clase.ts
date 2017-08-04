interface aven{
    nombre:string,
    equipo:string,
    nombreReal:string,
    puedePelear:boolean,
    peleasGanadas:number
}

class Avenger{
    nombre:string = "Antman"
    equipo:string
    nombreReal:string

    puedePelear:boolean
    peleasGanadas:number

    constructor(av:aven){
        let {nombre,equipo,nombreReal,puedePelear,peleasGanadas} = av
    }
}

let javier = {
    nombre:"Javier",
    equipo:"Equipo 1",
    nombreReal:"El Javs",
    puedePelear:true,
    peleasGanadas:90
}

let antman:Avenger = new Avenger(javier)
console.log(antman)