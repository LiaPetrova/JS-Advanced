function create(words) {
    let contentElement = document.getElementById('content');
    for (let word of words) {
        let newDivElement = document.createElement('div');
        let newPElement = document.createElement('p');
        newPElement.textContent = word;
        newPElement.style.display = 'none';
        newDivElement.appendChild(newPElement);
        contentElement.appendChild(newDivElement);
        newDivElement.addEventListener('click', function() {
            newDivElement.children[0].style.display = 'block';
        });
    }
}