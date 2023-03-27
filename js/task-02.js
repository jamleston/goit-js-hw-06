const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listToAppend = document.querySelector('#ingredients');


  const arrayOfItems = ingredients.map(el => {
    const newItem = document.createElement('li');
    newItem.textContent = el;
    newItem.classList = 'item';
    return newItem}
  );
  
console.log(arrayOfItems);
listToAppend.append(...arrayOfItems)