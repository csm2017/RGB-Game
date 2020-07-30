let colors = ['rgb(255, 0, 0)'
            ,'rgb(255, 255, 0)'
            ,'rgb(0, 255, 0)'
            ,'rgb(0, 255, 255)'
            ,'rgb(0, 0, 255)'
            ,'rgb(255, 0, 255)'];

const squares = document.querySelectorAll('.square');
const squareContainer = document.getElementById('container');
const rgbDisplay = document.getElementById('rgbDisplay');

let pickedColor = colors[3];

rgbDisplay.textContent = pickedColor;

for(let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
}

squareContainer.addEventListener('click', e => {
    const square = e.target.closest('.square');
    const clickedColor = square.style.backgroundColor;

    clickedColor === pickedColor ? alert('Correct!') : alert('WRONG');

});