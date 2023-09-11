const form = document.querySelector("#form");

const feedback = document.querySelector("#feedback");

const button = document.querySelector("button");
button.addEventListener("click", handleSubmit);

const rateWrapper = document.querySelector(".rate-wrapper");
const rates = rateWrapper.querySelectorAll("span");

rates.forEach((rate) => {
  rate.addEventListener("click", (e) => handleSelected(e));
});

const selectedText = document.querySelector(".status");
const statusSpan = selectedText.querySelector("span");

let rate = 0;

function handleSelected(e) {
  rates.forEach((rate) => {
    rate.classList.remove("active");
  });
  e.target.classList.add("active");
  rate = e.target.innerHTML;
}

function handleSubmit() {
  form.classList.add("hidden");
  form.classList.remove("visible");
  feedback.classList.add("visible");
  feedback.classList.remove("hidden");
  statusSpan.innerHTML = rate;
}
