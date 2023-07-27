const userInput = document.getElementById("user-input");
const displayText = document.getElementById("display-element");

const submitButton = (event) => {
  event.preventDefault();
};

const pigLatin = (event) => {
  event.preventDefault();
  const input = userInput.value;
  console.log(input);
  // let inputWord = input.trim().toLowerCase();
  let inputWord = input.replace(/[^0-9a-zA-Z]/g, " ")
  let vowels = ["a", "e", "i", "o", "u"];

  console.log(inputWord);

  const arrayOfWords = inputWord.split(" ");
  console.log(arrayOfWords);

  const pigLatinArray = arrayOfWords.map((word) => {
    for (let i = 0; i < input.length; i++) {
      if (vowels.includes(word[0])) {
        let newWord = word + "yay";
        return  newWord;
      } else if (
        !vowels.includes(word[0]) &&
        !vowels.includes(word[1])
      ) {

        let newWord = word.slice(2) + word.slice(0, 2) + "ay";
 
        return newWord;
      } else {
        let newWord = word.slice(1) + word.slice(0, 1) + "ay";
        return newWord;
      }
    }
  })

  console.log(pigLatinArray.join(" "))
  return displayText.innerHTML = `
    <h3 id='displayText'>${pigLatinArray.join(" ")}</h3>

  `
  // 1. if word begins with a vowel send to one function: adds "yay"

  /*

  // 2. if word begins with a consonant send to another function: splices off beginning, returns word with new ending.
  for (let i = 0; i < input.length; i++) {
    //words start with a vowel, add yay
    if (vowels.includes(inputWord[0])) {
      let newWord = inputWord + "yay";
      return (displayText.innerHTML = newWord);
    } else if (
      !vowels.includes(inputWord[0]) &&
      !vowels.includes(inputWord[1])
    ) {
      //word starts with one consonant
      //remove the  first letter, put it aat the end, and add ay
      //ex. hello
      let newWord = inputWord.slice(2) + inputWord.slice(0, 2) + "ay";
      ////////////                   ello                             h                              ay
      return (displayText.innerHTML = newWord);
    } else {
      let newWord = inputWord.slice(1) + inputWord.slice(0, 1) + "ay";
      return (displayText.innerHTML = newWord);
    }
    // 3. if multiple words, create array of words, loop over them, sending them to different functions and creating a new array with the new words.
  }
  */
};
