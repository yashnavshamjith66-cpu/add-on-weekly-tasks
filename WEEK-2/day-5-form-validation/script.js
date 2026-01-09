const form = document.getElementById("loginForm");
const username = document.getElementById("username");
const password = document.getElementById("password");

const userError = document.getElementById("userError");
const passError = document.getElementById("passError");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let isValid = true;

    if (username.value === "") {
        userError.innerText = "Username is required";
        isValid = false;
    } else {
        userError.innerText = "";
    }

    if (password.value === "") {
        passError.innerText = "Password is required";
        isValid = false;
    } else {
        passError.innerText = "";
    }

    if (isValid) {
        alert("Login Successful");
        form.reset();
    }
});


