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

function scrollTabs(direction) {
    const tabContainer = document.querySelector('.tab-container');
    const scrollAmount = 200; // Adjust as needed
    if (direction === 'left') {
        tabContainer.scrollBy({
            top: 0,
            left: -scrollAmount,
            behavior: 'smooth'
        });
    } else if (direction === 'right') {
        tabContainer.scrollBy({
            top: 0,
            left: scrollAmount,
            behavior: 'smooth'
        });
    }
}

/* Tractor */
function showModal(id) {
    var modal = document.getElementById(id);
    modal.showModal();
}

function closeModal(id) {
    var modal = document.getElementById(id);
    modal.close();
}
