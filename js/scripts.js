const menu = document.querySelector(".menu")
const hamburger = document.querySelector(".hamburger")
const navClose = document.querySelector(".close")
const navbar = document.querySelector(".navbar")

const navLeft = menu.getBoundingClientRect().left

hamburger.addEventListener("click", ()=>{
    if(navLeft < 0){
        menu.classList.add("show")
        document.body.classList.add("show")
        navbar.classList.add("show")
    }
})

navClose.addEventListener("click", ()=>{
    if(navLeft < 0){
        menu.classList.remove("show")
        document.body.classList.remove("show")
        navbar.classList.remove("show")
    }
})

// Fixed Nav

const navHeight = navbar.getBoundingClientRect().height
window.addEventListener("scroll", () => {
    const scrollHeight = window.pageYOffset;
    if(scrollHeight > navHeight){
        navbar.classList.add("fix-nav")
    }else{
        navbar.classList.remove("fix-nav")
    }
})