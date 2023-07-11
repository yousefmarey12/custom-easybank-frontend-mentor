let img = document.createElement('img')
let btnNav = document.querySelector(".btn-nav")
img.src = './images/icon-hamburger.svg'
let nav = document.querySelector('.navigation')
let ul = document.querySelector(".nav-items")
let navItems = []
for (let navItem of document.querySelectorAll(".nav-li")) {
    navItems.push(navItem)
}
let navMobileOpen = false

function checkMediaQuery() {
if (innerWidth <= 800) {
    btnNav.classList.add("hide")    
    navItems.forEach(item => {
            item.classList.remove("nav-items")
            item.classList.add("hide") 
        })
    nav.appendChild(img)

    if (!navMobileOpen) {
        displayNav()
    }

    
}
else {
    btnNav.classList.remove("hide")
    navItems.forEach(item => {
        item.classList.remove("hide")
        item.classList.add("nav-items")})
    img.remove()
    ul.classList.remove("nav-items-mobile")
    ul.classList.add("nav-items")
        navItems.forEach(item => {
            item.classList.add("hide")
            item.classList.remove("mobileNav")
        })
}
}

function displayNav() {
    navMobileOpen = !navMobileOpen
    if (!navMobileOpen) {
        img.src = './images/icon-close.svg'
        navItems.forEach(item => {
            item.classList.remove("hide")
            item.classList.add("mobileNav")
        })
        ul.classList.add("nav-items-mobile")
        ul.classList.remove("nav-items")
        document.querySelector('.upper-body').classList.add("bg-dark")
        document.querySelector('.main-body-two').classList.add("bg-dark-2")
        document.querySelector('.lower-body').classList.add("bg-dark")
        
       
       } 
    if (navMobileOpen) {
        img.src = './images/icon-hamburger.svg'
        ul.classList.remove("nav-items-mobile")
        ul.classList.add("nav-items")
        navItems.forEach(item => {
            item.classList.add("hide")
            item.classList.remove("mobileNav")
        })
        document.querySelector('.upper-body').classList.remove("bg-dark")
        document.querySelector('.main-body-two').classList.remove("bg-dark-2")
        document.querySelector('.lower-body').classList.remove("bg-dark")

    } 
        
}


window.addEventListener("resize", checkMediaQuery)
img.addEventListener("click", displayNav)


checkMediaQuery()
displayNav()