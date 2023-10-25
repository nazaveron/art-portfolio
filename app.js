const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let painting = false;

// Función para comenzar a dibujar (evento táctil)
function startPainting(event) {
    painting = true;
    const touch = event.touches[0];
    draw(touch);
}

// Función para dejar de dibujar (evento táctil)
function stopPainting() {
    painting = false;
    ctx.beginPath();
}

// Función para dibujar (evento táctil)
function draw(event) {
    if (!painting) return;
    const touch = event.touches[0];

    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    ctx.strokeStyle = 'black';

    ctx.lineTo(touch.clientX - canvas.offsetLeft, touch.clientY - canvas.offsetTop);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(touch.clientX - canvas.offsetLeft, touch.clientY - canvas.offsetTop);
    
    event.preventDefault(); // Evitar el desplazamiento de la pantalla
}

// Agregar eventos táctiles
canvas.addEventListener('touchstart', startPainting);
canvas.addEventListener('touchend', stopPainting);
canvas.addEventListener('touchmove', draw);
