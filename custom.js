function removeSpace(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            result += str[i];
        }
    }
    return result;
}

let sentence = "Hello mom, how are ya! Miss ya much!"
let result = removeSpace(sentence);
console.log(result);