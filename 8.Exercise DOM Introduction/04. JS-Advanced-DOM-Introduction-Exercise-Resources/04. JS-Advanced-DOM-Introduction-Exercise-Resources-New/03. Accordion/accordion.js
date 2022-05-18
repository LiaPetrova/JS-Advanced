function toggle() {
    // let buttonText = document.querySelector('div div:nth-child(1) .button');
    let buttonText = document.getElementsByClassName('button')[0];
    let extraTextElement = document.getElementById('extra');
    if (buttonText.textContent === 'More') {
        extraTextElement.style.display = 'block';
        buttonText.textContent = 'Less';
    } else {
        extraTextElement.style.display = 'none';
        buttonText.textContent = 'More';
    }
}