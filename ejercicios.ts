let nombre_ = "Ricardo Tapia"
let edad = 23;

const PERSONAJE = {
    nombre: nombre_,
    edad: edad
}

interface bruce{
    nombre:string
    artesMarciales: string[]
}

let resultadoDoble = (a:number,b:number) => {return (a+b)*2}


function getAvenger( nombre:string, poder?:string, arma:string="Arco" ){
  let mensaje;
  if( poder ){
     mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
  }else{
     mensaje = nombre + " tiene un " + poder
  }
}