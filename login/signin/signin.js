export const isInputEmpty = (value) => !value || value.trim() === "";

const handleLogin = () => {
  const form = document.getElementById("signin-form");
  const errorMsg = document.getElementById("error-message");

  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    const storedEmail = localStorage.getItem("userEmail");
    const storedPassword = localStorage.getItem("userPassword");

    errorMsg.classList.add("hidden");

    if (isInputEmpty(emailInput.value) || isInputEmpty(passwordInput.value)) {
      errorMsg.classList.remove("hidden");
    } else if (
      emailInput.value !== storedEmail ||
      passwordInput.value !== storedPassword
    ) {
      errorMsg.classList.remove("hidden");
    } else {
      const btn = document.getElementById("signin-btn");
      btn.textContent = "Verifying...";
      btn.style.pointerEvents = "none";

      setTimeout(() => {
        window.location.href = "../../dashboard/dashboard.html";
      }, 1000);
    }
  });
};

handleLogin();
