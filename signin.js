document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = form.querySelector('input[type="email"]');
    const password = form.querySelector('input[type="password"]');
    let valid = true;

    if (!email.value.trim()) {
      valid = false;
      alert("Please enter your Email Address.");
    }

    if (!password.value.trim()) {
      valid = false;
      alert("Please enter your Password.");
    }

    if (valid) {
      window.location.href = "rough1.html";
    }
  });
});
