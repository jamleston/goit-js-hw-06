const buttonChangeColorEl = document.querySelector('.change-color');
const spanNewColorEl = document.querySelector('.color');

buttonChangeColorEl.addEventListener('click', onChangeBodyColorAndText);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onChangeBodyColorAndText (event) {
  const newColor = getRandomHexColor();
  changeBodyColor(newColor);
  changeSpan(newColor);
}

function changeBodyColor (color) {
  document.body.style.backgroundColor = color;
}

function changeSpan (color) {
  spanNewColorEl.textContent = `${color}`;
}