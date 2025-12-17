/*
    ----------------- VISIBILITE DU PASSWORD -----------------
*/
document.addEventListener("DOMContentLoaded", () => {
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirm_password");
    const afficherPassword = document.getElementById("afficher_password");
    const afficherConfirmPassword = document.getElementById("afficher_confirm_password");

    afficherPassword.addEventListener("click", () => {
        const type = passwordInput.type === "password" ? "text" : "password";

        passwordInput.type = type;

        // Optionnel : changer l’icône en œil barré
        afficherPassword.src = type === "password" ? "/img/visibility_eye.svg" : "/img/visibility_off_eye.svg";
    });

    afficherConfirmPassword.addEventListener("click", () => {
        const type = confirmPasswordInput.type === "password" ? "text" : "password";

        confirmPasswordInput.type = type;

        // Optionnel : changer l’icône en œil barré
        afficherConfirmPassword.src = type === "password" ? "/img/visibility_eye.svg" : "/img/visibility_off_eye.svg";
    });
});

/*
    ----------------- TRAITEMENT ET VALIDATION DES CHAMPS DU FORMULAIRE -----------------
*/

const formRegister = document.getElementById("form_register");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm_password");

//PATTERNS DE VERIFICATION
const usernameRegex = /^[a-zA-Z-\s]+$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

//INITIALISER LES MESSAGES D'ERREURS
document.getElementById("username_error").innerText = "";
document.getElementById("email_error").innerText = "";
document.getElementById("password_error").innerText = "";
document.getElementById("confirm_password_error").innerText = "";

//FONCTIONS DE VALIDATION

function validateUsername() {
    if (username.value.trim() === "") {
        document.getElementById("username_error").innerText = "Le champ username est vide";
        return false;
    } else if (username.value.length < 3 || !usernameRegex.test(username.value)) {
        document.getElementById("username_error").innerText = "Username invalide";
        return false;
    } else {
        document.getElementById("username_error").innerText = "";
        return true;
    }
}

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

function validateConfirmPassword() {
    if (confirmPassword.value.trim() === "") {
        document.getElementById("confirm_password_error").innerText = "Veuillez confirmer le mot de passe";
        return false;
    } else if (confirmPassword.value.trim() !== password.value.trim()) {
        document.getElementById("confirm_password_error").innerText = "Aucune correspondance avec le mot de passe entré";
        return false;
    } else {
        document.getElementById("confirm_password_error").innerText = "";
        return true;
    }
}

//VALIDATION DYNAMIQUE PENDANT QUE L'UTILISATEUR TAPE
username.addEventListener("input", validateUsername);
email.addEventListener("input", validateEmail);
password.addEventListener("input", function () {
    validatePassword();
    if (confirmPassword.value.trim() !== "") {
        validateConfirmPassword();
    }
});
confirmPassword.addEventListener("input", validateConfirmPassword);

//VERIFFICATION SI LES CHAMPS SONT VIDES ET RESPECT DU FORMAT
formRegister.addEventListener("submit", function (e) {
    e.preventDefault();

    const isUsernameValid = validateUsername();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    const isConfirmPasswordValid = validateConfirmPassword();

    //SOUMETTRE LE FORMULAIRE
    if (isUsernameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid) {
        formRegister.submit();
        console.log("Formulaire valide ! Traitement en cours...");
        formRegister.reset();
    }
});
