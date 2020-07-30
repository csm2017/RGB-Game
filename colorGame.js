const squares = document.querySelectorAll('.square');
const squareContainer = document.getElementById('container');
const rgbDisplay = document.getElementById('rgbDisplay');
const messageDisplay = document.getElementById('message');
const h1 = document.querySelector('h1');
const resetButton = document.getElementById('reset');
const easyBtn = document.getElementById('easyBtn');
const hardBtn = document.getElementById('hardBtn');
const stripe = document.querySelector('#stripe');

/***
 * FUNCTIONS
 */
const changeColors = color => {
    // loop through all squares
    for(let i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
    h1.style.backgroundColor = color;
};

const pickColor = () => {
    const num = Math.floor(Math.random() * colors.length);
    return colors[num];
};
const randomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
};

const generateRandomColors = num => {
    //make an array
    let arr = [];
    //add num random colors to array
    for (let i = 0; i < num; i++) {
        //get random color and push into arr
        arr.push(randomColor());
    }
    //return that array
    return arr;
};



/**
 * INITIALIZE
 */
let numOfSquares = 6;
let colors = generateRandomColors(numOfSquares);
let pickedColor = pickColor();

rgbDisplay.textContent = pickedColor;

for(let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
}

/**
 * LISTENERS
 */
squareContainer.addEventListener('click', e => {
    const square = e.target.closest('.square');
    const clickedColor = square.style.backgroundColor;

    //Correct Answer!
    if(clickedColor === pickedColor){
        messageDisplay.textContent = 'Correct!';
        resetButton.textContent = 'Play Again?';
        changeColors(clickedColor);
    } 
    //Wrong Answer
    else {
        square.style.backgroundColor = '#232323';
        messageDisplay.textContent = 'Try Again';
    }

});

resetButton.addEventListener('click', () => {
    //generate all new colors
    colors = generateRandomColors(numOfSquares);
    //pick a new random color
    pickedColor = pickColor();
    //change heading color text
    rgbDisplay.textContent = pickedColor;
    //change colors of squares
    for(let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }

    h1.style.backgroundColor = '#232323';
});

stripe.addEventListener('click', e => {
    const button = e.target.closest('button');
    if (button === easyBtn) {
        easyBtn.classList.add('selected');
        hardBtn.classList.remove('selected');
        numOfSquares = 3;
        colors = generateRandomColors(numOfSquares);
        pickedColor = pickColor();

        rgbDisplay.textContent = pickedColor;
        for(let i = 0; i  < squares.length; i++) {
            if(colors[i]) {
                squares[i].style.backgroundColor = colors[i];
            }
            else {
                squares[i].style.display = 'none';
            }
        }
    }
    else if (button === hardBtn) {
        easyBtn.classList.remove('selected');
        hardBtn.classList.add('selected');
        numOfSquares = 6;
        colors = generateRandomColors(numOfSquares);
        pickedColor = pickColor();

        rgbDisplay.textContent = pickedColor;
        for(let i = 0; i  < squares.length; i++) {
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = 'block';
        }
    }
    
});
