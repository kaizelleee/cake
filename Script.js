const box = document.getElementById('box');
const scene = document.getElementById('scene');

box.addEventListener('keydown', function(e) {
  if (e.key === 'Enter' || e.key === ' ') {
    reveal();
  }
});

function reveal() {
  box.style.display = 'none';
  scene.classList.add('visible');
}

function reset() {
  scene.classList.remove('visible');
  box.style.display = 'flex';
}