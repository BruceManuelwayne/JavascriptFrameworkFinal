var error = false; 

function validar(formulario) {

    if (formulario.nombre.value.trim().length == 0) {
     
      document.getElementById('errornombres').innerHTML="Por favor ingrese un nombre valido"; 
      error = true; 

    }else{
      document.getElementById('errornombres').innerHTML="";  
    }

    if (formulario.email.value.trim().length == 0) {
     
      document.getElementById('errorEmail').innerHTML="Campo invalido"; 

      error = true; 
    }else{
      document.getElementById('errorEmail').innerHTML=""; 

    }
    
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(formulario.email.value)) {
      document.getElementById('errorEmail').innerHTML="Campo invalido"; 
      error = true; 
    }else{
      document.getElementById('errorEmail').innerHTML=""; 
    }
  
    if (formulario.contrasena.value.trim().length == 0) {
      document.getElementById('errorContrasena').innerHTML="Contraseña obligatorio"; 
      error = true; 
    }else{
      document.getElementById('errorContrasena').innerHTML="";
    }
  
    if (formulario.contrasena.value != formulario.confirmacion.value) {
       document.getElementById('errorConfirmacion').innerHTML="Contraseña no coincide"; 
        error = true; 
    }else{
      document.getElementById('errorConfirmacion').innerHTML=""; 
    }

    if (formulario.tipo.value== "-1") {
    
      document.getElementById('errorTipo').innerHTML="tipo de usuario es obligatorio";
      error = true; 
    }else{
      document.getElementById('errorTipo').innerHTML="";
    }

    if (!formulario.acepto.checked) {

      document.getElementById('errorAcepto').innerHTML="Debe aceptar los terminos y condiciones"; 
      error = true; 
    }else{
      document.getElementById('errorAcepto').innerHTML=""; 
    }
    if (error == true){
      return false
    }else {
      return true
    }
}
  