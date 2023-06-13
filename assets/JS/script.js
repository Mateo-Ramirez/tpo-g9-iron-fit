
const nombre = document.getElementById("name");
const mail = document.getElementById("correo");
const mensajes = document.getElementById("comentario");
const form = document.getElementById("form");
const errores = document.getElementById("errors");


 form.addEventListener("submit", e=>{
    e.preventDefault()
    let regexEmail = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    let ok = false
    let error= ""
    errors.innerHTML= ""
    

      if(nombre.value.length <4){
        error += 'Debe ingresar nombre completo<br>';
        ok = true
      }

      if(nombre.value.length >20){
        error += 'El nombre ingresado no es valido<br>';
        ok = true
      }

      if(!regexEmail.test(mail.value)){
        error +="El mail ingresado no es valido<br>";
        ok = true
      }

      if(mensajes.value.length <5){
        error +="El mensaje es muy corto<br>";
        ok = true
      } 
      
      if(mensajes.value.length >500){
        error +="El mensaje es muy largo<br>";
        ok = true
      }

      if(ok){
        document.getElementById("form_error").style.display="block";
        document.getElementById("form_msj").style.display="none"
        errors.innerHTML = error
      }

       if(!ok){
        document.getElementById("form_error").style.display = "none";
        document.getElementById("form_msj").style.display= "block";
        form_msj_user.innerHTML = 'Gracias por tu comentario, ' + nombre.value;
      } 
       

    })
 


