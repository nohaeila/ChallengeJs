const RANDOM_EN_QUOTE_API_URL = "https://api.quotable.io/random?tags=technology";
const quoteDisplayElement = document.querySelector("#quoteDisplay");
const quoteInputElement = document.querySelector("#quoteInput");
const timerElement = document.querySelector("#timer");
const wordsPerMinuteElement = document.querySelector("#wpm");
const divider = document.querySelector("hr");
const replayButton = document.querySelector("#replayButton");

let timerInterval;
let startTime;
const TIMER_DURATION = 60; // Durée du minuteur en secondes

quoteInputElement.addEventListener("focus", startTimer); // Ajoute un gestionnaire d'événements lorsqu'on clique sur la zone de texte

quoteInputElement.addEventListener("input", () => {
  const quoteArray = quoteDisplayElement.querySelectorAll("span");
  const valueArray = quoteInputElement.value.split("");
  let right = true;
  let count = 0;
  let totalCharacters = 0;

  quoteArray.forEach((characterSpan, i) => {
    const character = valueArray[i];

    if (character == null) {
      characterSpan.classList.remove("right");
      characterSpan.classList.remove("wrong");
      right = false;
    } else if (character === characterSpan.textContent) {
      characterSpan.classList.add("right");
      characterSpan.classList.remove("wrong");
      divider.classList.remove("halp");
      count++;
    } else {
      characterSpan.classList.remove("right");
      characterSpan.classList.add("wrong");
      divider.classList.add("halp");
      right = false;
    }
    totalCharacters++;
  });

  let randomNumber = Math.round((count * 60) / (getTimerTime() * 5) * 10) / 10;
  let progress = (totalCharacters === 0) ? 0 : (count / totalCharacters) * 100;

  if (isNaN(randomNumber)) {
    wordsPerMinuteElement.textContent = "0";
  } else {
    wordsPerMinuteElement.textContent = randomNumber;
  }

  if (right) getNextQuote();

  updateProgressBar(progress);
});

function getRandomQuote() {
  return fetch(RANDOM_EN_QUOTE_API_URL)
    .then((response) => response.json())
    .then((data) => data.content)
    .catch((error) => console.log(error));
}

async function getNextQuote() {
  const quote = await getRandomQuote();
  quoteDisplayElement.innerHTML = "";
  quote.split("").forEach((character) => {
    const characterSpan = document.createElement("span");
    characterSpan.textContent = character;
    quoteDisplayElement.appendChild(characterSpan);
  });
  quoteInputElement.value = null;
}

function startTimer() {
  if (!timerInterval) {
    timerElement.textContent = TIMER_DURATION;
    startTime = new Date().getTime();

    timerInterval = setInterval(() => {
      const elapsedTime = Math.floor((new Date().getTime() - startTime) / 1000);
      const remainingTime = TIMER_DURATION - elapsedTime;

      if (remainingTime <= 0) {
        clearInterval(timerInterval);
        timerInterval = null;
        timerElement.textContent = "0";
        replayButton.style.display = "block"; // Affiche le bouton Replay lorsque le test est terminé
        // Ajoute ici toute autre logique que tu veux exécuter lorsque le minuteur se termine
      } else {
        timerElement.textContent = remainingTime;
      }
    }, 1000);
  }
}

replayButton.addEventListener("click", () => {
  location.reload(); // Recharge la page pour rejouer le test
});

function getTimerTime() {
  return Math.floor((new Date() - startTime) / 1000);
}

function updateProgressBar(progress) {
  const progressBar = document.querySelector('.progress-bar');
  progressBar.style.width = progress + '%';
}

getNextQuote(); // Charge une citation au chargement de la page
