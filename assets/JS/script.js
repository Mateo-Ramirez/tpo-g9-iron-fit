
const nombre = document.getElementById("name");
const mail = document.getElementById("correo");
const mensajes = document.getElementById("comentario");
const form = document.getElementById("form");


 form.addEventListener("submit", e=>{
    e.preventDefault()
    let regexEmail = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;


      if(nombre.value.length <4){
        alert("Debe ingresar nombre completo");

      }

      if(!regexEmail.test(mail.value)){
        alert("El mail ingresado no es valido");

      }

      if(mensajes.value.length <5){
        alert("El mensaje es muy corto");
  
      } 
      
      if(mensajes.value.length >500){
        alert("El mensaje es muy largo");
      }

    })
 


