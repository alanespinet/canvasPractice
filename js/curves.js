/* obtengo una referencia al canvas. Mala idea hacerlo con jQuery. Mejor con
   plain javascript */
var canvas = document.getElementById("myCanvas");

/* Necesito el Rendering Context object para trabajar con el canvas. Para ello
   utilizo getContext("2d"), que me devuelve un context de segunda dimensión.
   Ahora, antes de buscar el objeto, se aconseja chequear si es soportado por
   el navegador, mediante un if */
if(canvas.getContext) {

  /* El navegador lo soporta. Obtengo entonces el objeto context */
  var ctx = canvas.getContext("2d");

  /* Declara que se va a comenzar la creación de un nuevo Path o camino. Esta
     llamada es requerida cada vez que se vaya a iniciar un nuevo Path */
  ctx.beginPath();

  /* Primero se creará una curva de tipo QUADRÁTICA, que posee sólo un punto
     de control común  a ambos extremos de la curva. Llamemos P1 y P2 a los
     dos puntos extremos de la curva, y Pc al punto de control. Lo primero que
     se hace es mover el cursor de dibujo a la posión donde se encuentra P1: */
  ctx.moveTo(200, 400);

  /* Ahora se llama a la función quadraticCurveTo que recibe, en orden, los
     argumentos de esta manera (xPc, yPc, xP2, yP2) */
  ctx.quadraticCurveTo(300, 200, 400, 400);

  /* Termina el trazado de la curva y la dibuja */
  ctx.stroke();


  /* Ahora se crea el segundo tipo de curva de canvas, las curvas BEZIER, que
     poseen dos puntos de control en lugar de uno. Ahora llamaremos a nuestros
     puntos así: P1 y P2 los puntos inicial y final de la curva, y Pc1 y Pc2 a
     los dos puntos de control, respectivos a los puntos de la curva. Como en
     el ejemplo anterior, lo primero es definir la posición del punto inicial
     de la curva */
  ctx.beginPath();
  ctx.strokeStyle = "green";
  ctx.moveTo(200, 400);

  /* Ahora se llama a la función quadraticCurveTo que recibe, en orden, los
     argumentos de esta manera (xPc1, yPc1, xPc2, yPc2, xP2, yP2) */
  ctx.bezierCurveTo(200, 200, 400, 100, 400, 400);

  /* Termina el trazado de la curva y la dibuja */
  ctx.stroke();



  /* El siguiente ejemplo crea un LAZO, una curva invertida, pues invierte los
     puntos de control de ambos extremos y los aleja  */
  ctx.beginPath();
  ctx.strokeStyle = "red";
  ctx.moveTo(200, 400);

  ctx.bezierCurveTo(500, 200, 100, 200, 400, 400);
  ctx.stroke();




  /* Además se pueden crear ARCOS, otro tipo de curva definido en canvas. Para
     ello se debe definir el punto CENTRAL del arco, el radio (distancia desde
     el punto central hasta el arco) y los ángulos inicial y final que tendrá.
     Estos ángulos determinan la posición de los puntos inicial y final del
     arco. Los mismos se miden en radianes en el sentido de las manecillas del
     reloj, pero puede hacerse en sentido opuesto si se pasa true como último
     parámetro a la función.

     El primer ejemplo crea un círculo azul en el punto (300, 250), el medio
     del canvas, con un radio de 150 pixeles. El ángulo inicial es cero porque
     el punto inicial es paralelo al eje x. El ángulo final es 2 PI, porque es
     el recorrido que debe hacer el arco para crear un círculo*/
  ctx.beginPath();
  ctx.strokeStyle = "blue";

  ctx.arc(300, 250, 150, 0, 2 * Math.PI);
  ctx.stroke();


  /* Este otro ejemplo crea un arco naranja de 270 pixeles de radio y en
     recorrido contrareloj, con cada punto a 45º de su esquina opuesta */
  ctx.beginPath();
  ctx.strokeStyle = "rgb(250, 135, 50)";

  ctx.arc(300, 250, 230, Math.PI/4, 3/4 * Math.PI, true);
  ctx.stroke();


  ctx.beginPath();
  ctx.strokeStyle = "rgb(20, 135, 250)";

  ctx.arc(300, 250, 100, -1/4 * Math.PI, Math.PI / 2);
  ctx.stroke();
}
