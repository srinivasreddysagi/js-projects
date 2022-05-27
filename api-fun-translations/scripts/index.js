"use strict";

const userInput = document.getElementById("text-translate");
const output = document.getElementById("translated");
const form = document.getElementById("userform");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch(
        `https://api.funtranslations.com/translate/minion.json?text=${userInput.value}`
    ).then((res) => res.json()).then((d) => {
        output.innerText = d.contents.translated;
    }).catch((err) => console.log(err));
});
