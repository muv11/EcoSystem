const fileAttachmentBlock = document.getElementById('file_attach');
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

openFileAttachmentWindow();
closeFileAttachmentWindow();