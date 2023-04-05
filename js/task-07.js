const rangeEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

spanEl.style.textSize = rangeEl.value + 'px';

rangeEl.addEventListener('input', onChangeTextSize);

function onChangeTextSize (event) {
    spanEl.style.fontSize = event.currentTarget.value + 'px';
}

