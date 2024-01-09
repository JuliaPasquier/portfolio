
btn.onclick = function () {
    modal.style.display = "block";
}

close.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


var menuIcon = document.querySelector('.menu-icon');
var menu = document.querySelector('.menu');

// menuIcon.addEventListener('click', function () {
//     menu.classList.toggle('menu-open');
// });
// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.menu-icon')) {
        var dropdowns = document.getElementsByClassName("menu");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}