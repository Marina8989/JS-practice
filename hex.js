const colorArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E'];

const btn = document.querySelector('button');
const span = document.querySelector('.color');


btn.addEventListener('click', function() {
    let num = '#';
    for (let i = 0; i < 6; i++) {
        num += colorArray[randNum()];
        document.body.style.backgroundColor = num;
        span.textContent = num;
    }
});

function randNum() {
    return Math.floor(Math.random() * colorArray.length);
}