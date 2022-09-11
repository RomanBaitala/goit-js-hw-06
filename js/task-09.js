const refs = {
  changeBtnRef: document.querySelector('.change-color'),
  colorValRef: document.querySelector('.color'),
  bodyRef: document.querySelector('body')
}
refs.changeBtnRef.addEventListener('click', onTargetButtonEvent)
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function onTargetButtonEvent() {
  const hexColor = getRandomHexColor()
  refs.bodyRef.style.backgroundColor = `${hexColor}`
  refs.colorValRef.textContent = hexColor
}


