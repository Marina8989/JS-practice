const btn = document.querySelector('button');
const span = document.querySelector('.color');

const colors = ['green', 'red', 'rgb(135, 26, 78, 92)', '#ff4586'];

btn.addEventListener('click', function() {
  let randColor = Math.floor(Math.random() * colors.length);
  
  document.body.style.backgroundColor = colors[randColor];
  span.textContent = colors[randColor];
})