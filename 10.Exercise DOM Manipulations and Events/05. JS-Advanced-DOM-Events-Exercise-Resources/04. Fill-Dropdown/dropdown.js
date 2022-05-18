function addItem() {
    const selectMenuElement = document.getElementById('menu');
    // const newItemTextElement = document.getElementById('newItemText');
    // const newItemValueElement = document.getElementById('newItemValue');



    let newOptionElement = document.createElement('option');
    newOptionElement.value = newItemValueElement.value;
    newOptionElement.textContent = newItemTextElement.value;
    selectMenuElement.appendChild(newOptionElement);

    newItemValueElement.value = '';
    newItemTextElement.value = '';
}