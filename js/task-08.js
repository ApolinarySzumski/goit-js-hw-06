const form = document.querySelector(".login-form");

const handleSubmit = (event) => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Please fill text in all the fields");
  }

  if (email.value !== "" && password.value !== "") {
    const object = {
      email: email.value,
      password: password.value,
    };
    console.log(object);

    event.currentTarget.reset();
  }
};
form.addEventListener("submit", handleSubmit);
