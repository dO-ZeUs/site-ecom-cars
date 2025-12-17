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
