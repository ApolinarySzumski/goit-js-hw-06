const countCategoriesLength = document.querySelectorAll(".item").length;
console.log(`Number of categories = ${countCategoriesLength}`);
const countCategories = document.querySelectorAll(".item");
for (let i = 0; i < countCategories.length; i++) {
  const heading = countCategories[i].querySelector("h2").innerText;
  const liChildCount = countCategories[i].querySelectorAll("li").length;

  console.log(`Category: ${heading}`);
  console.log(`Elements: ${liChildCount}`);
}
