const form = document.getElementById("user-form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const mobile = document.getElementById("mobile");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const message = document.getElementById("message");
const msgcount = document.getElementById("textmsg");
const inputElements = [username, email, mobile, password, confirmPassword];

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkRequired(inputElements);
    isValidUsername();
    isValidEmail();
    isValidMobile();
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
        if (/^[^a-z][a-z0-9_.]+$/gi.test(username.value)) {
            showError(username, "Username should start with an alphabet");
        } else if (/^[a-z][a-z0-9_.]+$/gi.test(username.value)) {
            showSuccess(username);
        } else {
            showError(username, "Not a valid username");
        }
    }
}

function isValidEmail() {
    if (email.value.trim() !== "") {
        if (/^[^a-z][a-z0-9_.]+@[a-z]+\.([a-z]{2,3})$/gi.test(email.value)) {
            showError(email, "Email should start with an alphabet");
        } else if (
            /^[a-z][a-z0-9_.]+@[a-z]+\.([a-z]{2,3})$/gi.test(email.value)
        ) {
            showSuccess(email);
        } else {
            showError(email, "Not a valid email");
        }
    }
}

function isValidMobile() {
    if (mobile.value.trim() !== "") {
        if (/^\d{10}$/.test(mobile.value)) {
            showError(mobile, "Please include country code");
        } else if (!/^\+91[6-9]\d{9}$/.test(mobile.value)) {
            showError(mobile, "Only Indian mobile numbers allowed");
        } else if (/^\+91[6-9]\d{9}$/.test(mobile.value)) {
            showSuccess(mobile);
        } else {
            showError(mobile, "Invalid mobile number");
        }
    }
}

function validatePassword() {
    if (password.value.trim() !== "") {
        let flag = 0;
        if (/^(?=.*\s)/.test(password.value) && flag === 0) {
            showError(password, "Password must not contain Whitespaces");
            flag = 1;
        } else if (!/^.{8,24}$/.test(password.value) && flag === 0) {
            showError(password, "Password must be 8-24 characters long");
            flag = 1;
        } else if (!/^(?=.*[a-z])/.test(password.value) && flag === 0) {
            showError(
                password,
                "Password must have at least one lowercase character"
            );
            flag = 1;
        } else if (!/^(?=.*[A-Z])/.test(password.value) && flag === 0) {
            showError(
                password,
                "Password must have at least one uppercase character"
            );
            flag = 1;
        } else if (!/^(?=.*[0-9])/.test(password.value) && flag === 0) {
            showError(password, "Password must contain at least one digit");
            flag = 1;
        } else if (
            !/^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_???])/.test(
                password.value
            ) &&
            flag === 0
        ) {
            showError(
                password,
                "Password must contain at least one special character"
            );
            flag = 1;
        } else {
            showSuccess(password);
        }
    }
}

function doesPasswordsMatch() {
    if (confirmPassword.value.trim() !== "") {
        if (password.value.trim() === confirmPassword.value.trim()) {
            showSuccess(confirmPassword);
        } else {
            showError(confirmPassword, "Passwords does not match");
        }
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

// message.addEventListener("keyup", () => {
//     msgcount.innerText = 300 - message.value.length;
// });

// message.addEventListener("keydown", () => {
//     msgcount.innerText = 300 - message.value.length;
// });

["keyup", "keydown"].forEach(function (e) {
    message.addEventListener(e, () => {
        msgcount.innerText = 300 - message.value.length;
    });
});
