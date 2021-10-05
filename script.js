let current = '';
let history = '';


let currentElement = document.getElementById('current');
let historyElement = document.getElementById('history');


function updateView(){
  currentElement.innerText = current;
  historyElement.innerText = history;
}

function computeAns(){
  let result = eval(current);
  history = current + '=';
  current = result;
}


// approach 1: add event listenres to individual buttons
let smallButtons = document.querySelectorAll('.small');
console.dir(smallButtons[0]);
smallButtons.forEach(button => {
    button.addEventListener('click',()=>{
      // if clicked, add that innerText to current
      if(button.innerText != '=') {
        current += button.innerText ;
        console.log(current);
      }
      // only for equal sigs
      else {
        computeAns();
      }
      updateView();
    })
})

let clearButton = document.getElementById('clear');
let deleteButton = document.getElementById('delete');

clearButton.addEventListener('click', ()=> {
  history = '';
  current = 0;
  updateView();
})

deleteButton.addEventListener('click',()=>{
  current = current.slice(0,-1);
  updateView();
})
