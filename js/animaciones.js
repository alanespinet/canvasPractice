/* Las animaciones en Canvas se realizan siguiendo los pasos listados:

  1- Limpiar el canvas completo, para llevar a cabo el proceso de re-dibujado.
  2- Salvar el estado del canvas ANTES de realizar ninguna transformación.
  3- Realizar todas las animaciones / transformaciones que se deseen. Es en
     este paso donde se actualizan los valores de posición, rotación, color,
     tamaño, transparencia, etc. de aquellos elementos que se desean animar.
     Aquí también ocurre el re-dibujado de todos los elementos del canvas.
  4- Restaurar las transformaciones realizadas al canvas.
  5- Volver al paso 1 y repetir mientras dure la animación. */

/* Si nos podemos a mirar la lista, casi todo está visto hasta ahora. El paso 1
   lo podemos llevar a cabo a través de ctx.clearRect(). El paso 2 lo podemos
   lograr a través de ctx.save(). El paso 3 es simple programación / matemática,
   actualizando los valores deseados en las cantidades justas para lograr lo
    que se desea y re-dibujado todo como mismo hemos hecho hasta ahora. El
    paso 4 es sencillamente una llamada a ctx.restore(). Téngase en cuenta que
    para animaciones simples los pasos 2 y 4 pueden incluso omitirse. El paso
    problemático es el paso 5, que es el que determina la repetición de las
    acciones. Para ello, la mejor variante es window.requestAnimationFrame, que
    recibe una función como parámetro. El paso normal aquí es pasarle la propiedad
    función que lo hace todo para que la vuelva a ejecutar. Algo como esto:


      function animar(){
        ...hacer todos los pasos del 1 al 4

        window.requestAnimationFrame(animar); // paso 5
      }
    */

    /* Veamos un primer ejemplo que sencillamente mueve un rectángulo a
       la derecha y, cuando este llega al borde del canvas, lo retorna a
       la izquierda. Se utilizarán comentarios de línea // para poder
       comentariar luego todo el ejemplo con comentarios de bloque */

// Se pone todo dentro de una función para poder llamarla a través de
// window.requestAnimationFrame:
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = " #809fff";
ctx.fillRect(0, 0, 100, 100);
var x = 0.1;
var direction = 1;

function draw(){
    // Paso 1
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Paso 3. (El paso 2 NO hace falta. La animación es muy sencilla)
    // 3.1 - Actualización de valor de animación
    if(x >= canvas.width - 100) direction = -1;
    if(x <= 0) direction = 1;

    x += 4 * direction;

    // 3.2 - Re-dibujado del elemento
    ctx.fillRect(x, 0, 100, 100);

    // Paso 5. (El paso 4 NO hace falta pues no hubo paso 2)
    window.requestAnimationFrame(draw);
}

draw();
