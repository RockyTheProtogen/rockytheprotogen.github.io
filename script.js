let mouseX = 0;
let mouseY = 0;
let currentX = 0;
let currentY = 0;

document.addEventListener('mousemove', (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
    updateGradient();
});

function updateGradient() {
    currentX += (mouseX - currentX) * 0.0005;
    currentY += (mouseY - currentY) * 0.0005;
    document.body.style.background = `radial-gradient(circle at ${currentX}px ${currentY}px, rgb(0, 52, 148), rgb(0, 0, 0))`;
    requestAnimationFrame(updateGradient);
}