const guessInput = document.getElementById("guess");
const submitButton = document.getElementById("submit");
const message = document.getElementById("message");
const randomNumber = Math.floor(Math.random() * 10) + 1; // Generate random number
let attempts = 0; // Counter for attempts
console.log(randomNumber);

function checkGuess() {
  const userGuess = Number(guessInput.value);
  attempts++;

  if (guessInput.value === "") {
    message.textContent = "Your input is empty.";
  } else if (userGuess === randomNumber) {
    message.textContent = `Correct! You guessed it in ${attempts} attempts.`;
    submitButton.disabled = true; // Disable further guesses
  } else if (userGuess < randomNumber) {
    message.textContent = "Too low! Try again.";
  } else {
    message.textContent = "Too high! Try again.";
  }
}

function handleKeyPress(event) {
  if (event.key === "Enter") {
    checkGuess();
  }
}
submitButton.addEventListener("click", checkGuess);
guessInput.addEventListener("keydown", handleKeyPress);
