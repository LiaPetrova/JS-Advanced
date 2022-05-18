function addItem() {
    let ulItemsElement = document.getElementById('items');
    let newItemElement = document.getElementById('newItemText');
    if (newItemElement.value.length === 0) {
        return;
    }
    let newLiElement = document.createElement('li');
    newLiElement.textContent = newItemElement.value;
    ulItemsElement.appendChild(newLiElement);
    let newLinkElement = document.createElement('a');

    // newLinkElement.textContent = '[Delete]';
    let linkText = document.createTextNode('[Delete]');
    newLinkElement.appendChild(linkText);
    newLinkElement.setAttribute('href', '#');
    newLiElement.appendChild(newLinkElement);

    let removeElement = function removeElementFromItems() {

        // newLinkElement.parentNode.parentNode.removeChild(newLiElement);
        newLiElement.remove();
    }
    newLinkElement.addEventListener('click', removeElement);

    newItemElement.value = '';
}