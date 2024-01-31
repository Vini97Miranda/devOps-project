/*=============== SHOW HIDDEN - PASSWORD ===============*/



const showHiddenPass = (inputPass, inputIcon) => {
    const input = document.getElementById(inputPass);
    const iconEye = document.getElementById(inputIcon);
    iconEye.addEventListener('click', () => {
        // Change password to text
        if (input.type === 'password') {
            input.type = 'text';
            iconEye.classList.add('ri-eye-line');
            iconEye.classList.remove('ri-eye-off-line');
        } else {
            // Change to password
            input.type = 'password';
            // Remove icon
            iconEye.classList.remove('ri-eye-line');
            // Add icon
            iconEye.classList.add('ri-eye-off-line');
        }
    });
};
//---- EVENT ----
document.addEventListener('DOMContentLoaded', function () {

    showHiddenPass('input-pass', 'input-icon');

    const loginForm = document.querySelector('.login__form');

    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Empêche le comportement par défaut du formulaire

            const email = document.getElementById('input-email').value;
            const password = document.getElementById('input-pass').value;
            const rememberMe = document.getElementById('input-check').checked;

            const formData = new FormData();
            formData.append('email', email);
            formData.append('password', password);
            formData.append('rememberMe', rememberMe);


            // Here we check if the user is on the Data-Base

            
            window.location.href="assets/php/password.php" + "?email=" + email + "&password=" + password + "&rememberMe=" + rememberMe;
            fetch('/login', {
                method: 'POST',
                body: formData,
            })
                .then(response => response.text())
                .then(data => {
                    console.log(data);
                })
                .catch(error => console.error('Erreur lors de l\'envoi de la requête:', error));
        });
    }
});

//---- SERVER ----
