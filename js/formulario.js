var nombre = document.getElementById('nombre');
var apellido = document.getElementById('apellido');
var email = document.getElementById('email');
var error = document.getElementById('error');


function enviarFormulario(){

    console.log('Enviando formulario..');

    var mensajesError = [];

    if(nombre.value === null || nombre.value === ''){
        mensajesError.push('ingresa tu nombre');
    }

    if(apellido.value === null || apellido.value === ''){
        mensajesError.push('ingresa tu apellido');
    }

    if(email.value === null || email.value === ''){
        mensajesError.push('Ingresa tu email');
    }

    error.innerHTML = mensajesError.join(', ');

    return false;
}


//fixeando, no borrar
/*
var form = document.getElementById('formulario');
    form.addEventListener('enviar', function(evt){
        evt.preventDefault();
        var mensajesError = [];

        if(nombre.value === null || nombre.value === ''){
            mensajesError.push('ingresa tu nombre');
        }
    
        if(apellido.value === null || apellido.value === ''){
            mensajesError.push('ingresa tu apellido');
        }
    
        if(email.value === null || email.value === ''){
            mensajesError.push('Ingresa tu email');
        }
    
        error.innerHTML = mensajesError.join(', ');

    });*/