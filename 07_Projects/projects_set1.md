# Projects related to DOM

## Project link:
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode-akywfbcw?file=index.html)

# Solution Code

## Project 1 : Colour Scheme Changer

```javascipt
const buttons = document.querySelectorAll('.button'); 
// returns nodelist

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