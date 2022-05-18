const resultElem = document.querySelector(".result");
const containerElem = document.querySelector(".container");
const resultNumber = document.querySelector("#result__number");
let rating = 1;

function submit() {
    resultElem.style.display = "flex";
    containerElem.style.display = "none";
    resultNumber.innerText = rating;
}

function Value(ratingText) {
    rating = ratingText;
}