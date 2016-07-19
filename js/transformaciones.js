/* Las TRANSFORMACIONES en el canvas se llevan a cabo de manera cruda,
   aplicando la transformación al sistema coordenado utilizado (la grilla del
   canvas en este caso). O sea, para tranformar un objeto se aplicarán
   transformaciones sobre el sistema coordenado de forma tal que obtengamos
   el resultado deseado */

   var canvas = document.getElementById("myCanvas");
   if(canvas.getContext) {
     var ctx = canvas.getContext("2d");

     /* SAVE AND RESTORE
        Antes de aplicar ninguna transformación, aprenderemos que es posible
        guardar el estado del canvas mediante ctx.save(). Esto salva los styles,
        el lugar donde se encuentra el origen, etc. Se pueden aplicar todos los
        ctx.save() que se deseen, siempre teniendo en cuenta que los mismos se
        almacenarán a modo de pila, extrayendo cada uno a través de la función
        ctx.restore(), que devuelve el canvas al ÚLTIMO punto guardado por save.
        Veamos un ejemplo (descomentar el código para verlo) */

    /* primero establecemos el fillStyle a rojo, salvamos el estado del canvas
       y dibujamos un rectángulo en medio de la pantalla */

    ctx.fillStyle = "red";
    ctx.save();
    ctx.fillRect(200, 150, 200, 200);


    /* Ahora cambiamos el fillStyle a negro y dibujamos un segundo rectángulo
       sobre el primero */

    ctx.fillStyle = "black";
    ctx.fillRect(250, 200, 100, 100);

    /* Finalmente devolvemos el fillStyle a color rojo para dibujar un último
       rectángulo, pero esta vez el rollback lo hacemos con ctx.restore() */

    ctx.restore();
    ctx.fillRect(275, 225, 50, 50);

    /* A través de este ejemplo, se cambió el estado de canvas, mediante save
       se guardó y, cuando se necesitó, se recuperó con restore. Obviamente
       la utilidad de esto es MUCHO mayor que lo que se vio, pero alcanza para
       captar la idea. El objetivo fundamental de save y restore va a ser
       guardar el estado del canvas ANTES de realizar una transformación y
       devolverlo a éste DESPUÉS de realizarla. Veamos primero cómo realizar
       traslaciones. Se limpia la pantalla para poder trabajar*/

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black";

    /* La traslación del canvas ocurre mediante el método ctx.translate(x, y)
       que mueve el canvas y su origen a la posición especificada por los
       argumentos del método. Veamos */

    ctx.save();   // se salva la transformación actual del canvas
    ctx.translate(300, 250); // Se mueve el origen del canvas al centro
    ctx.fillRect(0, 0, 100, 100); // se dibuja a partir de ese nuevo origen
    ctx.restore(); // se devuelve la transformación atrás
    ctx.fillStyle = "red";  // se modifica el fillStyle para ver mejor las cosas
    ctx.fillRect(0, 0, 100, 100); // se vuelve a dibujar

    /* Nótese cómo se puede mover libremente el origen del canvas y realizar
       dibujos a partir de su nueva posición. En este ejemplo, primero se mueve
       el origen del canvas al centro, se dibuja un rectángulo negro a partir
       del origen transformado, luego se vuelve al origen anterior y se vuelve
       a dibujar otro rectángulo. Es importante entender que la función
       translate mueve SÓLO EL ORIGEN, y NO los elementos que ya están en el
       canvas dibujados. O sea, trasladar el origen a (100, 100) NO hará que un
       rectángulo que estaba en (0, 0) en el anterior origen se mueva también
       a (100, 100). Lo único que se moverá será EL ORIGEN. Veamos Ahora
       cómo rotar. Para ello, sólo habrá que llamar a la función rotate con
       la cantidad de radianes que se desean rotar */

    ctx.save();  // se salva la transformación actual del canvas
    ctx.fillStyle = "blue";  // se modifica el fillStyle
    ctx.rotate(Math.PI / 4);  // Se rota el canvas 45º respecto al origen
    ctx.fillRect(400, 0, 100, 100); // Se crea un rectángulo
    ctx.restore(); // se devuelve la transformación atrás

    /* Lo verdaderamente importante aquí es que la rotación del elemento
       siempre ocurre respecto al origen, por lo que si se desea rotar el
       elemento sobre su centro, primero se necesitará mover el origen al mismo
       y luego rotar. Así: */

    ctx.save();  // se salva la transformación actual del canvas
    ctx.fillStyle = "orange"; // se modifica el fillStyle para ver mejor
    ctx.translate(400, 100);  // Se traslada el origen a su nueva ubicación
    ctx.rotate(Math.PI / 4);  // Se rota el canvas 45º respecto al origen
    ctx.fillRect(-50, -50, 100, 100); // Se dibuja el elemento desfasado en 1/2
                                      // de su width y height para que la
                                      // rotación ocurra en su centro
    ctx.restore();  // se devuelve la transformación atrás


    /* Hasta aquí todo claro, lo que nos falta es la transformación de escalado,
       que debe ser manejada con sumo cuidado pues transforma NO sólo el tamaño,
       sino la posición de los elementos. Cuando se escala, se llama a la
       función scale, que recibe cuánto se afecta el eje x y luego el eje y. En
       el siguiente ejemplo se escala el canvas a un factor de 2x y 7y, y luego
       se dibuja un rectangulo de 100x50 pixeles en (100,10). Por culpa del
       escalado, el tamaño real del rectángulo será de 200x350 pixeles y su
       posición será (200,70). */

    ctx.save();  // se salva la transformación actual del canvas
    ctx.fillStyle = "green"; // se modifica el fillStyle para ver mejor
    ctx.scale(2, 7); // Se escala el canvas a (2x, 7y)
    //ctx.fillRect(100, 10, 100, 50); // Se dibuja un rectángulo
    ctx.restore(); // se devuelve la transformación atrás

    /* Un par de asuntos importantes aquí son que si se utilizan valores entre
       0 y 1, lo que se hará será reducir el ancho / largo de los pixeles,
       mientras que si se utilizan valores mayores que 1, se aumentarán. Además,
       si se usan valores negativos, los elementos serán flipeados. */

    
   }
