"use strict";

const currencyOneEl = document.getElementById("c-one");
const currencyTwoEl = document.getElementById("c-two");
const valueOne = document.getElementById("curr-one");
const valueTwo = document.getElementById("curr-two");
const swap = document.getElementById("swap");

function calculate() {
    fetch(
        `https://v6.exchangerate-api.com/v6/e523d3136fecfbeeb245047a/latest/${currencyOneEl.value}`
    )
        .then((response) => response.json())
        .then((data) => {
            valueTwo.value =
                data.conversion_rates[currencyTwoEl.value] * valueOne.value;
        });
}

currencyOneEl.addEventListener('change', calculate);
currencyTwoEl.addEventListener('change', calculate)
valueOne.addEventListener('input', calculate);
valueTwo.addEventListener('input', calculate);

swap.addEventListener('click', () => {
    const temp = currencyOneEl.value;
    currencyOneEl.value = currencyTwoEl.value;
    currencyTwoEl.value = temp;
    calculate();
});