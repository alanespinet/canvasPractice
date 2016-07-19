// global vars
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var images = [new MyImage("img/Moon.png"),
              new MyImage("img/planet-earth.png"),
              new MyImage("img/stars.jpg")];

var moon = 0, earth = 1, stars = 2;
var moonRot = 0, earthRot = 0;

// timeBased
var now, delta;
var then = new Date().getTime();


// inicio de todo el asunto
init();
draw();


function init(){
  // inicializacion y carga de imagenes
  for(let i = 0; i < images.length; i++){
    images[i].image.addEventListener("load", function(){
      images[i].ready = true;
    });
    images[i].image.src = images[i].source;
  }
}

function draw(){
  if(areAllImagesLoaded()){
    	
	// Paso 1: 
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	// Seteos de tiempo
	now = new Date().getTime();
	delta = now - then;

	// Paso 2:
	ctx.save();
	
	// Paso 3:

	// estrellas
	ctx.drawImage(images[stars].image, 0, 0, canvas.width, canvas.height);

	
	// tierra
	ctx.translate(300, 250);
	ctx.save();
	ctx.rotate(earthRot);
	earthRot += (Math.PI / 20000 * delta) * (60/1000);
	ctx.drawImage(images[earth].image, -100, -100, 200, 200);
	ctx.restore();

	// luna
	ctx.rotate(moonRot);
	moonRot += (Math.PI / 1000 * delta) * (60/1000);
	ctx.drawImage(images[moon].image, 170, 0, 50, 50);
	ctx.restore();
	

	// Paso 4:
	ctx.restore();

	// actualizacion de tiempo
	then = now;
  }
  window.requestAnimationFrame(draw);
}

// clase imagenes
function MyImage(file_source){
  this.image = new Image();
  this.source = file_source;
  this.ready = false;
}

// chequea si todas las imagenes ya estan en memoria para poder mostrarse
function areAllImagesLoaded(){
  var ret = true;
  for(let i = 0; i < images.length; i++){
    ret = ret && images[i].ready;
  }
  return ret;
}
