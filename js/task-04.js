let counterValue = 0;

const counterValueHTML = document.querySelector("#value");
// console.log(counterValueHTML);
const decreaseButton = document.querySelector(`[data-action="decrement"]`);
// console.log(decreaseButton);
const increaseButton = document.querySelector(`[data-action="increment"]`);
// console.log(increaseButton);

const updateCounterValue = (newValue) => {
  counterValue = newValue;
  counterValueHTML.innerText = counterValue;
};

const increase = () => {
  updateCounterValue(counterValue + 1);
};

const decrease = () => {
  updateCounterValue(counterValue - 1);
};

increaseButton.addEventListener("click", increase);
decreaseButton.addEventListener("click", decrease);

// console.log(counterValue);

// Second version

// let counterValue = 0;

// const counterValueHTML = document.querySelector("#value");
// console.log(counterValueHTML);
// const decreaseButton = document.querySelector(`[data-action="decrement"]`);
// console.log(decreaseButton);
// const increaseButton = document.querySelector(`[data-action="increment"]`);
// console.log(increaseButton);

// const updateCounterValue = () => {
//   counterValueHTML.innerText = counterValue;
// };

// const increase = () => {
//   counterValue++;
//   updateCounterValue();
// };

// const decrease = () => {
//   counterValue--;
//   updateCounterValue();
// };

// increaseButton.addEventListener("click", increase);
// decreaseButton.addEventListener("click", decrease);

// console.log(counterValue);
