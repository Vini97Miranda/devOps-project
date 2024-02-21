/*=============== SHOW HIDDEN - PASSWORD ===============*/


function togglePasswordVisibility() {
    var passwordField = document.getElementById("password");
    var eyeIcon = document.querySelector(".eye-icon");

    if (passwordField.type === "password") {
        passwordField.type = "text";
        eyeIcon.classList.remove("fa-eye");
        eyeIcon.classList.add("fa-eye-slash");
    } else {
        passwordField.type = "password";
        eyeIcon.classList.remove("fa-eye-slash");
        eyeIcon.classList.add("fa-eye");
    }
}
//---- EVENT ----
document.addEventListener('DOMContentLoaded', function () {

    togglePasswordVisibility()

    const loginForm = document.querySelector('.lf');

    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const user = sha256(document.getElementById('username').value);
            const password = sha256(document.getElementById('password').value);
            const rememberMe = document.getElementById('rememberMeCheckbox').checked;
            
            const data = {
                username: user,
                password: password,
                bool: rememberMe
            };
            fetch('/login-page', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(response => response.json())
                .then(data => console.log(data))
                .catch(error => console.error('Error:', error));
            // Here we check if the user is on the Data-Base

            /*
            window.location.href="assets/php/password.php" + "?email=" + user + "&password=" + password + "&rememberMe=" + rememberMe;
            fetch('/login', {
                method: 'POST',
                body: formData,
            })
                .then(response => response.text())
                .then(data => {
                    console.log(data);
                })
                .catch(error => console.error('Erreur lors de l\'envoi de la requête:', error));*/
        });
    }
});

//---- SERVER ----


