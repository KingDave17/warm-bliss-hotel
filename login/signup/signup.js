export const isInputEmpty = (value) => !value || value.trim() === "";

export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const getSigninPath = () => "../signin/signin.html";

const handleRegistration = () => {
  const form = document.getElementById("up-form");
  const notification = document.querySelector(".success-notification");
  const errorSummary = document.getElementById("error-summary");

  if (!form) return;

  const nameInput = document.getElementById("full-name");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let hasError = false;

    errorSummary?.classList.add("hidden");
    [nameInput, emailInput, passwordInput].forEach((input) =>
      input?.classList.remove("invalid"),
    );

    if (isInputEmpty(nameInput.value)) {
      nameInput.classList.add("invalid");
      hasError = true;
    }

    if (isInputEmpty(emailInput.value) || !isValidEmail(emailInput.value)) {
      emailInput.classList.add("invalid");
      hasError = true;
    }

    if (isInputEmpty(passwordInput.value)) {
      passwordInput.classList.add("invalid");
      hasError = true;
    }

    if (hasError) {
      errorSummary?.classList.remove("hidden");
    } else {
      localStorage.setItem("userName", nameInput.value.trim());
      localStorage.setItem("userEmail", emailInput.value.trim());
      localStorage.setItem("userPassword", passwordInput.value.trim());

      notification?.classList.remove("hidden");

      setTimeout(() => {
        window.location.href = getSigninPath();
      }, 2500);
    }
  });
};

handleRegistration();
