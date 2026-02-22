export const isEmpty = (value) => value.trim() === "";

export const isCheckOutValid = (checkIn, checkOut) => {
  if (!checkIn || !checkOut) return true;
  return new Date(checkOut) > new Date(checkIn);
};

export const getTodayDate = () => new Date().toISOString().split("T")[0];

const resetErrors = () => {
  const textarea = document.querySelector("textarea");
  textarea?.classList.remove("invalid");

  const inputs = document.querySelectorAll("input");
  const errors = document.querySelectorAll(".error");

  inputs.forEach((input) => input.classList.remove("invalid"));
  errors.forEach((error) => (error.textContent = ""));
};

const setError = (inputElement, errorElement, message) => {
  if (errorElement) errorElement.textContent = message;
  if (inputElement) inputElement.classList.add("invalid");
  return true;
};

const validateForm = () => {
  let hasErrors = false;
  resetErrors();

  const fields = [
    { input: "#Name", err: ".name-err" },
    { input: "#email", err: ".email-err" },
    { input: "#Address", err: ".address-err" },
    { input: "#PhoneNum", err: ".num-err" },
    { input: "#check_in", err: ".in-err" },
    { input: "#check_out", err: ".out-err" },
  ];

  fields.forEach((field) => {
    const el = document.querySelector(field.input);
    const errEl = document.querySelector(field.err);
    if (el && isEmpty(el.value)) {
      hasErrors = setError(el, errEl, "This field is required");
    }
  });

  const check_in = document.querySelector("#check_in");
  const check_out = document.querySelector("#check_out");
  const check_out_err = document.querySelector(".out-err");

  if (check_out && !isEmpty(check_out.value)) {
    if (!isCheckOutValid(check_in.value, check_out.value)) {
      hasErrors = setError(
        check_out,
        check_out_err,
        "Check-out must be after check-in date",
      );
    }
  }

  return !hasErrors;
};

const reservationForm = document.getElementById("reserveForm");
const modal = document.getElementById("reservation-modal");
const closeModal = document.getElementById("close-modal");
const checkInInput = document.querySelector("#check_in");
const checkOutInput = document.querySelector("#check_out");

if (checkInInput && checkOutInput) {
  const today = getTodayDate();
  checkInInput.setAttribute("min", today);
  checkOutInput.setAttribute("min", today);

  checkInInput.addEventListener("change", () => {
    checkOutInput.setAttribute("min", checkInInput.value);
  });
}

reservationForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  if (validateForm()) {
    modal?.classList.remove("hidden");
    setTimeout(() => {
      window.location.href = "../payment/payment2.html";
    }, 2000);
  }
});

closeModal?.addEventListener("click", () => {
  modal?.classList.add("hidden");
});
