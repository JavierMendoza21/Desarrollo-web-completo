(function() {
    'use strict';
    document.addEventListener('DOMContentLoaded', function() {

        /*let logo = document.getElementById("logo")
        let enlaces = document.getElementsByTagName("a")
        console.log(enlaces)
        for (let i = 0; i < enlaces.length; i++) {
            enlaces[i].setAttribute("target", "_blank")
        }

        let enlaceSidebar = document.getElementById("sidebar").getElementsByTagName("a")

        console.log("Enlaces : ", enlaceSidebar)
        for (let i = 0; i < enlaceSidebar.length; i++) {
            enlaceSidebar[i].setAttribute("href", "https://www.google.com/")

        }*/


        /** querySelector**/
        /**
        let logo = document.querySelector(".logo")
        console.log(logo)

        let encabezado = document.querySelectorAll("h2")
        console.log(encabezado)
        **/

        /*
        let sidebar = document.querySelector("#sidebar")
        let h1 = document.createElement("h1")
        let text = document.createTextNode("Hola mundo")
        h1.appendChild(text)
        sidebar.appendChild(h1)

        var enlaceSidebar = document.querySelector("#sidebar ul")
        console.log(enlaceSidebar)
        let lista = document.createElement("li")
        let enlace = document.createElement("A")
        enlace.appendChild(document.createTextNode("Entrada 6"))
        enlace.setAttribute("href", "#")
        lista.appendChild(enlace)
        enlaceSidebar.appendChild(lista)
        */
        ///Clonando nodo
        let contenido = document.querySelectorAll("main")
        let nuevoContenido = contenido[0].cloneNode(true)
        let sidebar = document.querySelector('aside')

        sidebar.insertBefore(nuevoContenido, sidebar.childNodes[5])










    });

})();