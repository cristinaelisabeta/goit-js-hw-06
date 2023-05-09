const counter = document.getElementById('counter');
const valueSpan = document.getElementById('value');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

let counterValue = 0;
valueSpan.textContent = counterValue;

decrementBtn.addEventListener('click', () => {
  counterValue--;
  valueSpan.textContent = counterValue;
});

incrementBtn.addEventListener('click', () => {
  counterValue++;
  valueSpan.textContent = counterValue;
}) 