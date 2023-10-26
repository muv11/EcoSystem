const fileAttachmentBlock = document.getElementById('file_attach');
let userFiles = [];

function openFileAttachmentWindow() {
    document.getElementById('attach_btn').addEventListener('click', function () {
        fileAttachmentBlock.style.display = 'block';
        overlay.style.pointerEvents = 'auto';
    });
}

function closeFileAttachmentWindow() {
    overlay.addEventListener('click', function (event) {
        let isBlockOuter = event.target === overlay;
        if (isBlockOuter) {
            if (fileAttachmentBlock.style.display !== 'none') {
                fileAttachmentBlock.style.display = 'none';
                overlay.style.pointerEvents = 'none';
            }
        }
    });
}

function getUserFiles() {
    return userFiles;
}

function attachFiles() {
    fileAttachmentBlock.addEventListener('dragover', (event) => {
        event.preventDefault();
    });

    if (userFiles.length < 5) {
        fileAttachmentBlock.addEventListener('drop', (event) => {
            event.preventDefault();
            let file = event.dataTransfer.files[0];
            let fileExtension = file.name.split('.').pop();
            if (fileExtension !== 'png' && fileExtension !== 'jpg' && fileExtension !== 'jpeg') {
                return;
            } else {
                if (userFiles.length === 0) {
                    document.getElementById('no_file_attached').style.display = 'none';
                    document.getElementById('attach_common').style.display = 'block';
                }
                userFiles.push(file);
                if (userFiles.length === 1) {
                    document.getElementById('at_1_file_name').innerText = userFiles[0].name;
                }
                if (userFiles.length === 2) {
                    document.getElementById('at_2_file_name').innerText = userFiles[1].name;
                }
                if (userFiles.length === 3) {
                    document.getElementById('at_3_file_name').innerText = userFiles[2].name;
                }
                if (userFiles.length === 4) {
                    document.getElementById('at_4_file_name').innerText = userFiles[3].name;
                }
                if (userFiles.length === 5) {
                    document.getElementById('at_5_file_name').innerText = userFiles[4].name;
                }
            }
        });
    }
}

function saveFiles() {
    document.getElementById('attach_send_btn').addEventListener('click', function () {
        let fileNames = "";
        for (let i = 0; i < userFiles.length; i++) {
            fileNames += userFiles[i].name + " ";
        }
        document.getElementById('note').innerText = fileNames;
        fileAttachmentBlock.style.display = 'none';
        overlay.style.pointerEvents = 'none';
    });
}

openFileAttachmentWindow();
closeFileAttachmentWindow();
attachFiles();
saveFiles();