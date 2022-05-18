function validate() {
    let newEmailElement = document.getElementById('email');
    let pattern = /[a-z]+@[a-z]+\.[a-z]+/g;

    newEmailElement.addEventListener('change', function() {
        let match = newEmailElement.value.match(pattern);
        if (!match) {
            newEmailElement.classList.add('error');
        } else {
            newEmailElement.classList.remove('error')
        }
    })
}