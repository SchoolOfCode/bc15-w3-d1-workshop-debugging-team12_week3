import { questions } from "./questions.js";

function createTextToDisplayQuestion(questionObject) {
  const choices = Object.entries(questionObject.choices)
    .map(([letter, choice]) => `${letter}) ${choice}`)
    .join("\n");
  const textToDisplay = `#${questionObject.number} ${questionObject.question}\n\n${choices}\n\nPlease enter either A, B, C or D.\n`;
  return textToDisplay;
}

function getSelectedChoiceFromUser(questionText) {
  while (true) {
    const rawChoice = prompt(questionText);
    const standardised = rawChoice?.toUpperCase();
    if (
      "A" === standardised ||
      "B" === standardised ||
      "C" === standardised ||
      "D" === standardised
    ) {
      return standardised;
    } else if (undefined === standardised) {
      return null;
    }
    alert("Invalid selection, please enter either A, B, C or D.");
  }
}

function playGame() {
  let userHasCancelled = confirm(
    "The quiz is about to begin. Are you sure you want to play?"
  );
  let score = 0;
  if (userHasCancelled) {
    for (let i = 0; i < questions.length; i++) {
      const question = questions[i];
      const text = createTextToDisplayQuestion(question);
      const userChoice = getSelectedChoiceFromUser(text);
      userHasCancelled = null === userChoice;

      const userHasAnsweredIncorrectly =
        userChoice !== questions[i].correctChoice;
      if (userHasAnsweredIncorrectly) {
        return alert(
          `Incorrect, you lose! The correct answer was ${questions[i].correctChoice}. Your score was ${score}.`
        );
      }
      if (!userHasAnsweredIncorrectly) {
        score++;
        alert(`Correct! Your score is now ${score}!`);
      }
    }
  }
  if (!userHasCancelled) {
    return alert("You've cancelled the quiz, no more questions will be shown.");
  }

  alert(
    `You've reached the end of the quiz, your score was ${score}. Please play again!`
  );
}

playGame();
