class Reverencia{
    quien:string
    constructor(quien:string){
        this.quien=quien
    }

    hacerReverencia(){
        

        return `
                Reina de los Ándalos y 
                los primeros hombres. 
                Del gran mar de hierba, 
                rompedora de cadenas y madre de dragones...


                ${ this.quien } !!!`
    }
}

let simple_saludo = new Reverencia('KHALEESI') 
console.log(simple_saludo.hacerReverencia())
