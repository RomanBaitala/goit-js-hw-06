const inputNameRef = document.querySelector('#name-input');
const userNameRef = document.querySelector('#name-output');

inputNameRef.addEventListener('input', onInputValue)

function onInputValue (event) {
    const userValueEl = event.currentTarget.value
    userNameRef.textContent = userValueEl || 'Anonymous'
}