/*var nombre = document.getElementById('nombre');
var apellido = document.getElementById('apellido');
var email = document.getElementById('email');
var asunto = document.getElementById('asunto');*/

const formulario = document.getElementById('formulario');

const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    asunto: /^[a-zA-Z0-9\_\-]{4,16}$/ // Letras, numeros, guion y guion_bajo.
}

const campos = {
    nombre: false,
    apellido: false,
    email: false,
    asunto: false
}

//se puede mejorar para no repetir codigo pero requiere usar metodologias bem en HTML
const validarFormulario = (e) => {
    switch (e.target.name) {
        case "nombre":
            if (expresiones.nombre.test(e.target.value)) {
                nombre.style.border = "1px solid #f6f6f6";
                campos['nombre'] = true;
            }
            else {
                nombre.style.border = "2px solid red";
                campos['nombre'] = false;
            }
            break;
        case "apellido":
            if (expresiones.apellido.test(e.target.value)) {
                apellido.style.border = "1px solid #f6f6f6";
                campos['apellido'] = true;
            }
            else {
                apellido.style.border = "2px solid red";
                campos['apellido'] = false;
            }
            break;
        case "email":
            if (expresiones.email.test(e.target.value)) {
                email.style.border = "1px solid #f6f6f6";
                campos['email'] = true;
            }
            else {
                email.style.border = "2px solid red";
                campos['email'] = false;
            }
            break;
        case "asunto":
            if (expresiones.asunto.test(e.target.value)) {
                asunto.style.border = "1px solid #f6f6f6";
                campos['asunto'] = true;
            }
            else {
                asunto.style.border = "2px solid red";
                campos['asunto'] = false;
            }
            break;
    }
}



inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    if (campos.nombre && campos.apellido && campos.email && campos.asunto) {
        formulario.reset();
        document.getElementById('formulario__mensaje__exito').classList.add('formulario__mensaje__exito-activo')
        setTimeout(() => {
            document.getElementById('formulario__mensaje__exito').classList.remove('formulario__mensaje__exito-activo');
        }, 5000);
        document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo')
    }
    else {
        document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo')
    }
});


//primera forma

/*
function enviarFormulario(){

    console.log('Enviando formulario..');

    if(nombre.value === null || nombre.value === ''){
        nombre.style.border="2px solid red";
        nombre.placeholder = "Ingrese nombre";   
      }

    if(apellido.value === null || apellido.value === ''){
        apellido.style.border="2px solid red";
        apellido.placeholder = "ingrese apellido";
      }

    if(email.value === null || email.value === ''){
        email.style.border="2px solid red";
        email.placeholder = "Ingrese email";
      }

      if(email.value === null || email.value === ''){
        email.style.border="2px solid red";
        email.placeholder = "Ingrese email";
      }

      if(asunto.value === null || asunto.value === ''){
        asunto.style.border="2px solid red";
        asunto.placeholder = "Ingrese asunto";
      }

    return false;
}
*/

//segunda forma

/*
var form = document.getElementById('formulario');
    form.addEventListener('submit', function(evt){
        evt.preventDefault();
        

        if(nombre.value === null || nombre.value === ''){
            nombre.style.border="2px solid red";
            nombre.placeholder = "Ingrese nombre";   
          }
    
        if(apellido.value === null || apellido.value === ''){
            apellido.style.border="2px solid red";
            apellido.placeholder = "ingrese apellido";
          }
    
        if(email.value === null || email.value === ''){
            email.style.border="2px solid red";
            email.placeholder = "Ingrese email";
          }
    
          if(email.value === null || email.value === ''){
            email.style.border="2px solid red";
            email.placeholder = "Ingrese email";
          }
    
          if(asunto.value === null || asunto.value === ''){
            asunto.style.border="2px solid red";
            asunto.placeholder = "Ingrese asunto";
          }
    

    });*/

    //Como mejoria, podria hacerse un array donde almacene errores
    //pero esta fue mi primer solucion

    //luego al enviar nuevamente, se tendria que actualizar,
    //estoy buscando un fix