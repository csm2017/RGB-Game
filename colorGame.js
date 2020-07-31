const squares = document.querySelectorAll('.square');
const squareContainer = document.getElementById('container');
const rgbDisplay = document.getElementById('rgbDisplay');
const messageDisplay = document.getElementById('message');
const h1 = document.querySelector('h1');
const resetButton = document.getElementById('reset');
const modeButtons = document.querySelectorAll(".mode");
const stripe = document.querySelector('#stripe');

let numOfSquares = 6;
let colors = [];
let pickedColor;

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

const reset = () => {
    //generate all new colors
    colors = generateRandomColors(numOfSquares);
    //pick a new random color
    pickedColor = pickColor();
    //change heading color text
    rgbDisplay.textContent = pickedColor;
    //change colors of squares
    for(let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = 'block';
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = 'none';
        }
    }

    h1.style.backgroundColor = 'steelblue';
    messageDisplay.textContent = ' ';
    resetButton.textContent = 'New Colors';
};

const init = () => {

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
        reset();
    });
    
    stripe.addEventListener('click', e => {
        const button = e.target.closest('.mode');
        
        if (button) {
            modeButtons[0].classList.remove('selected');
            modeButtons[1].classList.remove('selected');
            button.classList.add('selected');
        
            button.textContent === 'Easy' ? numOfSquares = 3: numOfSquares = 6;
        
            reset();
        }
    });

    reset();
};

/**
 * INITIALIZE
 */
init();
