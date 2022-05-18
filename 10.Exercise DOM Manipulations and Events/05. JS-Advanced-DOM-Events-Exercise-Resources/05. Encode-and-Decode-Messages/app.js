function encodeAndDecodeMessages() {
    let mainElement = document.getElementById('main');
    let inputText = mainElement.querySelector('div:nth-child(1) textarea');
    let encodedTextInput = mainElement.querySelector('div:nth-child(2) textarea');

    let buttonToEncode = inputText.parentElement.querySelector('button');
    buttonToEncode.addEventListener('click', encode);

    function encode(e) {
        let encodedText = '';
        for (let letter of inputText.value) {
            let encodedLetter = letter.charCodeAt() + 1;
            encodedText += String.fromCharCode(encodedLetter);
        }
        encodedTextInput.value = encodedText;
        inputText.value = '';
    }

    const buttonToDecode = encodedTextInput.parentElement.querySelector('button');
    buttonToDecode.addEventListener('click', decode);

    function decode() {
        let decodedText = '';
        for (let letter of encodedTextInput.value) {
            let decodedLetter = letter.charCodeAt() - 1;
            decodedText += String.fromCharCode(decodedLetter);
        }
        encodedTextInput.value = decodedText;
    }
}