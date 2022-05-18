function addItem() {
    let itemsElement = document.getElementById('items');
    let newLiElement = document.createElement('li');
    let inputElement = document.getElementById('newItemText');
    newLiElement.textContent = inputElement.value;
    itemsElement.appendChild(newLiElement);
    inputElement.value = '';
}