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

function validateLoginFormInput() {
    validateLoginInLoginForm();
    validatePasswordInLoginForm();
}

function validateLoginInRegistrationForm() {
    const emptyMsg = document.getElementById('rgs_login_empty_msg');
    const loginInput = document.getElementById('rgs_login_input');
    const button = document.getElementById('reg_first_btn');
    emptyMsg.style.display = 'none';
    button.disabled = true;
    loginInput.addEventListener('input', function () {
        if (loginInput.value === null || loginInput.value === '') {
            emptyMsg.style.display = 'block';
            document.getElementById('br_reg_1').style.display = 'none';
            button.disabled = true;
        } else {
            emptyMsg.style.display = 'none';
            document.getElementById('br_reg_1').style.display = 'block';
            button.disabled = false;
        }
    });
}

function validatePasswordInRegistrationForm() {
    const emptyMsg = document.getElementById('rgs_password_empty_msg');
    const incorrectMsg = document.getElementById('rgs_password_incorrect_msg');
    const passwordInput = document.getElementById('rgs_password_input');
    const button = document.getElementById('reg_first_btn');
    emptyMsg.style.display = 'none';
    incorrectMsg.style.display = 'none';
    button.disabled = true;
    const regexp = /^(?=.*[A-Z]).{8,}$/;
    passwordInput.addEventListener('input', function () {
        if (passwordInput.value === null || passwordInput.value === '') {
            emptyMsg.style.display = 'block';
            document.getElementById('br_reg_2').style.display = 'none';
            button.disabled = true;
        } else {
            emptyMsg.style.display = 'none';
            document.getElementById('br_reg_2').style.display = 'block';
            button.disabled = false;
        }
        if (!regexp.test(passwordInput.value)) {
            incorrectMsg.style.display = 'block';
            document.getElementById('br_reg_2').style.display = 'none';
            button.disabled = true;
        } else {
            incorrectMsg.style.display = 'none';
            document.getElementById('br_reg_2').style.display = 'block';
            button.disabled = false;
        }
    });
}

function validateEmailInRegistrationForm() {
    const emptyMsg = document.getElementById('rgs_email_empty_msg');
    const incorrectMsg = document.getElementById('rgs_email_incorrect_msg');
    const emailInput = document.getElementById('rgs_email_input');
    const button = document.getElementById('reg_first_btn');
    emptyMsg.style.display = 'none';
    incorrectMsg.style.display = 'none';
    button.disabled = true;
    const regexp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
    emailInput.addEventListener('input', function () {
        if (emailInput.value === null || emailInput.value === '') {
            emptyMsg.style.display = 'block';
            document.getElementById('br_reg_3').style.display = 'none';
            button.disabled = true;
        } else {
            emptyMsg.style.display = 'none';
            document.getElementById('br_reg_3').style.display = 'block';
            button.disabled = false;
        }
        if (!regexp.test(emailInput.value)) {
            incorrectMsg.style.display = 'block';
            document.getElementById('br_reg_3').style.display = 'none';
            button.disabled = true;
        } else {
            incorrectMsg.style.display = 'none';
            document.getElementById('br_reg_3').style.display = 'block';
            button.disabled = false;
        }
    });
}

function validatePhoneInRegistrationForm() {
    const emptyMsg = document.getElementById('rgs_phone_empty_msg');
    const incorrectMsg = document.getElementById('rgs_phone_incorrect_msg');
    const phoneInput = document.getElementById('rgs_phone_input');
    const button = document.getElementById('reg_first_btn');
    emptyMsg.style.display = 'none';
    incorrectMsg.style.display = 'none';
    button.disabled = true;

    $(document).ready(function () {
        $('#rgs_phone_input').mask('+7 (999) 999-99-99')
    });

    phoneInput.addEventListener('input', function () {
        if (phoneInput.value === null || phoneInput.value === '') {
            emptyMsg.style.display = 'block';
            document.getElementById('br_reg_4').style.display = 'none';
            button.disabled = true;
        } else {
            emptyMsg.style.display = 'none';
            document.getElementById('br_reg_4').style.display = 'block';
            button.disabled = false;
        }
        if (phoneInput.value.length < 18) {
            incorrectMsg.style.display = 'block';
            document.getElementById('br_reg_4').style.display = 'none';
            button.disabled = true;
        } else {
            incorrectMsg.style.display = 'none';
            document.getElementById('br_reg_4').style.display = 'block';
            button.disabled = false;
        }
    });
}

function validateNameInRegistrationForm() {
    const emptyMsg = document.getElementById('rgs_name_empty_msg');
    const nameInput = document.getElementById('rgs_name_input');
    const button = document.getElementById('reg_second_btn');
    emptyMsg.style.display = 'none';
    button.disabled = true;
    nameInput.addEventListener('input', function () {
        if (nameInput.value === null || nameInput.value === '') {
            emptyMsg.style.display = 'block';
            document.getElementById('br_reg_5').style.display = 'none';
            button.disabled = true;
        } else {
            emptyMsg.style.display = 'none';
            document.getElementById('br_reg_5').style.display = 'block';
            button.disabled = false;
        }
    });
}

function validateLastNameInRegistrationForm() {
    const emptyMsg = document.getElementById('rgs_last_name_empty_msg');
    const lastNameInput = document.getElementById('rgs_last_name_input');
    const button = document.getElementById('reg_second_btn');
    emptyMsg.style.display = 'none';
    button.disabled = true;
    lastNameInput.addEventListener('input', function () {
        if (lastNameInput.value === null || lastNameInput.value === '') {
            emptyMsg.style.display = 'block';
            document.getElementById('br_reg_6').style.display = 'none';
            button.disabled = true;
        } else {
            emptyMsg.style.display = 'none';
            document.getElementById('br_reg_6').style.display = 'block';
            button.disabled = false;
        }
    });
}

function validateFathersNameInRegistrationForm() {
    const emptyMsg = document.getElementById('rgs_fathers_name_empty_msg');
    const fathersNameInput = document.getElementById('rgs_fathers_name_input');
    const button = document.getElementById('reg_second_btn');
    emptyMsg.style.display = 'none';
    button.disabled = true;
    fathersNameInput.addEventListener('input', function () {
        if (fathersNameInput.value === null || fathersNameInput.value === '') {
            emptyMsg.style.display = 'block';
            document.getElementById('br_reg_7').style.display = 'none';
            button.disabled = true;
        } else {
            emptyMsg.style.display = 'none';
            document.getElementById('br_reg_7').style.display = 'block';
            button.disabled = false;
        }
    });
}

function validateBirthDateInRegistrationForm() {
    const emptyMsg = document.getElementById('rgs_birth_date_empty_msg');
    const birthDateInput = document.getElementById('rgs_birth_date_input');
    const button = document.getElementById('reg_second_btn');
    emptyMsg.style.display = 'none';
    button.disabled = true;
    birthDateInput.addEventListener('input', function () {
        if (birthDateInput.value === null || birthDateInput.value === '') {
            emptyMsg.style.display = 'block';
            document.getElementById('br_reg_8').style.display = 'none';
            button.disabled = true;
        } else {
            emptyMsg.style.display = 'none';
            document.getElementById('br_reg_8').style.display = 'block';
            button.disabled = false;
        }
    });
}

function validateRegistrationFormInput() {
    validateLoginInRegistrationForm();
    validatePasswordInRegistrationForm();
    validateEmailInRegistrationForm();
    validatePhoneInRegistrationForm();
    validateNameInRegistrationForm();
    validateLastNameInRegistrationForm();
    validateFathersNameInRegistrationForm();
    validateBirthDateInRegistrationForm();
}

validateLoginFormInput();
validateRegistrationFormInput();