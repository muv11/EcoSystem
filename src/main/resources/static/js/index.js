const loginBlock = document.getElementById('login');
const firstRegBlock = document.getElementById('reg_first');
const secondRegBlock = document.getElementById('reg_second');
const overlay = document.getElementById('overlay');

function openLoginWindow() {
    document.getElementById('p_log_in').addEventListener('click', function () {
       loginBlock.style.display = 'block';
       overlay.style.pointerEvents = 'auto';
    });
}

function openFirstRegistrationWindow() {
    document.getElementById('p_register').addEventListener('click', function () {
        firstRegBlock.style.display = 'block';
        overlay.style.pointerEvents = 'auto';
    });
}

function openSecondRegistrationWindow() {
    document.getElementById('reg_first_btn').addEventListener('click', function () {
        secondRegBlock.style.display = 'block';
        overlay.style.pointerEvents = 'auto';
    });
}

function openModalWindows() {
    openLoginWindow();
    openFirstRegistrationWindow();
    openSecondRegistrationWindow();
}

function closeLoginModalWindow() {
    overlay.addEventListener('click', function (event) {
        let isBlockOuter = event.target === overlay;
        if (isBlockOuter) {
            if (loginBlock.style.display !== 'none') {
                loginBlock.style.display = 'none';
                overlay.style.pointerEvents = 'none';
            }
        }
    });
}

function closeFirstRegModalWindow() {
    overlay.addEventListener('click', function (event) {
        let isBlockOuter = event.target === overlay;
        if (isBlockOuter) {
            if (firstRegBlock.style.display !== 'none') {
                firstRegBlock.style.display = 'none';
                overlay.style.pointerEvents = 'none';
            }
        }
    });
}

function closeSecondRegModalWindow() {
    overlay.addEventListener('click', function (event) {
        let isBlockOuter = event.target === overlay;
        if (isBlockOuter) {
            if (secondRegBlock.style.display !== 'none') {
                secondRegBlock.style.display = 'none';
                overlay.style.pointerEvents = 'none';
            }
        }
    });
}

function closeModalWindows() {
    closeLoginModalWindow();
    closeFirstRegModalWindow();
    closeSecondRegModalWindow();
}

openModalWindows();
closeModalWindows();