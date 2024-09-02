function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();



function showModal(id) {
    var modal = document.getElementById(id);
    modal.showModal();
}

function closeModal(id) {
    var modal = document.getElementById(id);
    modal.close();
}

function showModal(dialogId) {
    var dialog = document.getElementById(dialogId);
    if (dialog) {
        dialog.showModal();
    } else {
        console.error("Dialog element not found with ID:", dialogId);
    }
}

function closeModal(dialogId) {
    var dialog = document.getElementById(dialogId);
    if (dialog) {
        dialog.close();
    } else {
        console.error("Dialog element not found with ID:", dialogId);
    }
}