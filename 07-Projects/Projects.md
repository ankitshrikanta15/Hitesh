# Projects related to DOM

## Project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code

## Project 1 solution

```javascript

const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body");

buttons.forEach( (button) => {
  console.log(button);
  button.addEventListener("click", function(e){
    console.log(e)
    console.log(e.target)
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id
    }
    if (e.target.id === 'purple') {
      body.style.backgroundColor = e.target.id
    }
  });
});

```

## Project 2 solution

```javascript

const form = document.querySelector('form');
//this will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault(); //stop the default submit

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    // results.innerHTML = `<span>${bmi}</span>`;

    if (bmi <= 18.6) {
      results.innerHTML = `<span>${bmi}</span><br>Under Weight`;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      results.innerHTML = `<span>${bmi}</span><br>Normal Range`;
    } else {
      results.innerHTML = `<span>${bmi}</span><br>Over Weight`;
    }
  }
});


```

## Project 3 solution

```javascript

const clock = document.getElementById('clock');

setInterval(function(){
  let date = new Date();
// console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000)

```

## Project 4 solution

```javascript 

let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');
const p = document.querySelector('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  //validate the message betwwen 1-100
  if (isNaN(guess)) {
    alert('Please enter a valid Number');
  } else if (guess < 1) {
    alert('Please enter a nuber greater than 1');
  } else if (guess > 100) {
    alert('Please enter a number less then 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over, Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  //check random number equal or not or win game low or high
  if (guess === randomNumber) {
    displayMessage('You guessed it right');
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is toooooo low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is toooooo high`);
  }
}

function displayGuess(guess) {
  // low high pass the message
  userInput.value = '';
  guessSlot.innerHTML += `${guess}  `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    displayMessage('');
    playGame = true;
  });
}

```