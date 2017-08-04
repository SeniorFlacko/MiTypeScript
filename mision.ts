interface xmen{
    nombre:string
}

function enviarMision(xmen:xmen){
    console.log("Enviando a : " +xmen.nombre);
}


let eljavs:xmen = {
    nombre:"Javier"
}

enviarMision(eljavs)