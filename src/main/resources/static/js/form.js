const loginMsg = document.getElementById('lgn_login_empty_msg');
const passwordMsg = document.getElementById('lgn_password_empty_msg');

function validateLoginFormInput() {
    const submitButton = document.getElementById('login_form_submit');
    const loginInput = document.getElementById('lgn_login_input');
    loginMsg.style.display = 'none';
    loginInput.addEventListener('input', function () {
        if (loginInput.value === null || loginInput.value === '') {
            loginMsg.style.display = 'block';
            submitButton.disabled = true;
        } else {
            loginMsg.style.display = 'none';
            submitButton.disabled = false;
        }
    });

    const passwordInput = document.getElementById('lgn_password_input');
    passwordMsg.style.display = 'none';
    passwordInput.addEventListener('input', function () {
        if (passwordInput.value === null || passwordInput.value === '') {
            passwordMsg.style.display = 'block';
            submitButton.disabled = true;
        } else {
            passwordMsg.style.display = 'none';
            submitButton.disabled = false;
        }
    });
}

validateLoginFormInput();