const form = document.querySelector(".login-form");

const handleSubmit = (event) => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Please fill text in all the fields");
  }

  console.log(`Email: ${email.value} and password: ${password.value}`);

  event.currentTarget.reset();
};

form.addEventListener("submit", handleSubmit);