function validate() {
    let inputEmailEl = document.getElementById('email');
    inputEmailEl.addEventListener('change', checkEmail);
    const emailPattern = /[a-z]+@[a-z]+\.[a-z]+/;

    function checkEmail() {
        if (!emailPattern.test(inputEmailEl.value)) {
            inputEmailEl.classList.add('error');
        } else {
            inputEmailEl.classList.remove('error');
        };
    }
}