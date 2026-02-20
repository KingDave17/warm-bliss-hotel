document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const menu = document.getElementById("menu");

  hamburger.addEventListener("click", () => {
    menu.style.display = menu.style.display === "block" ? "none" : "block";
  });

  const updateDetailsButton = document.getElementById("update-details");
  updateDetailsButton.addEventListener("click", () => {
    alert("Update your details in the profile section.");
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const reservationButton = document.getElementById("reservation-button");
  const paymentSection = document.querySelector(".payment-section");

  reservationButton.addEventListener("click", () => {
    paymentSection.classList.remove("hidden");
    alert("Reservation made! Please complete your payment.");
  });

  reservationButton.addEventListener("click", () => {
    window.location.href = "form.html";
  });

  const paymentForm = document.getElementById("payment-form");

  paymentForm.addEventListener("submit", (event) => {
    event.preventDefault();

    alert("Payment successful! Thank you for choosing Warm Bliss Hotel.");
    paymentForm.reset();
  });
});
