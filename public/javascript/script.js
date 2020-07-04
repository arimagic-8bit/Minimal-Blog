// Show or not about me section in other pages

const about = document.getElementsByClassName("about-section");

if(window.location.pathname === "/about"){
    about.style.display='none';
}