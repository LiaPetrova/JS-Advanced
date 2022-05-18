function solve() {

    document.getElementById('quizzie').addEventListener('click', checkAnswer);
    let rightAnswerCounter = 0;
    const sectionsElements = Array.from(document.querySelectorAll('section'));
    let index = 0;

    function checkAnswer(e) {
        if (e.target.classList.contains('answer-text')) {
            let answer = e.target.textContent;
            if (answer == 'onclick' || answer == 'JSON.stringify()' || answer == 'A programming API for HTML and XML documents') {
                rightAnswerCounter++;
            }
        }
        sectionsElements[index].style.display = 'none';
        if (index < sectionsElements.length - 1) {
            sectionsElements[index + 1].style.display = 'block';
        }
        index++;
        // sectionsElements[index].classList.add('hidden');
        // if (index < sectionsElements.length - 1) {
        //     sectionsElements[index + 1].classList.remove('hidden');
        // }
        // index++;
        if (index === sectionsElements.length) {
            const resultTextElement = document.querySelector('#results h1');
            resultTextElement.parentElement.parentElement.style.display = 'block';

            if (rightAnswerCounter === sectionsElements.length) {
                resultTextElement.textContent = 'You are recognized as top JavaScript fan!';
            } else {
                resultTextElement.textContent = `You have ${rightAnswerCounter} right answers`;
            }
        }
    }

}