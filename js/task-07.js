const refs = {
    inputValRef: document.querySelector('#font-size-control'), 
    changeTextRef: document.querySelector('#text')
};
refs.inputValRef.addEventListener('input', onTaretInputEvent);
function onTaretInputEvent(event) {
    const inputValEl = event.currentTarget.value;
    refs.changeTextRef.style.fontSize = `${inputValEl}px`
}