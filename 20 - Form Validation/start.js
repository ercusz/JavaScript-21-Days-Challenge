(() => {
  // เริ่มเขียนโค้ด

  resetState = (elem) => {
    const smallElem = elem.parentElement.querySelector("small");
    smallElem.innerText = "";
    elem.classList.remove("invalid");
    form.classList.remove("invalid");
  };

  displayError = (elem, message) => {
    const smallElem = elem.parentElement.querySelector("small");
    smallElem.innerText = message;
    elem.classList.add("invalid");
    form.classList.add("invalid");
  };

  displaySuccess = () => {
    document.innerHTML = "";

    const pElem = document.createElement("p");
    pElem.innerHTML = "You have been logged in successfully.";
    pElem.classList.add("success");
    document.body.appendChild(pElem);
  };

  validateEmail = (elem) => {
    const val = elem.value;
    const regex = /\S+@\S+\.\S+/;
    if (!regex.test(val)) {
      displayError(elem, "Email must be valid.");
    }
  };

  validateLength = (elem, min, max) => {
    const val = elem.value;
    if (val.length < min || val.length > max) {
      const elemName = elem.getAttribute("name");
      displayError(
        elem,
        `${elemName} length must be between ${min} and ${max}.`
      );
    }
  };

  validateForm = (e) => {
    e.preventDefault();

    const emailElem = document.getElementById("email");
    const passwordElem = document.getElementById("password");

    resetState(emailElem);
    resetState(passwordElem);

    validateLength(emailElem, 10, 30);
    validateLength(passwordElem, 8, 24);

    validateEmail(emailElem);

    const isValidForm = !form.classList.contains("invalid");
    if (isValidForm) {
      displaySuccess();
    }
  };

  run = () => {
    const formElem = document.getElementById("form");
    formElem.addEventListener("submit", validateForm);
  };

  run();
})();
