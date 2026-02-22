export const getMenuDisplay = (currentDisplay) => {
  return currentDisplay === "block" ? "none" : "block";
};

export const getNavigationPath = () => "../form/form.html";

const toggleMenu = (menu) => {
  if (menu) {
    menu.style.display = getMenuDisplay(menu.style.display);
  }
};

const navigateToBooking = () => {
  window.location.href = getNavigationPath();
};

const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
const reservationBtn = document.getElementById("reservation-button");
const bookBtn = document.querySelector(".hero-btn");

if (hamburger && menu) {
  hamburger.addEventListener("click", () => toggleMenu(menu));
}

if (reservationBtn) {
  reservationBtn.addEventListener("click", navigateToBooking);
}

if (bookBtn) {
  bookBtn.addEventListener("click", navigateToBooking);
}
