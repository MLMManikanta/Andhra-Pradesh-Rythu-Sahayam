document.addEventListener('DOMContentLoaded', function () {
    var machinesDropdown = document.getElementById('machines-dropdown');
    var machines = document.getElementById('machines');

    machines.addEventListener('click', function () {
        machinesDropdown.classList.toggle('open');
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            machinesDropdown.classList.remove('open');
        }
    });
});
