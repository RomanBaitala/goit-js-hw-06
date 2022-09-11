const refs = {
    validInputRef: document.querySelector('#validation-input')
}
refs.validInputRef.addEventListener('blur', onTargetBtnEvent);
function onTargetBtnEvent(event) {
    const inputValEl = event.currentTarget.value
    if (inputValEl.length < refs.validInputRef.dataset.length || 
        inputValEl.length > refs.validInputRef.dataset.length) {
        refs.validInputRef.classList = 'invalid'
    } else {
        refs.validInputRef.classList = 'valid'
    }
}