$ (document).ready (function(){

    /* funcion click enviar correo*/
 
      $('#enviarCorreo').click(function() {
        // borra los  campos ingresados
        $('.form-control').val('');
        // Muestra la alerta
        alert("El correo fue enviado correctamente");
      });

/*captura el click  de la barra de menu para ir lentamente a secciones de la pagina
  se selccionan todos los elementos "a" del enlace de la barra de menu, 
  si esta llamando a una seccion en especifico
  se evita que cargue la pagia completa con preventDefault*/
    $('a.scroll').click(function(event) {
        event.preventDefault();
        /* se asigna y almacena el valor a la varible pincha*/
        var pincha = $(this).attr("href");
        /* luego se usa la funcion animate para que se desplace a la seccion indicada*/
        $('html,nav').animate({
          scrollTop: $(pincha).offset().top
          /* el valor 1500  indica la demora en milisegundos que hará el desplazamiento hasta la seccion*/
        }, 1500); 
      });
      

})