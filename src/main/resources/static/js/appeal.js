async function getCurrentUserData() {
    const response = await fetch('http://localhost:8080/api/user/current');
    return response.json().then((data) => {
        return data;
    });
}

async function sendRequestParams() {
    document.getElementById('appeal_btn').addEventListener('click', async function () {
        //if getAppealMarkerCoords == undefined -> msg
        let appealForm = new FormData();
        const currentUser = await getCurrentUserData();
        appealForm.append('description', document.getElementById('appeal_textarea').value);
        appealForm.append('longitude', getAppealMarkerCoordinates()[0]);
        appealForm.append('latitude', getAppealMarkerCoordinates()[1]);
        appealForm.append('userFiles', JSON.stringify(getUserFiles()));
        console.log(JSON.stringify(appealForm));
        let request = new XMLHttpRequest();
        const url = 'http://localhost:8080/appeal?dateTimeMs=' + Date.now() + '&login=' + currentUser.login;
        request.open("POST", url, true);
        request.send(appealForm);
    });
}

sendRequestParams().then();