function validate() {


    const [username, email, password, confirmPassword, companyCheckkbox, companyNumber] =
    document.querySelectorAll('.pairContainer input');
    const companyInfo = document.getElementById('companyInfo');
    let allAreCorrect = false;

    companyCheckkbox.addEventListener('change', () => {
        if (companyCheckkbox.checked) {
            companyInfo.style.display = 'block';
        } else {
            companyInfo.style.display = 'none';
        };
    });

    const addRedBorder = (el, validity) => {
        if (validity === 'invalid') {
            el.style.borderColor = 'red';
            allAreCorrect = false;
        } else if (validity === 'valid') {
            el.style.borderColor = '';
        }
    }
    const submitBtn = document.getElementById('submit');
    submitBtn.addEventListener('click', checkAll);


    function checkIfAllAreValid() {
        const validElement = document.getElementById('valid');
        if (allAreCorrect) {
            validElement.style.display = 'block';
        } else {
            validElement.style.display = 'none';
        };
    }

    function checkAll(e) {
        e.preventDefault();
        allAreCorrect = true;
        checkForValidity(username, /^[a-zA-Z\d]{3,20}$/);
        checkForValidity(password, /^\w{5,15}$/);
        checkForValidity(confirmPassword, /^\w{5,15}$/);
        if (password.value !== confirmPassword.value) {
            // addRedBorder(password, 'invalid');
            addRedBorder(confirmPassword, 'invalid');
        };
        checkForValidity(email, /.*@.*\..*/);
        if (companyInfo.style.display === 'block') {
            checkForValidity(companyNumber, /^[1-9]{1}\d{3}$/);
        }
        checkIfAllAreValid();

    }

    function checkForValidity(element, pattern) {
        if (!pattern.test(element.value)) {
            addRedBorder(element, 'invalid');
        } else {
            addRedBorder(element, 'valid');
        };
    }
}