function extractText() {
    const textAreaElement = document.getElementById('result');
    const liElements = document.querySelectorAll('ul#items li');
    // textAreaElement.textContent = liElements.textContent;

    for (let line of liElements) {
        textAreaElement.value += line.textContent + '\n';
    }
}