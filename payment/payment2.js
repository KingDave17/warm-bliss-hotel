export const roomPrices = {
  "Deluxe Room": "₦90,000",
  "Executive Suite": "₦165,000",
  "Family Suite": "₦200,000",
};

export const formatCardNumber = (value) => {
  return value
    .replace(/[^\d]/g, "")
    .replace(/(.{4})/g, "$1 ")
    .trim();
};

export const formatExpiryDate = (value) => {
  let clean = value.replace(/\D/g, "");
  if (clean.length > 2) {
    return clean.substring(0, 2) + "/" + clean.substring(2, 4);
  }
  return clean;
};

export const isFieldEmpty = (value) => value.trim() === "";

const initializePayment = () => {
  const paymentForm = document.getElementById("secure-payment-form");
  const successModal = document.getElementById("payment-success-modal");
  const payBtn = document.getElementById("pay-button");
  const closeBtn = document.getElementById("success-close-btn");
  const cardNumberInput = document.getElementById("card-number");
  const expiryInput = document.getElementById("expiry-date");

  const roomType = localStorage.getItem("selectedRoom") || "Deluxe Room";
  const roomDisplay = document.getElementById("display-room-type");
  const amountDisplay = document.getElementById("display-amount");

  if (roomDisplay) roomDisplay.textContent = roomType;
  if (amountDisplay) amountDisplay.textContent = roomPrices[roomType] || "₦0";

  cardNumberInput?.addEventListener("input", (e) => {
    e.target.value = formatCardNumber(e.target.value);
  });

  expiryInput?.addEventListener("input", (e) => {
    e.target.value = formatExpiryDate(e.target.value);
  });

  const validate = () => {
    let isValid = true;
    const fields = [
      { id: "cardholder-name", errorId: "name-error" },
      { id: "card-number", errorId: "card-error" },
      { id: "expiry-date", errorId: "expiry-error" },
      { id: "cvv", errorId: "cvv-error" },
    ];

    fields.forEach((field) => {
      const input = document.getElementById(field.id);
      const error = document.getElementById(field.errorId);

      if (input && isFieldEmpty(input.value)) {
        input.classList.add("invalid");
        error?.classList.remove("hidden");
        isValid = false;
      } else if (input) {
        input.classList.remove("invalid");
        error?.classList.add("hidden");
      }
    });
    return isValid;
  };

  paymentForm?.addEventListener("submit", (e) => {
    e.preventDefault();

    if (validate()) {
      if (payBtn) {
        payBtn.disabled = true;
        payBtn.innerHTML =
          '<i class="fas fa-spinner fa-spin"></i> Processing...';
      }

      setTimeout(() => {
        successModal?.classList.remove("hidden");
      }, 2000);
    }
  });

  closeBtn?.addEventListener("click", () => {
    window.location.href = "../dashboard/dashboard.html";
  });
};

initializePayment();
