class Calculadora{
    numero1:number
    numero2:number

    constructor(numero1:number,numero2:number){
        this.numero1=numero1
        this.numero2=numero2
    }

    suma = () => {return this.numero1+this.numero2}
    resta = () => {return this.numero1-this.numero2}
    multiplicacion = () => {return this.numero1*this.numero2}
    division = () => {return this.numero1/this.numero2}
}


let casio = new Calculadora(4,3)
console.log(casio.suma())
console.log(casio.resta())
console.log(casio.multiplicacion())
console.log(casio.division())