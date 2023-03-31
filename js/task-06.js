const inputEl = document.getElementById('validation-input');

inputEl.addEventListener('blur', onCheck);

function onCheck(event) {
    const inputLength = inputEl.value.length;
    const dataLength = inputEl.dataset.length;

    if (inputLength > dataLength || inputLength < dataLength) {
        inputEl.classList.add('invalid');
    } else {
        inputEl.classList.remove('invalid')
        inputEl.classList.add('valid');
    }
}