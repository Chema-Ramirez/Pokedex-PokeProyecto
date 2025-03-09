document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("loggedIn") === "true") {
        window.location.href = "index.html";
    }
    initializeLoginForm();
});

function initializeLoginForm() {
    const loginForm = document.getElementById("loginForm");
    const errorMessage = document.getElementById("error-message");

    const validUser = {
        username: "admin",
        password: "1234",
    };

    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        validateLogin(username, password, validUser) ? 
            handleLoginSuccess(username) :
            displayError(errorMessage, "Usuario o contraseña incorrectos.");
    });
}

/**
 * @param {string} username
 * @param {string} password
 * @param {Object} validUser
 * @returns {boolean}
 */
function validateLogin(username, password, validUser) {
    return username === validUser.username && password === validUser.password;
}

/**
 * @param {HTMLElement} errorElement 
 * @param {string} message
 */
function displayError(errorElement, message) {
    errorElement.textContent = message;
    errorElement.style.display = "block";
    
    setTimeout(() => {
        errorElement.style.display = "none";
    }, 3000);
}

/**
 * @param {string} username
 */
function handleLoginSuccess(username) {
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("username", username);

    window.location.href = "index.html";
}

const $submit = document.getElementById("submit"),
    $password = document.getElementById("password"),
    $username = document.getElementById("username"),
    $visible = document.getElementById("visible");

document.addEventListener("change", (e) => {
    if (e.target === $visible) {
        $password.type = $visible.checked ? "text" : "password";
    }
});
