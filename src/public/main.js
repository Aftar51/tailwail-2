const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-manu');    
const closeIcon = document.getElementById("nav-close");
const navLinks = document.querySelectorAll(".nav__link")

navLinks.forEach(link =>
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
const all = document.querySelectorAll('.item_wrap');
const iceCream = document.querySelectorAll('.ice-cream');
const teas = document.querySelectorAll('.tea');

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        taps.forEach(tab => {
            tab.classList.remove("active")
        });
        tap.classList.add('active')
        const tabval = tab.getAttribute('data-tabs')
        
        all.forEach(item => {
            item.style.display = 'none'
        });
        if (tabval == 'ice-cream') {
            iceCream.forEach(item => {
                item.style.display = 'block'
            });
        }
        else if (tabval == 'tea') {
            iceCream.forEach(item => {
                item.style.display = 'block'
            });
        }else {
            all.forEach(item => {
                item.style.display = 'block'
            });
        }
    });
});

// DARK LIGHT THEME
const html = document.querySelector("html");
const themeBtn = document.getElementById("theme-toggle");

if(localStorage.getItem("mode") == "dark") {
    darkMode();
} else {
    lightMode();
}

themeBtn.addEventListener('click', (e) => {  
    if(localStorage.getItem("mode") == "light") {
        darkMode();
    } else {
        lightMode();
    }
});

function darkMode () {
    html.classList.add("dark");
    themeBtn.classList.replace("ri-moon-line", "ri-sun-line");
    localStorage.setItem("mode", "dark");
};

function lightMode () {
    html.classList.remove("dark");
    themeBtn.classList.replace("ri-sun-line", "ri-moon-line");
    localStorage.setItem("mode", "light");
};

// SHOW SCROLL UP
const scrollUp = () => {
    const scrollUpBtn = document.getElementById("scroll-up");

    if(this.scrollY >= 250) {
        scrollUpBtn.classList.remove("-button-1/2");
        scrollUpBtn.classList.add("button-4");
    } else {
        scrollUpBtn.classList.add("-button-1/2");
        scrollUpBtn.classList.remove("button-4");
    }
}
window.addEventListener('scroll', scrollUp);

// CHANGE BACKGROUND HEADER
const scrollHeader = () => {
    const header = document.getElementById("header");

    if(this.scrollY >= 50) {
        header.classList.add("border-b", "border-secondaryColor");
    } else {
        header.classList.remove("border-b", "border-secondaryColor");
    }
}
window.addEventListener('scroll', scrollUp);

// SCROLL SECTIONS ACTIVE LINK
const activelink = () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav__link");

    let current = 'home';

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;

        if (this.scrollY >= sectionTop - 60) {
            current = section.getAttribute("id");
        };
    });

    navLinks.forEach((item) => {
        item.classList.remove("text-secondaryColor");
        if (item.href.includes(current)) {
            item.classList.add("text-secondaryColor");
        }
    });
};

window.addEventListener('srcoll', activelink)

// SCROLL REVEAL ANIMATION
const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 400
})

sr.reveal(".home__image");
sr.reveal(".home__content", { origin: "button"});

sr.reveal(".category__card", { interval: 300});

sr.reveal(".about__card-1", { origin: "left"});
sr.reveal(".about__card-2", { origin: "right"});

sr.reveal(".about__img", { origin: "button"});
sr.reveal(".about__content", { origin: "top"});

sr.reveal(".menu__items", { origin: "left"});

sr.reveal(".customer__review", { origin: "right"});

sr.reveal(".footer");