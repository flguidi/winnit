"use strict"

//selecciono las 2 opciones con sus dos contenedores correspondientes
const opcIngreso = document.getElementById('opcIngreso');
const opcRegistro = document.getElementById('opcRegistro');
const formIngreso = document.getElementById('formIngreso');
const formRegistro = document.getElementById('formRegistro');

opcIngreso.addEventListener('click', () => cambiarCaja(formIngreso, formRegistro));
opcRegistro.addEventListener('click', () => cambiarCaja(formRegistro, formIngreso));

function cambiarCaja(box1, box2) {
    //muestro el box1
    box1.classList.remove("oculto");
    //escondo el box2
    box2.classList.add("oculto");
}

//----------------------------------------------------------------------------------
// funcionalidad para cambiar el estilo al nav del formulario de ingreso/registro
const opciones = document.querySelectorAll('.nav-registro h2');

opciones.forEach(opcion => {
    opcion.addEventListener('click', () => {
        opciones.forEach(opc => opc.classList.remove('active')),
            opciones.forEach(opc => opc.classList.add('inactivo'));

        opcion.classList.add("active");
    });
});


//  funcionalidad para btn-principales del registro
const formularioIngreso = document.querySelector('#formIngreso form');
const formularioRegistro = document.querySelector('#formRegistro form');

const btnRegistro = document.getElementById('btn-registro');
const btnLogin = document.getElementById('btn-login');

btnLogin.addEventListener('click', (e) => {
    e.preventDefault();
    let inputForm = document.querySelectorAll('#formIngreso form input[required]');
    advertenciaInput(inputForm);
    if (validandoFormulario(inputForm)) {
        window.location.href = 'index.html';
    }
})
btnRegistro.addEventListener('click', (e) => {
    e.preventDefault();
    let inputForm = document.querySelectorAll('#formRegistro form input[required]');
    advertenciaInput(inputForm);
    //si todos los campos del formulario estan completados
    //muestro la animacion de confirmacion y luego redirijo al home
    if (validandoFormulario(inputForm)) {
        mostrarConfirmacion();
        setTimeout(() => {
            window.location.href = 'login.html'; 
        }, 5000);
    }
})

function validandoFormulario(inputs) {
    let flag = true;
    for (const input of inputs) { 
        //me fijo si los input tipo checkbox estan marcados
        if (input.type === 'checkbox' && !input.checked) {
            flag = false;
            break;
            //me fijo si el resto de los input estan con contenido
        } else if (input.type !== 'checkbox' && input.value === '') {
            flag = false;
            break;
        }
    }
    return flag;
}


//funcionalidades para advertencia de inputs
function advertenciaInput(inputForm) {
    inputForm.forEach(input => {
        if (input.value === "") {
            input.classList.add('inputFaltante');
        } else {
            input.classList.remove('inputFaltante');
        }
    })
}
function mostrarConfirmacion(){
    formularioRegistro.classList.add('desaparece-caja');
    const msgConfirmacion = document.querySelector('.mensaje-confirmacion');
    msgConfirmacion.classList.add('animacion-msg-confirmacion');
}






