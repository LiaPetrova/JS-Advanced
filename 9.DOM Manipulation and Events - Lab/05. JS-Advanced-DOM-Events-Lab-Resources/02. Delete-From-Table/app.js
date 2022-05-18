function deleteByEmail() {
    let tdEmailsElements = document.querySelectorAll('tbody tr td:nth-child(2)');
    // either this way ->
    // let inputElement = document.querySelector('label input');
    // or this way,, we write [0] because the method returns a HTML collection
    let inputElement = document.getElementsByName('email')[0];
    let tbodyElement = document.querySelector('tbody');
    let resultElement = document.getElementById('result')
    for (let singleEmail of tdEmailsElements) {
        if (singleEmail.textContent === inputElement.value) {
            let row = singleEmail.parentNode;
            // either this way ->
            // tbodyElement.removeChild(row);

            //or we can call the parent from row and then delete the child

            row.parentNode.removeChild(row);
            resultElement.textContent = 'Deleted.'
            return;
        } else {
            resultElement.textContent = 'Not found.'
        }
    }
}