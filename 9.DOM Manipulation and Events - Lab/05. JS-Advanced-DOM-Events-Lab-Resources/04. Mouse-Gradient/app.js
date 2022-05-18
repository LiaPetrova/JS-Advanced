function attachGradientEvents() {
    let gradientBoxElement = document.getElementById('gradient-box');
    let resultElement = document.getElementById('result');
    gradientBoxElement.addEventListener('mousemove', mousePercentageWidth);
    gradientBoxElement.addEventListener('mouseout', () => resultElement.textContent = '');


    function mousePercentageWidth(e) {

        let width = e.target.clientWidth - 1; // IMPORTANT this is how we take the width;
        let mouseMoveWidth = e.offsetX;
        let percentage = Math.floor(Number(mouseMoveWidth / width * 100));
        resultElement.textContent = `${percentage}%`
    }

}