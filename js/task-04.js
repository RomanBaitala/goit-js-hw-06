const decButtonRef = document.querySelector('button[data-action="decrement"]');
const incButtonRef = document.querySelector('button[data-action="increment"]');
const resultRef = document.querySelector('#value')
let counterValue = 0;
decButtonRef.addEventListener('click', () => {
    counterValue -= 1;
    resultRef.textContent = counterValue
})
incButtonRef.addEventListener('click', () => {
    counterValue += 1;
    resultRef.textContent = counterValue
})