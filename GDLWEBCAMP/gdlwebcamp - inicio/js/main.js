(function() {
    'use strict';
    let regalo = document.getElementById("regalo")

    document.addEventListener('DOMContentLoaded', function() {

        //lettering
        $('.nombre-sitio').lettering()

        //menu fijo
        let windowHeight = $(window).height()
        let barraAltura = $('.barra').innerHeight();
        $(window).scroll(function() {
            let scroll = $(window).scrollTop()

            if (scroll > windowHeight) {
                $('.barra').addClass('fixed')
                $('body').css({ 'margin-top': barraAltura + 'px' })
            } else {
                $('.barra').removeClass('fixed')
                $('body').css({ 'margin-top': '0px' })
            }
        })

        //menu responsive
        $('.menu-movil').on('click', function() {
            console.log('click')
            $('.navegacion-pricipal').slideToggle();

            //console.log($('.navegacion-pricipal'))
            // .navegacion-pricipal
        })


        let mapa = document.getElementById("mapa")
        if (mapa != null) {
            var map = L.map('mapa').setView([20.5117552, -97.4366631], 16);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

            L.marker([20.5117552, -97.4366631]).addTo(map)
                .bindPopup('GDLWebCamp 2020 <br>Boletos ya disponibes.')
                .openPopup();
        }

        //Campos datos usuarios
        let nombre = document.getElementById("nombre")
        let apellido = document.getElementById("apellido")
        let email = document.getElementById("email")

        //Campos pases
        let pase_dia = document.getElementById('pase_dia')
        let pase_dos_dias = document.getElementById("pase_dos_dias")
        let pase_completo = document.getElementById("pase_completo")

        //Botones y divs
        let calcular = document.getElementById("calcular")
        let errorDiv = document.getElementById("error")
        let botonRegistro = document.getElementById("btnRegistro")
        let resultado = document.getElementById("lista-producto")
        let lista_productos = document.getElementById("lista_productos")
        let suma = document.getElementById("suma_total")

        //Extras
        let etiqueteas = document.getElementById("etiquetas")
        let camisas = document.getElementById("camisa_evento")

        if (nombre != null && apellido != null && email != null) {
            nombre.addEventListener("blur", validarCampos)

            apellido.addEventListener("blur", validarCampos)

            email.addEventListener("blur", validarCampos)

            email.addEventListener("blur", validarMail)

            pase_dia.addEventListener("blur", mostrarDias, false)
            pase_dos_dias.addEventListener("blur", mostrarDias, false)
            pase_completo.addEventListener("blur", mostrarDias, false)




            calcular.addEventListener("click", calcularMontos); //DOMContenLoaded

            function calcularMontos(event) {
                event.preventDefault()
                if (regalo.value === "") {
                    alert("Debes elegir un regalo")
                    regalo.focus()
                } else {
                    let boletoDia = parseInt(pase_dia.value, 10) || 0,
                        boleto2Dias = parseInt(pase_dos_dias.value, 10) || 0,
                        boletoCompleto = parseInt(pase_completo.value, 10) || 0,
                        cantCamisas = parseInt(camisas.value, 10) || 0,
                        cantEtiquetas = parseInt(etiqueteas.value, 10) || 0

                    let totalPagar = (boletoDia * 30) + (boleto2Dias * 45) + (boletoCompleto * 50) + ((cantCamisas * 10) * .93) + (cantEtiquetas * 2)

                    let listadoProductos = []
                    if (boletoDia > 0)
                        listadoProductos.push(boletoDia + ' Pases por día')
                    if (boleto2Dias > 0)
                        listadoProductos.push(boleto2Dias + ' Pases por 2 día')
                    if (boletoCompleto > 0)
                        listadoProductos.push(boletoCompleto + ' Pases completos')
                    if (cantCamisas > 0)
                        listadoProductos.push(cantCamisas + ' Camisas')
                    if (cantEtiquetas > 0)
                        listadoProductos.push(cantEtiquetas + ' Etiquetas')
                        //console.log(listadoProductos)

                    if (listadoProductos.length > 0) {
                        lista_productos.style.display = "block"
                    } else {
                        lista_productos.style.display = "none"
                    }
                    lista_productos.innerHTML = "";
                    for (let i = 0; i < listadoProductos.length; i++) {
                        lista_productos.innerHTML += listadoProductos[i] + '<br/>'

                    }

                    suma.innerHTML = "$ " + totalPagar.toFixed(2)
                }

            }

            function mostrarDias(event) {
                let boletoDia = parseInt(pase_dia.value, 10) || 0,
                    boleto2Dias = parseInt(pase_dos_dias.value, 10) || 0,
                    boletoCompleto = parseInt(pase_completo.value, 10) || 0
                let diasElegidos = ['viernes', 'sabado', 'domingo']
                for (let i = 0; i < diasElegidos.length; i++) {
                    let dia = document.getElementById(diasElegidos[i]);
                    dia.style.display = 'none'
                }
                diasElegidos = []
                if (boletoDia > 0) {
                    diasElegidos.push('viernes')
                }
                if (boleto2Dias > 0) {
                    diasElegidos.push('viernes', 'sabado')
                }
                if (boletoCompleto > 0) {
                    diasElegidos.push('viernes', 'sabado', 'domingo')
                }

                for (let i = 0; i < diasElegidos.length; i++) {
                    let dia = document.getElementById(diasElegidos[i]);
                    dia.style.display = 'block'
                }
            }

            function validarCampos() {
                if (this.value == "") {
                    errorDiv.style.display = 'block'
                    errorDiv.innerHTML = "Este campo es obligatorio"
                    this.style.border = "1px solid red"
                } else {
                    errorDiv.style.display = 'none'
                    errorDiv.innerHTML = ""
                    this.style.border = "unset"
                }
            }

            function validarMail() {
                if (this.value.indexOf('@') == -1) {
                    errorDiv.style.display = 'block'
                    errorDiv.innerHTML += ", ingresa un correo valido"
                    this.style.border = "1px solid red"
                } else {
                    errorDiv.style.display = 'none'
                    errorDiv.innerHTML = ""
                    this.style.border = "unset"
                }
            }

        }

    })
})()


$(function() {

    /** Programa de conferencias **/
    $('.ocultar').hide()
    $('.ocultar:first').show()
    $('.menu-programa a:first').addClass('activo')

    $('.menu-programa a').on('click', function() {

        $('.menu-programa a').removeClass('activo')
        $(this).addClass('activo')
        let enlace = $(this).attr('href')
        $('.ocultar').hide()
        $(enlace).fadeIn(700)
        return false
    })

    //Animaciones para los numeros
    let resumenLista = $('.resumen-evento')
    if (resumenLista.length > 0) {
        $('.resumen-evento').waypoint(function() {
            $('.resumen-evento li:nth-child(1) p').animateNumber({ number: 6 }, 1200)
            $('.resumen-evento li:nth-child(2) p').animateNumber({ number: 15 }, 1200)
            $('.resumen-evento li:nth-child(3) p').animateNumber({ number: 3 }, 1200)
            $('.resumen-evento li:nth-child(4) p').animateNumber({ number: 9 }, 1200)
        }, { offset: '60%' })
    }


    //cuenta regresiva

    $('.cuenta-regresiva').countdown('2021/08/25 08:00:00', function(event) {
        $('#dias').html(event.strftime('%D'))
        $('#horas').html(event.strftime('%H'))
        $('#minutos').html(event.strftime('%M'))
        $('#segundos').html(event.strftime('%S'))
    })

});