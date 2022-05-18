function addHero() {

    console.log('opa');
    let heroNameElement = document.getElementById('hero-name');
    let heroListElement = document.getElementById('hero-list');

    // Adding hero dangerously!!
    // heroListElement.innerHTML += `<li>${heroNameElement.value}</li>`;

    // Adding hero corectly !!
    let newHeroItemElement = document.createElement('li');
    newHeroItemElement.textContent = heroNameElement.value;
    heroListElement.appendChild(newHeroItemElement);

    // adding Hero by cloning Element! also Correct!

    let firstListItemElement = heroListElement.children[0];
    let newClonedItemElement = firstListItemElement.cloneNode();
    newClonedItemElement.textContent = heroNameElement.value;
    heroListElement.prepend(newClonedItemElement);

    //clear Input !

    heroNameElement.value = '';
}

//Deleting last hero!!

function deleteLastHero() {
    let heroListELement = document.querySelector('#hero-list');
    let lastHeroItemElement = heroListELement.children[heroListELement.children.length - 1];
    // heroListELement.removeChild(lastHeroItemElement);
    lastHeroItemElement.remove();
}

// Adding event in 3 way!!
// First : With HTML Attributes Event !
function heroesMouseOverHandler(e) {
    console.log(e.currentTarget); // shows everything where the event is attached.. in this case on the <ul>
    console.log(e.target.textContent); // shows exactly 
}

//Usind DOM Element properties !

let heroNameElement = document.getElementById('hero-name');
heroNameElement.onfocus = function() {
    console.log('Start typing a hero!!');
}

heroNameElement.onblur = () => console.log('Stoopped typing a hero!');

//Using DOM Event handler - Preffered Method!

// function heroNameInputHandler() {
//     console.log(heroNameElement.value);
// }
// heroNameElement.addEventListener('change', heroNameInputHandler);



function heroNameInputHandler(event) {

    console.log(event.currentTarget.value);
}
heroNameElement.addEventListener('input', heroNameInputHandler);