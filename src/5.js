// Random number between 1 and 10
function getRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

// Generate a random word from an array of words
function getRandomWord(words) {
  return words[Math.floor(Math.random() * words.length)];
}
