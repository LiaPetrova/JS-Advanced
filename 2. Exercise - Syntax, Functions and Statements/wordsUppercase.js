function wordsUppercase (input)  {
    let pattern = /\w+/g;
    let arr = input.match(pattern);
    let words = [];
    for (let i = 0; i < arr.length; i++) {
        let currentWord = arr[i].toUpperCase();
        words.push(currentWord);
    }
    console.log(words.join(', '));

//     let currentWord = '';
//     let words = [];
// for (let i  = 0; i < input.length; i++) {
//     if (input[i] === ',' || input[i]=== ' ' || input[i]=== '?' || input[i]=== '.'){
//         if (currentWord !== '' && currentWord !== ',') {
//             words.push(currentWord);
//             currentWord = '';
//         }
//     } else {
//     currentWord+= (input[i]).toUpperCase();
//     }
// }
// console.log(words.join(', '));
}
wordsUppercase ('Hi, how are you?');
wordsUppercase('hello')