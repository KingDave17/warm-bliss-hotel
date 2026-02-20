document.addEventListener("DOMContentLoaded", () => {
  const reviewForm = document.getElementById("review-form");
  const modal = document.getElementById("modal");
  const closeModal = document.getElementById("close-modal");
  const modalButton = document.getElementById("modal-button");
  const sign = document.getElementById("sign");

  reviewForm.addEventListener("submit", (event) => {
    event.preventDefault();
    modal.classList.remove("hidden");
  });

  closeModal.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  modalButton.addEventListener("click", () => {
    modal.classList.add("hidden");
    window.location.href = "index.html";
  });
  sign.addEventListener("click", () => {
    window.location.href = "signin.html";
  });

  // Star rating functionality
  const starRating = document.querySelector('.star-rating');
  const labels = starRating.querySelectorAll('label');
  const inputs = starRating.querySelectorAll('input');

  function updateStars(index) {
    labels.forEach((label, i) => {
      if (i <= index) {
        label.style.color = '#f5a623';
      } else {
        label.style.color = '#ccc';
      }
    });
  }

  function resetStars() {
    const checkedInput = starRating.querySelector('input:checked');
    if (checkedInput) {
      const index = Array.from(inputs).indexOf(checkedInput);
      updateStars(index);
    } else {
      labels.forEach(label => label.style.color = '#ccc');
    }
  }

  labels.forEach((label, index) => {
    label.addEventListener('mouseenter', () => {
      updateStars(index);
    });
    label.addEventListener('mouseleave', resetStars);
  });

  inputs.forEach((input, index) => {
    input.addEventListener('change', () => {
      updateStars(index);
    });
  });

  // Initialize on load
  resetStars();
});

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("us");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    hamburger.innerHTML = navLinks.classList.contains("active") ? "✕" : "☰";
  });
});
