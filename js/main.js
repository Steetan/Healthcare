const navMenu =
    document.querySelector(".menu")
const menuBurger =
    document.querySelector(".menu__burger")
const menuList =
    document.querySelector(".menu__list")
const btnHeader =
    document.querySelector(".btn")
const menuLink =
    document.querySelectorAll(".menu__link")

document.addEventListener("click", openMenu)

function openMenu(event) {
    if(event.target.closest(".menu__burger")) {
        navMenu.classList.toggle("menu--active")
    }
    if(event.target.closest(".menu__burger")) {
        menuBurger.classList.toggle("menu__burger--active")
    }
    if(event.target.closest(".menu__burger")) {
        menuList.classList.toggle("menu__list--active")
    }
    if(event.target.closest(".menu__burger")) {
        btnHeader.classList.toggle("btn--active")
    }
    navMenu.className == "menu menu--active"
        ? (document.body.style.overflow = "hidden")
        : (document.body.style.overflow = "auto");
}

menuLink.forEach(function(event) {
    event.addEventListener("click", function(e) {
        e.preventDefault()
        if(event.classList.contains("menu__link--home")) {
            menuLinkFoo(".intro")
        }
        if(event.classList.contains("menu__link--about")) {
            menuLinkFoo(".service")
        }
        if(event.classList.contains("menu__link--apps")) {
            menuLinkFoo(".apps")
        }
        if(event.classList.contains("menu__link--service-blocks")) {
            menuLinkFoo(".service-blocks")
        }
    })
})

function menuLinkFoo(block) {
    document.querySelector(block).scrollIntoView({
        behavior: "smooth", 
        block: "start"
    })
}