class Reverencia{

    public nombre:string
    constructor(nombre:string){
        this.nombre=nombre
    }

    hacerReverencia():string{
        return `
                Reina de los Ándalos y 
                los primeros hombres. 
                Del gran mar de hierba, 
                rompedora de cadenas y madre de dragones...


                ${ this.nombre } !!!`
    }
}

let simple_saludo = new Reverencia('KHALEESI') 
console.log(simple_saludo.hacerReverencia())
