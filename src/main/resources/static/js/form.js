function validateLoginInLoginForm() {
    const submitButton = document.getElementById('login_form_submit');
    const loginMsg = document.getElementById('lgn_login_empty_msg');
    const loginInput = document.getElementById('lgn_login_input');
    loginMsg.style.display = 'none';
    submitButton.disabled = true;
    loginInput.addEventListener('input', function () {
        if (loginInput.value === null || loginInput.value === '') {
            loginMsg.style.display = 'block';
            document.getElementById('br_login_1').style.display = 'none';
            submitButton.disabled = true;
        } else {
            loginMsg.style.display = 'none';
            document.getElementById('br_login_1').style.display = 'block';
            submitButton.disabled = false;
        }
    });
}

function validatePasswordInLoginForm() {
    const submitButton = document.getElementById('login_form_submit');
    const passwordMsg = document.getElementById('lgn_password_empty_msg');
    const passwordInput = document.getElementById('lgn_password_input');
    passwordMsg.style.display = 'none';
    submitButton.disabled = true;
    passwordInput.addEventListener('input', function () {
        if (passwordInput.value === null || passwordInput.value === '') {
            passwordMsg.style.display = 'block';
            document.getElementById('br_login_2').style.display = 'none';
            submitButton.disabled = true;
        } else {
            passwordMsg.style.display = 'none';
            document.getElementById('br_login_2').style.display = 'block';
            submitButton.disabled = false;
        }
    });
}

validateLoginFormInput();