// var nombre = "Javier"
// var edad = 22
// console.log(nombre)
// console.log(edad)

// let nombre = "javier",
//     apellido = "alexis"
// print(`${nombre} ${apellido}`)

// let array = [1, 2, 3, 4, 5]

// array.push(8)
// array.shift()
// array = array.slice(1, 4)
// array.reverse()

// console.log(array)

// const persona = {
//     nombre: "Javier",
//     apellido: "Mendoza",
//     edad: 22,
//     trabajo: false,
//     hogar: {
//         ciudad: "Poza Rica",
//         Pais: "Mexico",
//         Estado: "Veracruz"
//     }
// }

// console.log(persona)

// const nombre = "Javier",
//     pasatiempo = "Programador"


// const mensage = document.getElementById("mensage")

// html = `<ul>
//         <li>Nombre : ${nombre}</li>
//         <li>Pasatiempo : ${pasatiempo}</li>
//       </ul>`

// mensage.innerHTML = html;
// console.log(`Nombre : ${nombre}\nTrabajo : ${pasatiempo}`)

// saludar()

// function saludar() {
//     console.log("Hola")
// }


// class Persona {

//     constructor(nombre, apellido, edad) {
//         this.nombre = nombre;
//         this.apellido = apellido;
//         this.edad = edad
//     }

//     getNacimiento() {
//         return new Date().getFullYear() - this.edad;
//     }
// }

// let persona = new Persona("Javier Alexis", "Mendoza Garcia", 22);

// console.log(`Persona : ${persona.nombre} nacio ${persona.getNacimiento()}`)


// const Persona = {
//     nombre: "Javier",
//     apellido: "Mendoza",
//     edad: 22,
//     getNacimiento: function() {
//         return new Date().getFullYear() - this.edad;
//     }
// }




// console.log(Persona.getNacimiento())

/** Scope **/
// console.log("---------Var---------")
// var musica = "Rock";
// if (musica === "Rock") {
//     var musica = "Pop";
//     console.log(`Cancion adentro del if ${musica}`)
// }
// console.log(`Cancion afuera del if ${musica}`)


// console.log("---------Let---------")
// let cancion = "Rock";
// if (cancion === "Rock") {
//     let cancion = "Pop";
//     console.log(`Cancion adentro del if ${cancion}`)
// }
// console.log(`Cancion afuera del if ${cancion}`)

/*** fetch ***/
descargarUsuarios(1000)

function descargarUsuarios(cantidad) {
    const api = `https://api.randomuser.me/?nat=MX&&results=${cantidad}`;
    fetch(api)
        .then(respuesta => respuesta.json())
        .then(datos => imprimirHTML(datos.results));
}

function imprimirHTML(datos) {
    datos.forEach(usuario => {
        const li = document.createElement('li');
        const { name: { first }, picture: { medium }, nat } = usuario;

        li.innerHTML = `
            <p>Nombre : ${first}</p>
            <p>Pais : ${nat}</p>
            Imagen : <img src="${medium}">
        
        `;
        document.querySelector("#app").append(li)
    })
}