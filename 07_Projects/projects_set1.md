# Projects related to DOM

## Project link:
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode-akywfbcw?file=index.html)

# Solution Code

## Project 1 : Colour Scheme Changer

```javascript
const buttons = document.querySelectorAll('.button'); //nodelist
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function(e) {
    console.log(e) //e: MouseEvent object
    console.log(e.target) //HTML span element

    if(e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'white') {
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id
    }

  })
});
```

## Project 2 : BMI Calculator

```javascript
const form = document.querySelector('form');

// const height = parseInt(document.querySelector('#height').value)
//this usecase will give empty values

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = 'Please enter a valid height';
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = 'Please enter a valid weight';
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    //show the result
    results.innerHTML = `<span>BMI: ${bmi}</span>`;

    const newResult = document.createElement('span');
    const lineBreak = document.createElement('br');
    let finalBMIResult;

    if (bmi < 18.6) {
      finalBMIResult = document.createTextNode('Under Weight');
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      finalBMIResult = document.createTextNode('Normal Weight');
    } else {
      finalBMIResult = document.createTextNode('Over Weight');
    }

    newResult.appendChild(finalBMIResult);

    results.appendChild(lineBreak);
    results.appendChild(newResult);
  }
});
```

## Project 3 : Digital Clock

```javascript
const clock = document.getElementById('clock');
//const clock = document.querySelector('#clock')

setInterval(function () {
  let date = new Date();
  //console.log(date.toLocaleTimeString)

  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
```