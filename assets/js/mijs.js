$ (document).ready (function(){
/* funcion click aenviar correo*/
    $("#enviarCorreo").click(function(){
      alert("El correo fue enviado correctamente")
    })

/*captura click menu para ir lentamente a secciones de la pagina*/
    $('a.scroll').click(function(event) {
        event.preventDefault();
        var pincha = $(this).attr("href");
        $('html,nav').animate({
          scrollTop: $(pincha).offset().top
        }, 1500); 
      });
      

})