/* por estilos conoceremos a las modificaciones que se pueden hacer a los
   diferentes elementos (rellenos, líneas, etc.) para afectar la manera en que
   se renderizan. Hasta ahora vimos fillStyle y strokeStyle. En este fichero
   se exponen algunas de las variantes que podemos usar */

   var canvas = document.getElementById("myCanvas");

   if(canvas.getContext) {
     var ctx = canvas.getContext("2d");

     /* TRANSPARENCIAS:

        como se vio, es posible establecer que un determinado
        elemento sea transparente mediante rgba, pero existe otra manera, que
        aplica un grado de transparencia determinada a todos los elementos que
        posee debajo de su declaración: */
    ctx.globalAlpha = 0.4;

    /* Ahora todo lo que se dibuje tendrá una transparencia de 0.4*/
    ctx.fillStyle = "rgb(255, 0, 0)"
    ctx.fillRect(100, 100, 250, 150);

    ctx.fillStyle = "rgb(0, 0, 255)"
    ctx.fillRect(150, 150, 250, 150);

    /* Reestablecer la transparencia, para poder ver con comodidad los demás
       estilos que vamos a tocar */
    ctx.globalAlpha = 1;


    /* GROSOR DE LÍNEA

       Se puede definir mediante la propiedad lineWidth. Cuando el valor es
       impar (como por defecto), dejar la línea en coordenadas exactas la
       suaviza, mientras que desfasar la línea 0.5 píxeles la endurece. Veamos
       dos líneas idénticas comparadas */
    ctx.strokeStyle = "black";

    /* Suavizada */
    ctx.beginPath();
    ctx.lineWidth = 9;
    ctx.moveTo(450, 100);
    ctx.lineTo(450, 400);
    ctx.stroke();

    /* Sin suavizar. Offset de 0.5 px */
    ctx.beginPath();
    ctx.lineWidth = 9;
    ctx.moveTo(480.5, 100);
    ctx.lineTo(480.5, 400);
    ctx.stroke();

    /* El offset debe ocurrir sobre el eje opuesto al mismo donde descansa la
    línea */

    /* DEGRDADOS

       Se dijo que fillStyle y strokeStyle NO sólo pueden recibir un color como
       valores válidos. Es posible también que reciban degradados, los cuales
       pueden ser creados nativamente desde la API canvas. Afortunadamente.
       es fácil crear degradados. Sólo habrá que llamar a las funciones
       createLinearGradient y createRadialGradient, que crean objetos de tipo
       CanvasGradient. Una vez creado un objeto de gradiente, el mismo puede
       ser asignado a fillStyle o strokeStyle:

       Creemos primero un degradado lineal */

       /* Los parámetros son (x, y) del inicio del degradado y (x, y) del final
          del degradado. En este ejemplo se crea un degradado horizontal */
       var linearDeg = ctx.createLinearGradient(200, 0, 550, 0);

       /* Ahora se pueden adicionar colores al degradado mediante la función
          addColorStop, que recibe como parámetros la posición del color a
          agregar y el color como tal. La posición será un valor entre 0 y 1.
          Se adicionan tres colores: azul, verde y rojo */

      linearDeg.addColorStop(0, "#00f"); // azul
      linearDeg.addColorStop(0.5, "#0f0"); // verde
      linearDeg.addColorStop(1, "#f00"); // rojo

      /* Ahora se aplica el degradado al fillStyle y se crea un rectángulo
         relleno con él: */
      ctx.fillStyle = linearDeg;
      ctx.fillRect(200, 0, 350, 300);

      /* Un aspecto importante a tener en cuenta aquí es que la posición del
         degradado es absoluta respecto al canvas, NO respecto al elemento que
         lo contiene, lo que requiere que, en muchos casos, estas posiciones
         coincidan para encontrar buenos resultados. Lo mismo ocurre con
         la función createRadialGradient, que recibe como argumentos el punto
         (x, y) central del primer círculo, luego su radio, después el (x, y)
         del punto central del segundo círculo y finalmente el radio de éste.
         El funcionamiento es idéntico. */

   }
