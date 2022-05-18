function solve() {
    let text = document.getElementById('text').value;
    let convention = document.getElementById('naming-convention').value;
    let result = "";
    if (convention === "Camel Case" || convention === "Pascal Case") {
        let textArr = text.split(" ");
        for (let word of textArr) {
            word = word[0].toUpperCase() + word.slice(1).toLowerCase();
            result += word;
        }
        if (convention === "Camel Case") {
            result = result[0].toLowerCase() + result.slice(1);
        }
    } else {
        result = "Error!";
    }
    let resultElement = document.getElementById("result");
    resultElement.textContent = result;
}