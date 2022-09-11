const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const itemArr = ingredients.map(ingredient => {
  const listItemEl = document.createElement('li')
  listItemEl.classList.add('item')
  listItemEl.textContent = `${ingredient}`
  return listItemEl
})
const listEl = document.querySelector('#ingredients')
listEl.append(...itemArr)

// ====================== VARIANT 2 ===================//
// const itemArr = [] 
// for (let i= 0; i< ingredients.length; i+=1) {
//   const listItemEl = document.createElement('li')
//   listItemEl.classList.add('item')
//   listItemEl.textContent = `${ingredients[i]}`
//   itemArr.push(listItemEl)
// }