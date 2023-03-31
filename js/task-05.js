const inputEl = document.getElementById('name-input');
const spanEl = document.getElementById('name-output');

inputEl.addEventListener('input', onShowName);

function onShowName (event) {
    if (inputEl.value === '') {
        spanEl.textContent = 'Anonymous'
    } else {
        spanEl.textContent = event.currentTarget.value;
    }
}