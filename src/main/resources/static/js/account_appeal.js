//30 символов текста

async function getAppealsByCurrentUser() {
    const response = await fetch('http://localhost:8080/api/appeals/current-user');
    return response.json().then((data) => {
        return data;
    });
}

async function showAppealsByPage(page) {
    const appeals = await getAppealsByCurrentUser();
    if (appeals.length != null) {

    }
}

let appeals = await getAppealsByCurrentUser();
let maxPages = appeals.length / 5;
if (appeals.length % 5 > 0) maxPages++;

function turnPage() {
    let page = 0;
    document.getElementById('left_arrow').addEventListener('click', function () {
        if (page > 0) {
            page--;
            //показать другие элементы
        }
    });
    document.getElementById('right_arrow').addEventListener('click', function () {
        //пока не достигнут предел элементов
        page++;
        //показать другие элементы
    });
}