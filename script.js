document.addEventListener('mousemove', (e) => {
    const smoke = document.createElement('div');
    smoke.classList.add('smoke');
    document.getElementById('smoke-container').appendChild(smoke);
  
    const size = Math.random() * 20 + 20; // tamanho de 20px a 40px
    smoke.style.width = `${size}px`;
    smoke.style.height = `${size}px`;
  
    // 🧠 Adiciona um offset para parecer que sai bem do mouse
    smoke.style.left = `${e.clientX - size / 2}px`;
    smoke.style.top = `${e.clientY + 10}px`; // Desloca 10px abaixo do mouse
  
    setTimeout(() => {
      smoke.remove();
    }, 4000);
  });
  