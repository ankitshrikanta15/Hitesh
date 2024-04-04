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