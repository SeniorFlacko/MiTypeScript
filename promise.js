"use strict";
var promesa = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Promesa Terminada");
        resolve();
    }, 5000);
});
promesa.then(function () {
    console.log("Exito");
}, function () {
    console.log("No exito");
});
