// ********** set date ************
// select span
// const date = (document.getElementById('date').innerHTML =
//   new Date().getFullYear())

// ********** nav toggle ************
// select button and links
// const navBtn = document.getElementById('nav-toggle')
// const links = document.getElementById('nav-links')
// // add event listener
// navBtn.addEventListener('click', () => {
//   links.classList.toggle('show-links')
// })



// ********** smooth scroll ************
// select links


// Select the nav menu and all nav links
const navLinks = document.getElementById("nav-links");
const navLinkItems = document.querySelectorAll(".nav-link");

// Toggle the nav menu on button click
document.getElementById("nav-toggle").addEventListener("click", function() {
  navLinks.classList.toggle("show-links");
});

// Close the nav menu when a link is clicked, but only on small screens
navLinkItems.forEach(link => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 991) { // Check screen width
      navLinks.classList.remove("show-links");
    }
  });
});
