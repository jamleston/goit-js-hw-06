const createBtnEl = document.querySelector('button[data-create]');
const destroyBtnEl = document.querySelector('button[data-destroy]');
const inputEl = document.querySelector('input[type=number]');

createBtnEl.addEventListener('click', onCreateBoxes)

function onCreateBoxes (amount)

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

