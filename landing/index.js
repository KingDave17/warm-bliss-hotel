export const getStarColor = (currentIndex, index) => {
  return currentIndex <= index ? "#f5a623" : "#ccc";
};

export const getHamburgerIcon = (isActive) => {
  return isActive ? "✕" : "☰";
};

export const isReviewValid = (text, ratingChecked) => {
  return text.trim().length > 0 && ratingChecked !== null;
};

const updateStars = (labels, index) => {
  labels.forEach((label, i) => {
    label.style.color = getStarColor(i, index);
  });
};

const resetStars = (starRating, inputs, labels) => {
  const checkedInput = starRating.querySelector("input:checked");
  if (checkedInput) {
    const index = Array.from(inputs).indexOf(checkedInput);
    updateStars(labels, index);
  } else {
    labels.forEach((label) => (label.style.color = "#ccc"));
  }
};

const reviewForm = document.getElementById("review-form");
const reviewText = document.getElementById("review");
const reviewError = document.getElementById("review-error");
const starError = document.getElementById("star-error");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("close-modal");
const modalButton = document.getElementById("modal-button");
const sign = document.getElementById("sign");

reviewForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const checkedRating = document.querySelector('input[name="rating"]:checked');

  const hasText = reviewText.value.trim().length > 0;
  const hasRating = checkedRating !== null;

  reviewError.classList.toggle("hidden", hasText);
  starError.classList.toggle("hidden", hasRating);

  if (hasText && hasRating) {
    modal.classList.remove("hidden");
  }
});

closeModal?.addEventListener("click", () => {
  modal.classList.add("hidden");
});

modalButton?.addEventListener("click", () => {
  modal.classList.add("hidden");
  window.location.href = "index.html";
});

sign?.addEventListener("click", () => {
  window.location.href = "./login/signin/signin.html";
});

const starRating = document.querySelector(".star-rating");
if (starRating) {
  const labels = starRating.querySelectorAll("label");
  const inputs = starRating.querySelectorAll("input");

  const handleReset = () => resetStars(starRating, inputs, labels);

  labels.forEach((label, index) => {
    label.addEventListener("mouseenter", () => {
      updateStars(labels, index);
    });
    label.addEventListener("mouseleave", handleReset);
  });

  inputs.forEach((input, index) => {
    input.addEventListener("change", () => {
      updateStars(labels, index);
    });
  });

  handleReset();
}

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("us");

if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    hamburger.innerHTML = getHamburgerIcon(
      navLinks.classList.contains("active"),
    );
  });
}
