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
const all = document.querySelectorAll('.item_wrap');
const foods = document.querySelectorAll('.food');
const beverages = document.querySelectorAll('.baverage');
const snacks = document.querySelectorAll('.snack');

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        taps.forEach(tab => {
            tab.classList.remove("active")
        })

        tap.classList.add('active')

        const tabval = tab.getAttribute('data-tabs')
        
        all.forEach(item => {
            item.style.display = 'none'
        })

        if (tabval == 'food') {
            foods.forEach(item => {
                item.style.display = 'block'
            })
        }

        else if (tabval == 'snack') {
            foods.forEach(item => {
                item.style.display = 'block'
            })
        }

        else if (tabval == 'beverage') {
            beverages.forEach(item => {
                item.style.display = 'block'
            })
        }

        else {
            all.forEach(item => {
                item.style.display = 'block'
            })
        }

        console.log(tabval)
    })
})