import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-analytics.js";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyDESWQGwUjmOkyji5QPOUCQymxglg4Fokg",
  authDomain: "warm-bliss-1bcd5.firebaseapp.com",
  projectId: "warm-bliss-1bcd5",
  storageBucket: "warm-bliss-1bcd5.firebasestorage.app",
  messagingSenderId: "1036469312724",
  appId: "1:1036469312724:web:239610d18e819952882f41",
  measurementId: "G-JV9HFM4ZMV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

document.addEventListener("DOMContentLoaded", () => {
  const formBox = document.querySelector(".box");
  formBox.style.animation = "slideDown 1s forwards";

  const form = document.querySelector("form");
  const name = form.querySelector('input[type="text"]');
  const email = form.querySelector('input[type="email"]');
  const password = form.querySelector('input[type="password"]');

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let valid = true;

    if (!name.value.trim()) {
      valid = false;
      alert("Please enter your Full Name.");
    }

    if (!email.value.trim()) {
      valid = false;
      alert("Please enter your Email Address.");
    }

    if (!password.value.trim()) {
      valid = false;
      alert("Please enter your Password.");
    }

    if (valid) {
      localStorage.setItem("userName", name.value.trim());
      
      const notification = document.querySelector(".success-notification");
      notification.classList.remove("hidden");
      
      setTimeout(() => {
        window.location.href = "signin.html";
      }, 2500);
    }
  });
});
