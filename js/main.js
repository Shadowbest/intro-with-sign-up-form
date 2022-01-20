const form = document.getElementById("sign-up");
const firstNameInput = form.querySelector("#fname");
const lastNameInput = form.querySelector("#lname");
const emailInput = form.querySelector("#email");
const passwordInput = form.querySelector("#pwd");

form.addEventListener("submit", (e) => {
  e.preventDefault();


  const firstNameValid = checkFirstName(firstNameInput);
  const lastNameValid = checkFirstName(lastNameInput);
  const isEmailValid = checkEmail(emailInput);
  const isPassword   = checkPassword(passwordInput);

  const isFormValid = firstNameValid && lastNameValid
                    && isEmailValid
                    && isPassword;

  if (isFormValid) {
    form.querySelectorAll(".input").forEach(input => {
      input.style.borderColor = "hsl(154, 59%, 51%)";
      input.style.borderWidth = "0.125rem";
    });
  }
  else {
    document.querySelectorAll(".input").forEach(input => input.removeAttribute("style"));
  }
});

// Helpers
function hasValue(input) {
  return input == "" ? false : true;
}

function emailVerification(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function showError(msg, inputEl) {
  const div = inputEl.parentElement;

  div.classList.add("error");
  const error = div.querySelector(".error-msg");
  error.removeAttribute("aria-hidden");
  error.textContent = msg;
}

function validateField(inputEl) {
  const div = inputEl.parentElement;

  div.classList.remove("error");
  const error = div.querySelector(".error-msg");
  error.setAttribute("aria-hidden", "true");
  error.textContent = "";
}

// Validation functions
function checkFirstName(input) {
  const inputValue = input.value.trim();
  let valid = false;

  if ( !hasValue(inputValue) ) {
    showError("First Name cannot be empty", input);
    return valid;
  }
  else {
    validateField(input);
    valid = true;
  }

  return valid;
}

function checkLastName(input) {
  const inputValue = input.value.trim();
  let valid = false;

  if ( !hasValue(inputValue) ) {
    showError("Last Name cannot be empty", input);
    return valid;
  }
  else {
    validateField(input);
    valid = true;
  }

  return valid;
}

function checkEmail(input) {
  const inputValue = input.value.trim();
  let valid = false;

  if ( !hasValue(inputValue) ) {
    showError("Email cannot be empty", input);
    return valid;
  }
  else if ( !emailVerification(inputValue) ) {
    showError("Looks like this is not an email", input);
    return valid;
  }
  else {
    validateField(input);
    valid = true;
  }

  return valid;
}

function checkPassword(input) {
  const inputValue = input.value.trim();
  let valid = false;

  if ( !hasValue(inputValue) ) {
    showError("Password cannot be empty", input);
    return valid;
  }
  else {
    validateField(input);
    valid = true;
  }

  return valid;
}