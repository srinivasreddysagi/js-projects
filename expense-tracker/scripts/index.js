"use strict";

const balance = document.getElementById("balance");
const income = document.getElementById("income");
const expense = document.getElementById("expense");
const form = document.getElementById("user-input");
const note = document.getElementById("note");
const amount = document.getElementById("amount");
const trxContainer = document.getElementById("trxs");

function fetchId() {
    if (localStorage.getItem("id") === null) {
        localStorage.setItem("id", 1);
    } else {
        let id = localStorage.getItem("id");
        localStorage.setItem("id", parseInt(id) + 1);
    }
    return parseInt(localStorage.getItem("id")) - 1;
}

const localStorageTrx = JSON.parse(localStorage.getItem("trxs"));

let trxs = localStorage.getItem("trxs") !== null ? localStorageTrx : [];

function addTransaction(id, note, amount) {
    trxs.push({ id: id, note: note, amount: amount });
}

function deleteTransaction(id) {
    trxs = trxs.filter((trx) => trx.id !== id);
    pushToDB();
    updateState();
    renderDOM();
}

function updateState() {
    const amounts = trxs.map((trx) => trx.amount);
    const add = amounts.filter((amount) => amount > 0);
    const sub = amounts.filter((amount) => amount < 0);
    const inc = add.reduce((acc, amount) => acc + amount, 0);
    const exp = sub.reduce((acc, amount) => acc + amount, 0);

    income.innerHTML = inc;
    expense.innerHTML = Math.abs(exp);
    balance.innerHTML = inc + exp;
}

function addTransactionDOM(transaction) {
    const child = document.createElement("li");
    child.className = transaction.amount > 0 ? "trx in" : "trx out";
    const sign = transaction.amount > 0 ? "₹" : "-₹";

    child.innerHTML = `<button class="trx-del" onclick=deleteTransaction(${
        transaction.id
    })><i class="fa-solid fa-trash-can"></i></button>
        <span class="trx-desc" id="trx-desc">${transaction.note}</span>
        <span class="trx-amount" id="trx-amount">${sign}${Math.abs(
        transaction.amount
    )}</span>`;
    trxContainer.appendChild(child);
}

function pushToDB() {
    localStorage.setItem("trxs", JSON.stringify(trxs));
}

function renderDOM() {
    trxContainer.innerHTML = null;

    trxs.forEach((transaction) => {
        addTransactionDOM(transaction);
    });
}

form.addEventListener("submit", (e) => {
    if (/^-?\d+$/.test(amount.value)) {
        addTransaction(fetchId(), note.value, parseInt(amount.value));
        pushToDB();
        updateState();
        renderDOM();
    }
    e.preventDefault();
});

function init() {
    updateState();
    renderDOM();
}