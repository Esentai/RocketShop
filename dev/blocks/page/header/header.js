function dropdown (n) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    if (dropdowns[n].classList.contains('show')) {
        dropdowns[n].classList.remove('show');
    }
    else {
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
        dropdowns[n].classList.toggle("show");
    }

}

window.onclick = function(event) {
    if (!event.target.matches('.header__dropdown-btn')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}