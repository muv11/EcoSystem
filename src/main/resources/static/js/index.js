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

function redirectOnMainPage() {
    document.getElementById('p_main').addEventListener('click', function () {
        window.location.href = 'http://localhost:8080/';
    });
}

function redirectOnEventsPage() {
    document.getElementById('p_events').addEventListener('click', function () {
        window.location.href = 'http://localhost:8080/events';
    });
}

function redirectOnStatisticsPage() {
    document.getElementById('p_statistics').addEventListener('click', function () {
        window.location.href = 'http://localhost:8080/statistics';
    });
}

function redirectOnAccountPage() {
    document.getElementById('p_account').addEventListener('click', function () {
        window.location.href = 'http://localhost:8080/account';
    });
}

function redirect() {
    redirectOnMainPage();
    redirectOnEventsPage();
    redirectOnStatisticsPage();
    redirectOnAccountPage();
}

async function getCurrentUserData() {
    const response = await fetch('http://localhost:8080/api/current-user');
    response.json().then((data) => {
        console.log(data);
        return data;
    });
}

function isUserLoggedIn() {
    const currentUser = getCurrentUserData();
    if (currentUser[0] === null) {
        document.getElementById('p_account').style.display = 'none';
        document.getElementById('p_log_in').style.display = 'block';
        document.getElementById('p_register').style.display = 'block';
    } else {
        document.getElementById('p_account').style.display = 'block';
        document.getElementById('p_log_in').style.display = 'none';
        document.getElementById('p_register').style.display = 'none';
    }
}

openModalWindows();
closeModalWindows();
isUserLoggedIn();
redirect();