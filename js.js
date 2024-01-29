// Not in use... :( 

document.addEventListener('mousemove', (e) => {
    const waterEffect = document.querySelector('.water-effect');
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    waterEffect.style.left = `${mouseX}px`;
    waterEffect.style.top = `${mouseY}px`;
  });