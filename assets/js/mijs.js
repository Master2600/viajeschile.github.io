$ (document).ready (function(){

    $("#enviarCorreo").click(function(){
      alert("El correo fue enviado correctamente")
    })

    $('a.scroll').click(function(event) {
        event.preventDefault();
        var pincha = $(this).attr("href");
        $('html, body, nav').animate({
          scrollTop: $(pincha).offset().top
        }, 1500); 
      });
      

})