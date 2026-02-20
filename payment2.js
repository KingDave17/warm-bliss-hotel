document.addEventListener("DOMContentLoaded", () => {
  const paymentForm = document.getElementById("form");
  const modal = document.getElementById("payment-modal");
  const closeModal = document.getElementById("close-modal");
  const modalButton = document.getElementById("modal-button");

  paymentForm.addEventListener("submit", (event) => {
    event.preventDefault();
    modal.classList.remove("hidden");
  });

  closeModal.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  modalButton.addEventListener("click", () => {
    modal.classList.add("hidden");
    window.location.href = "rough1.html";
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const paymentForm = document.getElementById("form");

  paymentForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const cardName = document.getElementById("name").value.trim();
    const cardNumber = document.getElementById("number").value.trim();
    const expiryDate = document.getElementById("expiry-date").value.trim();
    const cvv = document.getElementById("cvv").value.trim();
    const amount = document.getElementById("amount").value.trim();

    if (!cardName || !cardNumber || !expiryDate || !cvv || !amount) {
      alert("Please fill in all fields.");
      return;
    }
  });
});
