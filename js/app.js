
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

  /* Puedo cambiar el color de relleno con fillStyle. Puede igualarse a un
     color o a otra cosa, pero para colores, se puede usar rgb, rgba, keywords,
     hexadecimles o lo que sea que represente un color, siempre que se haga
     entre comillas. Los cambios de colores se realizan ANTES de dibujar */
  ctx.fillStyle = "blue";

  /* Se crea un rectángulo relleno. El dibujo del mismo en el canvas es
     inmediato. Los parámetros son x, y (del punto superior izquerdo del rect),
     además del width y el height.*/
  ctx.fillRect(50, 50, 250, 150);

  /* Puedo cambiar el color de línea con strokeStyle. Funciona igual que
     fillStyle, respetando además el ANTES de dibujar */
  ctx.strokeStyle = "red";

  /* Se crea un rectángulo delineado (línea sin relleno). Los argumentos son
     los mismos que para fillRect */
  ctx.strokeRect(150, 150, 300, 200);



  /* Ahora se crea un path (camino). ANTES, vamos a cambiarle el color a la
     línea del mismo */
  ctx.strokeStyle = "rgb(45, 240, 20)";

  /* Declara que se va a comenzar la creación de un nuevo Path o camino. Esta
     llamada es requerida cada vez que se vaya a iniciar un nuevo Path */
  ctx.beginPath();

  /* Mueve el cursor de dibujo a la posición (x, y) indicada en los argumentos.
     Esta acción NO crea dibujo alguno, pero sí determina DÓNDE comenzará el
     que se va a realizar */
  ctx.moveTo(75, 80);

  /* Crea una línea desde el lugar especificado mediante moveTo hasta el punto
     indicado en los argumentos (x, y). Esta acción NO dibuja la línea en
     la pantalla aún */
  ctx.lineTo(390, 80);

  /* Crea una segunda línea (Pueden ser cuantas se deseen). EL punto inicial
     de la línea será el punto donde se concluyó la línea anterior */
  ctx.lineTo(60, 200);

  /* Termina el trazado del camino SIN CERRARLO. Si se desea cerrar, habrá
     que utilizar ctx.closePath() antes de ctx.stroke(). Esto dibuja una línea
     final desde la última que se dibujó hasta el punto incial del trazado,
     que fue definido con moveTo. El llamado a ctx.stroke ES el paso que hace
     visible el path en el canvas. También se puede llamar a ctx.fill() para
     cerrar el camino de forma rellena. El color de relleno será el definido
     en fillStyle y NO será necesaria la llamada a ctx.stroke(). Además se
     podrá cerrar con el método clip(), que creará una máscara que ocultará
     todo lo que se dibuje (después de haberse definido ella) que esté fuera
     de los límites de la curva */
  ctx.stroke();

}
