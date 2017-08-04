let flecha = (a:string) => a;



class UnaClase{
    funcion_chevere = (a:string) => a;
}
console.log(flecha("Este es el string"))


let objeto = new UnaClase()

console.log(objeto.funcion_chevere("Holi crayoli"))

console.log(objeto.funcion_chevere("Holo crayoli"))