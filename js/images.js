/* Mostrar una imagen en el canvas requiere, si la imagen NO está cargada en
   el DOM, que la imagen sea cargada primero. Eso quiere decir que NO se puede
   llamar directamente a la función de muestra 'drawImage', porque generará
   error. Los pasos, no obstante, son bien sencillos:

   1- Crear un nuevo objeto de imagen con la clase Image()
   2- Establecer un manejador de evento 'onload' para el objeto de imagen que,
      una vez la imagen esté cargada, la muestre al canvas. Este manejador es
      asincrónico
   3- Establecer el camino a la imagen. Una duda muy común es por qué hacerlo
      DESPUÉS del manejador onload, pero tiene lógica. Para entenderlo, sígase
      leyendo el ejemplo.

  La muestra de una imagen en el canvas se lleva a cabo mediante la función
  drawImage, que recibe la imagen a cargar, la posición inicial de su esquina
  superior izquierda y sus dimesiones */

var canvas = document.getElementById("myCanvas");

if(canvas.getContext) {
  var ctx = canvas.getContext("2d");

  /* Se crea un nuevo objeto JS que representa la imagen que se va a mostrar */
  var image = new Image();

  /* Manejador asincrónico que ejecuta su código cuando la imagen está ya
     completamente cargada en memoria. En este punto el manejador va a la cola
     de ejecución y espera a que el bloque contenedor termine para liberar su
     código SI las condiciones para ello (la carga de la imagen, en este caso)
     se cumplieron. */
  image.addEventListener("load", function(){

    /* Una vez la imagen esté cargada en memoria, se dibuja en el canvas desde
       la posición (0,0) y a todo lo largo y ancho del mismo */
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
  });

  /* Cuando se llama a image.src, la descarga de la imagen hacia la página
  empieza. Toda vez que el manejador load de la misma es asincrónico, esta
  línea se ejecuta ANTES del manejador anterior, así que no hay peligro de que
  se intente cargar una imagen que aún NO se conoce, porque el manejador
  asincrónico se ejecutará DESPUÉS de esta línea */
  image.src = "img/background_image.jpg";
}
