const colorBg = document.querySelector("#colorBg");
const colorBtn = document.querySelector("#colorBtn");
const sizeBtn = document.querySelector("#sizeBtn");
const resizeText = document.querySelector("#resizeText");

colorBtn.addEventListener("click", function () {
  colorBg.classList.toggle("active");
});

sizeBtn.addEventListener("click", function () {
  resizeText.classList.toggle("on");
});

const animalImg = document.getElementById("animal");
const toggleBtn = document.getElementById("animalBtn");

let isCat = true;

toggleBtn.addEventListener("click", function () {
  if (isCat) {
    animalImg.src = "https://placedog.net/200/200";
    toggleBtn.textContent = "Show Cat";
    isCat = false;
  } else {
    animalImg.src = "https://placekitten.com/200/200";
    toggleBtn.textContent = "Show Dog";
    isCat = true;
  }
});

let count = 0;

document.getElementById("countBtn").addEventListener("click", function () {
  count++;
  document.getElementById("count").textContent = count;
});
