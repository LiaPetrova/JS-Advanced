function solve() {
    document.querySelector('#searchBtn').addEventListener('click', onClick);
    let dataElement = document.querySelectorAll('table.container tbody tr');
    let searchBoxElement = document.getElementById('searchField');

    function onClick() {
        for (let element of dataElement) {
            element.className = '';
            // ili element.classList.remove('select');
            if (searchBoxElement.value !== '' && element.textContent.includes(searchBoxElement.value)) {
                // ili element.innerHTML
                element.className = 'select'
            }
        }
        searchBoxElement.value = '';


    }
}