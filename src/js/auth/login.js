/*----------------- VISIBILITE DU PASSWORD -----------------*/
document.addEventListener("DOMContentLoaded", () => {
    const passwordInput = document.getElementById("password");
    const afficherPassword = document.getElementById("afficher_password");

    afficherPassword.addEventListener("click", () => {
        const type = passwordInput.type === "password" ? "text" : "password";

        passwordInput.type = type;

        // Optionnel : changer l’icône en œil barré
        afficherPassword.src = type === "password" ? "/img/visibility_eye.svg" : "/img/visibility_off_eye.svg";
    });
});

/*----------------- CONNEXION DES USERS -----------------*/
const formLogin = document.getElementById("form_login");
const email = document.getElementById("email");
const password = document.getElementById("password");
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

document.getElementById("email_error").innerText = "";
document.getElementById("password_error").innerText = "";

/*----------------- FONCTIONS DE VALIDATION DES CHAMPS -----------------*/
function validateEmail() {
    if (email.value.trim() === "") {
        document.getElementById("email_error").innerText = "Le champ email est vide";
        return false;
    } else if (!emailRegex.test(email.value)) {
        document.getElementById("email_error").innerText = "Email invalide";
        return false;
    } else {
        document.getElementById("email_error").innerText = "";
        return true;
    }
}

function validatePassword() {
    if (password.value.trim() === "") {
        document.getElementById("password_error").innerText = "Le champ password est vide";
        return false;
    } else if (!passwordRegex.test(password.value)) {
        document.getElementById("password_error").innerText = "Mot de passe invalide";
        return false;
    } else {
        document.getElementById("password_error").innerText = "";
        return true;
    }
}

/*----------------- VERIFIER DYNAMIQUEMENT LES CHAMPS -----------------*/
email.addEventListener("input", validateEmail);
password.addEventListener("input", validatePassword);

/*----------------- VALIDATION DU FORMULAIRE -----------------*/
formLogin.addEventListener("submit", function (e) {
    e.preventDefault();

    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    if (isEmailValid && isPasswordValid) {
        formLogin.submit();
        console.log("Formulaire en cours de traitement...");
        formLogin.reset();
    }
});
