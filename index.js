const card = document.querySelector(".card");
const submitBtn = document.querySelector(".submit-btn");
const circles = document.querySelectorAll(".rating .circle");
const total = document.querySelector(".total");
const selectedRateElement = document.querySelector(".selected");
let SELECTED = false;

// flipping card
submitBtn.onclick = () => {
  if (SELECTED) {
    let selectedRateValue = document.querySelector(".rating .active").textContent;
    selectedRateElement.textContent = parseInt(selectedRateValue);
    total.textContent = `${circles.length}`;
    card.classList.add("fliped");
  }
};

// active circle
circles.forEach((circle) => {
  circle.onclick = () => {
    for (let i = 0; i < circles.length; i++)
        circles[i].classList.remove("active");
    circle.classList.add("active");
    SELECTED = true;
  }
});