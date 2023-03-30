const input = document.querySelector("#validation-input");
const inputDataLength = Number(input.getAttribute("data-length"));

// console.log(input);
// console.log(typeof inputDataLength);
// console.log(inputDataLength);

input.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length === inputDataLength) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
});