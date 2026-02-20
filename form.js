const validateForm = () => {
  let isValid = false;

  const textarea = document.querySelector("textarea");
  textarea.classList = "invalid";

  const inputs = document.querySelectorAll("input");
  const errors = document.querySelectorAll(".error");
  inputs.forEach((input) => input.classList.remove("invalid"));
  errors.forEach((error) => (error.textContent = ""));

  const Name = document.querySelector("#Name");
  const Name_err = document.querySelector(".name-err");

  if (Name.value === "") {
    Name_err.textContent = "This field is required";
    Name.classList.add("invalid");
    isValid = true;
  }
  const email = document.querySelector("#email");
  const email_err = document.querySelector(".email-err");

  if (email.value === "") {
    email_err.textContent = "This field is required";
    email.classList.add("invalid");
    isValid = true;
  }

  const address = document.querySelector("#Address");
  const address_err = document.querySelector(".address-err");

  if (address.value === "") {
    address_err.textContent = "This field is required";
    address.classList.add("invalid");
    isValid = true;
  }

  const PhoneNum = document.querySelector("#PhoneNum");
  const PhoneNum_err = document.querySelector(".num-err");

  if (PhoneNum.value === "") {
    PhoneNum_err.textContent = "This field is required";
    PhoneNum.classList.add("invalid");
    isValid = true;
  }

  const check_in = document.querySelector("#check_in");
  const check_in_err = document.querySelector(".in-err");

  if (check_in.value === "") {
    check_in_err.textContent = "This field is required";
    check_in.classList.add("invalid");
    isValid = true;
  }

  const check_out = document.querySelector("#check_out");
  const check_out_err = document.querySelector(".out-err");

  if (check_out.value === "") {
    check_out_err.textContent = "This field is required";
    check_out.classList.add("invalid");
    isValid = true;
  }

  if (!isValid) {
    document.addEventListener("DOMContentLoaded", () => {
      const reservationForm = document.getElementById("reserveForm");
      const modal = document.getElementById("reservation-modal");
      const closeModal = document.getElementById("close-modal");
      const modalButton = document.getElementById("modal-button");

      reservationForm.addEventListener("submit", (event) => {
        event.preventDefault();
        modal.classList.remove("hidden");
      });
      closeModal.addEventListener("click", () => {
        modal.classList.add("hidden");
      });

      modalButton.addEventListener("click", () => {
        modal.classList.add("hidden");
      });
    });

    document
      .getElementById("reserveForm")
      .addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Regustration succesful!");
        window.location.href = "payment2.html";
      });
  }
};
document.querySelector("#reserveForm").addEventListener("submit", (event) => {
  event.preventDefault();

  validateForm();
});
