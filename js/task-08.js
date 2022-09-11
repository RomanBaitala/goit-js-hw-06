const refs = {
    form: document.querySelector('.login-form')
};
refs.form.addEventListener('submit', onTargetSubmitEvent)
function onTargetSubmitEvent(event) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const userData = {}
    if (event.currentTarget.email.value === "" 
    || event.currentTarget.password.value === "") {
        alert("Будь ласка заповніть всі поля")
    } else{
        formData.forEach((element, value) => {
            userData[value] = element
        });
        console.log(userData)
        event.currentTarget.reset()
    }
}