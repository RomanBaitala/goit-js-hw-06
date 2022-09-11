const refs = {
  inputValRef: document.querySelector('input[type="number"]'),
  createBtnRef: document.querySelector('button[data-create]'),
  destroyBtnRef: document.querySelector('button[data-destroy]')
}
refs.inputValRef.addEventListener('input', onInputQtyEvent)
let inputValEl = 0
function onInputQtyEvent(event){
  const inputValEl = event.currentTarget.value
  return inputValEl
}

refs.createBtnRef.addEventListener('click', createBoxes(onInputQtyEvent))

function createBoxes(amount) {
  // let counter = 0;
  // while (amount > counter) {
  //   const boxValEl = document.createElement('div')
  //   counter += 1;
  //   console.log(counter)
  // }
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
