const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listToAppend = document.querySelector('#ingredients');

const createItemsFromArray = function (array) {
  const newItem = document.createElement('li');
  newItem.classList.add('item');
  const arrayOfItems = array.forEach(el => {
    newItem.textContent = el;
    return newItem}
  );
  
  console.log(newItem);
  console.log(arrayOfItems);

  listToAppend.append('newItem')
};

createItemsFromArray(ingredients)