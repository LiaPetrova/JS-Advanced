function focused() {
    // let divElement = document.querySelector('div');
    // let inputsElements = document.getElementsByTagName('input');
    // divElement.addEventListener('focus', focusHandler(event));
    // // inputsElements.addEventListener('focus', focusHandler(event));

    // function focusHandler(e) {
    //     for (currentInput of inputsElements) {
    //         console.log(currentInput);
    //         console.log(e.target);
    //         if (e.target === currentInput) {
    //             console.log('da');
    //         }
    //     }
    // }
    let inputsElements = document.getElementsByTagName('input');

    for (currentInput of inputsElements) {
        currentInput.addEventListener('focus', focusHandler);
        currentInput.addEventListener('blur', blurHandler)
    }

    function focusHandler(e) {
        e.target.parentNode.className = 'focused';
    }

    function blurHandler(e) {
        e.target.parentNode.classList.remove('focused');
    }
}