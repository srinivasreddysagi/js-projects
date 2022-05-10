const form = document.getElementById("user-form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const inputElements = [username, email, password, confirmPassword];

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkRequired(inputElements);
    isValidUsername();
    isValidEmail();
    validatePassword();
    doesPasswordsMatch();
});

function checkRequired(inArr) {
    inArr.forEach((element) => {
        if (element.value.trim() === "") {
            showError(element, `${element.placeholder} is required`);
        } else {
            showSuccess(element);
        }
    });
}

function isValidUsername() {
    if (username.value.trim() !== "") {
        if (/^[^a-zA-Z][a-zA-Z0-9_.]+$/.test(username.value)) {
            showError(username, "Username should start with an alphabet");
        } else if (/^[a-zA-Z][a-zA-Z0-9_.]+$/.test(username.value)) {
            showSuccess(username);
        } else {
            showError(username, "Not a valid username");
        }
    }
}

function isValidEmail() {
    if (email.value.trim() !== "") {
        if (
            /^[^a-zA-Z][a-zA-Z0-9_.]+@[a-zA-Z]+\.([a-zA-z]{2,3})$/.test(
                email.value
            )
        ) {
            showError(email, "Email should start with an alphabet");
        } else if (
            /^[a-zA-Z][a-zA-Z0-9_.]+@[a-zA-Z]+\.([a-zA-z]{2,3})$/.test(
                email.value
            )
        ) {
            showSuccess(email);
        } else {
            showError(email, "Not a valid email");
        }
    }
}

function validatePassword() {
    if (password.value.trim() !== "") {
        if (/^[a-zA-Z0-9!@.#$%^&*]{6,16}$/.test(password.value)) {
            showSuccess(password);
        } else {
            showError(password, "Not a valid password");
        }
    }
}

function doesPasswordsMatch() {
    if (
        confirmPassword.value.trim() !== "" &&
        password.value.trim() === confirmPassword.value.trim()
    ) {
        showSuccess(confirmPassword);
    } else if (
        confirmPassword.value.trim() !== "" &&
        password.value.trim() == !confirmPassword.value.trim()
    ) {
        showError(confirmPassword, "Passwords does not match");
    }
}

function showSuccess(element) {
    parentEl = element.parentElement;
    parentEl.className = "input-element success";
}

function showError(element, message) {
    parentEl = element.parentElement;
    parentEl.className = "input-element error";
    parentEl.querySelector("small").innerText = message;
}
