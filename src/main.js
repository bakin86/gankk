import './style.css'

document.addEventListener('DOMContentLoaded', () => {
  const strelkaBoard = document.getElementById('strelka-board');
  
  // 2D Mouse Parallax
  window.addEventListener('mousemove', (e) => {
    // Disable parallax entirely on mobile viewports
    if (window.innerWidth <= 768) return;

    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;
    
    // Subtle shift for the entire board
    if (strelkaBoard) {
      strelkaBoard.style.transform = `translate(${x * -2}vw, ${y * -2}vh)`;
    }
  });

  // Adding hover effects to the 3D typography
  document.querySelectorAll('.side-face, .top-face').forEach(face => {
    face.style.transition = 'transform 0.1s ease-out, background 0.3s ease';
    face.addEventListener('mouseenter', () => {
      face.style.background = '#1A2870'; // slightly darker blue
    });
    face.addEventListener('mouseleave', () => {
      face.style.background = 'var(--bg)';
    });
  });
});
