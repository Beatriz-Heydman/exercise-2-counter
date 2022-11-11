const counterResult = document.querySelector(".counter_result");
let counterNumber = 0;

function increaseCounter() {
  counterNumber++;
  counterResult.innerHTML = counterNumber;
}

function decreaseCounter() {
  if (counterNumber > 0) {
    counterNumber--;
  }
  counterResult.innerHTML = counterNumber;
}

function resetCounter() {
  counterNumber = 0;
  counterResult.innerHTML = counterNumber;
}
