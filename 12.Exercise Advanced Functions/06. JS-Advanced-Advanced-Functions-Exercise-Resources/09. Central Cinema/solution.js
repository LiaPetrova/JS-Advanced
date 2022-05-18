function solve() {
    let addMovieBtn = document.querySelector('#container button');
    addMovieBtn.addEventListener('click', addMovie);

    let moviesOnScreen = document.querySelector('#movies ul');
    // let nameInput = document.querySelector('#container input[placeholder ="Name"]');
    // console.log(nameInput);
    // let hallInput = document.querySelector('#container input[placeholder ="Hall"]').value;
    // let ticketPrice = document.querySelector('#container input[placeholder ="Ticket Price"]').value;
    let [nameInput, hallInput, ticketPrice] = Array.from(document.querySelectorAll('#container input'));


    // function createElement (tagName, selector) {
    //     let elememt = document.createElement(tagName);
    //     let source  = document.querySelector(selector);
    //     elememt.textContent = source.value;
    // }

    function addMovie(e) {
        e.preventDefault();
        // console.log('da');
        // console.log(nameInput.value);
        // console.log(!isNaN(Number(ticketPrice)));
        if (nameInput.value !== '' && hallInput.value !== '' && ticketPrice.value !== '' && !isNaN(Number(ticketPrice.value))) {
            let liElement = document.createElement('li');
            let spanElement = document.createElement('span');
            spanElement.textContent = nameInput.value;
            let strongElement = document.createElement('strong');
            strongElement.textContent = `Hall: ${hallInput.value}`;
            liElement.appendChild(spanElement);
            liElement.appendChild(strongElement);

            let divElement = document.createElement('div');
            let strong2Element = document.createElement('strong');
            strong2Element.textContent = Number(ticketPrice.value).toFixed(2);
            let inputElement = document.createElement('input');
            inputElement.setAttribute('placeholder', 'Tickets Sold');
            let buttonElement = document.createElement('button');
            buttonElement.textContent = 'Archive';
            divElement.appendChild(strong2Element);
            divElement.appendChild(inputElement);
            divElement.appendChild(buttonElement);
            liElement.appendChild(divElement);

            moviesOnScreen.appendChild(liElement);
            buttonElement.addEventListener('click', archive);
            nameInput.value = '';
            ticketPrice.value = '';
            hallInput.value = '';

        }

    }

    function archive(e) {
        let ticketCount = e.target.parentElement.querySelector('input').value;
        if (!isNaN(Number(ticketCount)) && ticketCount !== '') {

            let li2Element = document.createElement('li');
            let spanMovieName = document.createElement('span');
            // console.log(e.target.parentElement);

            let movieName = e.target.parentElement.parentElement.querySelector('span').textContent;
            let price = e.target.parentElement.querySelector('strong').textContent;
            spanMovieName.textContent = movieName;
            let totalPriceElement = document.createElement('strong');
            totalPriceElement.textContent = `Total amount: ${(Number(ticketCount) * Number(price)).toFixed(2)}`;
            let deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            li2Element.appendChild(spanMovieName);
            li2Element.appendChild(totalPriceElement);
            li2Element.appendChild(deleteBtn);

            let archiveSection = document.querySelector('#archive ul');
            archiveSection.appendChild(li2Element);
            e.target.parentElement.parentElement.remove();
            deleteBtn.addEventListener('click', deleteLine);
        }
    }

    function deleteLine(e) {
        e.target.parentElement.remove();
    }


    let clearBtn = document.getElementById('archive').children;
    // console.log(clearBtn[2]);
    clearBtn[2].addEventListener('click', clearAll);

    function clearAll(e) {
        let liElements = Array.from(e.target.parentElement.querySelector('ul').children);
        for (let li of liElements) {
            li.remove();
        }
    }
}