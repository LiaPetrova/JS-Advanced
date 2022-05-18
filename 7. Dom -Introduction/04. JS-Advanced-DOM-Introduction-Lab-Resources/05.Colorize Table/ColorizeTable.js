function colorize() {
    let names = Array.from(document.querySelectorAll("table tr"));
    let index = 0;
    for (let row of names) {
        index++;
        if (index % 2 === 0) {
            row.style.backgroundColor = "teal";
        }
    }
}