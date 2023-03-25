const arrayFromListOfCategories = document.querySelectorAll('.item');

const toShowWhatInsideItems = function (array) {
    array.forEach(el => {
        console.log(`Category: ${el.firstElementChild.textContent}`)
        console.log(`Elements: ${el.querySelector('ul').querySelectorAll('li').length}`)})
    
}


console.log(`Number of categories: ${arrayFromListOfCategories.length}`)
toShowWhatInsideItems(arrayFromListOfCategories)