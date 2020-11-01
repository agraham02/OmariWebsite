var navMenu = document.getElementById("btn-Nav-Menu");
var sideNav = document.getElementById("mySidenav");

//* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

let menuIsOpen = false;

function triggerAnimation() {
    navMenu.classList.toggle("change");
}

function toggleDropdown() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
}

function toggleNavMenu() {
    if (!menuIsOpen) {
        /* Set the width of the sidebar to 250px (show it) */
        //sideNav.style.display = "inline";
        sideNav.style.width = "250px";
        menuIsOpen = true;
        navMenu.style.position = "fixed";
    }
    else {
        /* Set the width of the sidebar to 0 (hide it) */
        //sideNav.style.display = "none";
        sideNav.style.width = "0";
        menuIsOpen = false;
        navMenu.style.position = "static";
    }
}



for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", toggleDropdown)
}
  

navMenu.addEventListener("click", triggerAnimation);
navMenu.addEventListener("click", toggleNavMenu);