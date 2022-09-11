const refs = {
    validInputRef: document.querySelector('#validation-input'),
}
const inputLen = refs.validInputRef.getAttribute("data-length")
refs.validInputRef.addEventListener('blur', onTargetBtnEvent);
function onTargetBtnEvent(event) {
    const inputValEl = event.currentTarget.value.length === Number(refs.inputLen)
    if (inputValEl) {
        refs.validInputRef.classList = 'valid'
    } else {
        refs.validInputRef.classList = 'invalid'
    }
}