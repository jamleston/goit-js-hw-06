let counterValue = 0;

const counterOnPage = document.querySelector('#value');
const decrBtn = document.querySelector('button[data-action="decrement"]');
const incrBtn = document.querySelector('button[data-action="increment"]');

decrBtn.addEventListener('click', onMinus);
incrBtn.addEventListener('click', onPlus);

function onMinus () {
    counterValue -= 1;
    counterOnPage.textContent = counterValue;
};;

function onPlus () {
    counterValue += 1;
    counterOnPage.textContent = counterValue;
};

