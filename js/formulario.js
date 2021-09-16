var nombre = document.getElementById('nombre');
var apellido = document.getElementById('apellido');
var email = document.getElementById('email');
var asunto = document.getElementById('asunto');


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
    

    });

    //Como mejoria, podria hacerse un array donde almacene errores
    //pero esta fue mi primer solucion

    //luego al enviar nuevamente, se tendria que actualizar,
    //estoy buscando un fix