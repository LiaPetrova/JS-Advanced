function extract(content) {
    let pattern = /\([\w\s]+\)/g;
    let textToExtract = document.getElementById(content).textContent;
    let resultArr = textToExtract.match(pattern);
    let text = '';
    for (let singleContent of resultArr) {
        text += singleContent.slice(1, -1) + '; ';
    }
    return text;
}