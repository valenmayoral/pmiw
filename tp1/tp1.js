let fondo;
let personajes = [];
let estado = 0;
let frameActual = 0;
let velocidad = 30;
let pausa = 0;

function preload() {
  fondo = loadImage("data/fondo.jpg");

  // carga del personaje con un ciclo for
  for (let i = 0; i < 10; i++) {
    personajes[i] = loadImage("data/personaje" + (i + 1) + ".png");
  }
}

function setup() {
  createCanvas(800, 600);
}

function draw() {
  image(fondo, 0, 0, 800, 600);

  if (estado == 0) {
    // estado de descanso de mi personaje
    let descanso = [personajes[0], personajes[9]];
    mostrarPersonaje(descanso, 400, 300);
    
    fill(242, 214, 179);
    textAlign(CENTER, CENTER);
    textSize(15);
    text("DAR A INICIO PARA PROVOCAR SOSPECHA", 400, 490);

    dibujarBoton("INICIO", 335, 510, 130, 45);
  }

  else if (estado == 1) {
    mostrarPersonaje([personajes[1]], 400, 300);
  }

  else if (estado == 2) {
    mostrarPersonaje([personajes[2]], 400, 300);
  }

  else if (estado == 3) {
    mostrarPersonaje([personajes[3]], 400, 300);
  }

  else if (estado == 4) {
    mostrarPersonaje([personajes[4]], 400, 300);
  }

  else if (estado == 5) {
    mostrarPersonaje([personajes[5]], 400, 300);
  }

  else if (estado == 6) {
    mostrarPersonaje([personajes[6]], 400, 300);
  }

  else if (estado == 7) {
    mostrarPersonaje([personajes[7]], 400, 300);
  }

  else if (estado == 8) {
    mostrarPersonaje([personajes[8]], 400, 300);
  }

  else if (estado == 9) {
    mostrarPersonaje([personajes[8]], 400, 300);

    dibujarBoton("RESETEAR", 325, 510, 150, 45);
  }

  // animacion para el estado de descanso
  if (estado == 0) {
    if (frameCount % velocidad == 0) {
      frameActual++;

      if (frameActual >= 2) {
        frameActual = 0;
      }
    }
  }

  // cambio de estado de mi personaje
  if (estado > 0 && estado < 9) {
    if (frameCount % 45 == 0) {
      cambiarEstado();
      frameActual = 0;
    }
  }
}

function mostrarPersonaje(frames, x, y) {
  let imagen = obtenerFrame(frames);
  let alto = 350;
  let proporcion = imagen.width / imagen.height;
  let ancho = alto * proporcion;

  imageMode(CENTER);
  image(imagen, x, y, ancho, alto);
  imageMode(CORNER);
}

function obtenerFrame(frames) {
  return frames[frameActual];
}

function dibujarBoton(textoBoton, x, y, ancho, alto) {
  noStroke();
  fill(107, 66, 38);
  rect(x, y, ancho, alto);
  fill(242, 214, 179);
  textAlign(CENTER, CENTER);
  textSize(18);
  text(textoBoton, x + ancho / 2, y + alto / 2);
}

function cambiarEstado() {
  estado++;
}

function iniciar() {
  estado = 1;
  pausa = 0;
  frameActual = 0;
}

function reiniciar() {
  estado = 0;
  pausa = 0;
  frameActual = 0;
}

function mousePressed() {

  // botoncito del inicio
  if (estado == 0) {
    if (mouseX >= 335 && mouseX <= 465 &&
        mouseY >= 510 && mouseY <= 555) {
      iniciar();
    }
  }

  // botoncito para resetear
  if (estado == 9) {
    if (mouseX >= 325 && mouseX <= 475 &&
        mouseY >= 510 && mouseY <= 555) {
      reiniciar();
    }
  }
}
