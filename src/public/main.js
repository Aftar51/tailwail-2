const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-manu');    
const closeIcon = document.getElementById("nav-close");
const navLink = document.querySelectorAll(".nav__link")

navLink.forEach(link =>
    link.addEventListener("click", () => {  
        navMenu.classList.add('hidden')
    })
)

closeIcon.addEventListener("click", () => {
    navMenu.classList.add('hidden')
})

hamburger.addEventListener("click", () => {
    navMenu.classList.remove('hidden')
})

// TABS
const tabs = document.querySelectorAll(".tabs_wrap ul li");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        taps.forEach(tab => {
            tab.classList.remove("active")
        })

        tap.classList.add('active')
    })
})