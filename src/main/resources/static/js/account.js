async function getCurrentUserData() {
    const response = await fetch('http://localhost:8080/api/user/current');
    return response.json().then((data) => {
        return data;
    });
}

async function getPersonalDataByLogin() {
    const user = await getCurrentUserData();
    const response = await fetch('http://localhost:8080/api/user/personal-data?login=' + user.login);
    return response.json().then((data) => {
        return data;
    });
}

async function showPersonalData() {
    const currentUser = await getCurrentUserData();
    const personalData = await getPersonalDataByLogin();
    document.getElementById('p_full_name').innerText = personalData.fullName;
    document.getElementById('p_birth_date').innerText = personalData.birthDate;
    document.getElementById('p_phone_number').innerText = personalData.phoneNumber;
    document.getElementById('p_email').innerText = personalData.email;
    document.getElementById('p_login').innerText = currentUser.login;
}

showPersonalData().then();