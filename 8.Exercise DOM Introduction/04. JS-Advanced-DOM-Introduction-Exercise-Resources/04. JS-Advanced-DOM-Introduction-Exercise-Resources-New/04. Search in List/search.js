function search() {
    let listOfTownsElement = document.querySelectorAll('#towns li');
    //  let arr = Array.from(listOfTownsElement);
    let matchesCounter = 0;
    let searchTextElement = document.getElementById('searchText');
    for (let town of listOfTownsElement) {
        if (town.textContent.includes(searchTextElement.value)) {
            matchesCounter++;
            town.style.textDecoration = 'underline';
            town.style.fontWeight = 'bold';
        }
    }
    let resultElement = document.getElementById('result');
    resultElement.textContent = `${matchesCounter} matches found`;

}