const elForm = document.querySelector(".form");
const elSelect = document.querySelector(".select");
const elInput = document.querySelector(".input");
const elResult = document.querySelector(".result");
const elResultTwo = document.querySelector(".result-two");
const elTitle = document.querySelector(".title");

elForm.addEventListener("submit", function (evtbek) {
    evtbek.preventDefault()

    elResult.textContent = elSelect.value + " "
    elResultTwo.textContent = " " + elInput.value

    elTitle.textContent= "jang"
});