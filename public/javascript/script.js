// Show or not about me section in other pages

const about = document.getElementsByClassName("about-section");

if(window.location.pathname === "/about"){
    console.log(about)
    about[0].style.display="none";
}

// we have to put [0], because the about containts an HTMLCollection not the 
// element itself. So inside [0] index we can find the element we want