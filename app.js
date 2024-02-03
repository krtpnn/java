let estadoPlanta = 1; // 1: pequeña, 2: regando, 3: creciendo, 4: grande

function cambiarImagen(tipo) {
  const planta = document.getElementById('planta');
  switch (estadoPlanta) {
    case 1:
      planta.src = tipo === 'crecer' ? 'inicial.png' : 'inicial.png';
      break;
    case 2:
      planta.src = tipo === 'crecer' ? 'Diseño sin título (1).png' : 'Diseño sin título.png';
      break;
    case 3:
      planta.src = tipo === 'crecer' ? 'Diseño sin título (2).png' : 'inicial.png';
      break;
    case 4:
      planta.src = tipo === 'crecer' ? 'inicial.png' : 'inicial.png';
      break;
    default:
      break;
  }
}

function cambiarTamaño(height) {
  const planta = document.getElementById('planta');
  planta.style.height = height + 'px';
}

function cambiarAutomaticamente() {
  setInterval(() => {
    estadoPlanta = estadoPlanta < 4 ? estadoPlanta + 1 : 1;
    cambiarImagen('crecer'); // Establecer el tipo como 'crecer' automáticamente
  }, 5000); // Cambia cada 5 segundos (5000 milisegundos)
}

function crecer() {
  if (estadoPlanta < 4) {
    estadoPlanta++;
    cambiarImagen('crecer');
    cambiarTamaño(estadoPlanta * 50); // Ajusta el tamaño según el estadoPlanta
  }
}

function podar() {
  if (estadoPlanta > 1) {
    estadoPlanta--;
    cambiarImagen('podar');
    cambiarTamaño(estadoPlanta * 50); // Ajusta el tamaño según el estadoPlanta
  }
}

// Cambiar la imagen inicial al cargar la página
cambiarImagen('crecer');

// Iniciar cambio automático de imágenes
cambiarAutomaticamente();

// Agregar eventos de clic para los botones de crecer y podar
document.getElementById('btnCrecer').addEventListener('click', () => crecer());
document.getElementById('btnPodar').addEventListener('click', () => podar());
