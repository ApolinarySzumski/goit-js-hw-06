const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const addFirstListItem = document.createElement(`li`);
addFirstListItem.textContent = ingredients[0];
addFirstListItem.classList.add("item");
// console.log(addFirstListItem);

const addSecondListItem = document.createElement(`li`);
addSecondListItem.textContent = ingredients[1];
addSecondListItem.classList.add("item");
// console.log(addSecondListItem);

const addThirdListItem = document.createElement(`li`);
addThirdListItem.textContent = ingredients[2];
addThirdListItem.classList.add("item");
// console.log(addThirdListItem);

const addFourthListItem = document.createElement(`li`);
addFourthListItem.textContent = ingredients[3];
addFourthListItem.classList.add("item");
// console.log(addFourthListItem);

const addFivethListItem = document.createElement(`li`);
addFivethListItem.textContent = ingredients[4];
addFivethListItem.classList.add("item");
// console.log(addFivethListItem);

const addSixthListItem = document.createElement(`li`);
addSixthListItem.textContent = ingredients[5];
addSixthListItem.classList.add("item");
// console.log(addSixthListItem);

const ingredientsList = document
  .querySelector("#ingredients")
  .append(
    addFirstListItem,
    addSecondListItem,
    addThirdListItem,
    addFourthListItem,
    addFivethListItem,
    addSixthListItem,
  );
