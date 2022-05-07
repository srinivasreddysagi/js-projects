const form = document.getElementById("user-form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const inputElements = [username, email, password];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkRequired(inputElements);
    doesPasswordsMatch();
});

function checkRequired(inArr) {
    inArr.forEach(element => {
        if(element.value.trim() === '') {
            showError(element, `${element.placeholder} is required`);
        } else {
            showSuccess(element);
        }
    });
}

function doesPasswordsMatch() {
    if(password.value.trim() !== '' && password.value.trim() === confirmPassword.value.trim()) {
        showSuccess(confirmPassword);
    } else {
        showError(confirmPassword, 'Passwords does not match');
    }
}

function showSuccess(element) {
    parentEl = element.parentElement;
    parentEl.className = "input-element success";
}

function showError(element, message) {
    parentEl = element.parentElement;
    parentEl.className = "input-element error";
    parentEl.querySelector('small').innerText = message;
}