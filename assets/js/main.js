// Open menu navbar
const navbarCloseBtn = document.querySelector('.close')
const navbarOpenBtn = document.querySelector('.open')
const navbarMenu = document.querySelector('.navbar__list')

const hideMenuNavbar = () => {
    navbarMenu.style.right = '-4rem'
    navbarCloseBtn.style.display = 'none'
    navbarOpenBtn.style.display = 'block'
}

const showMenuNavbar = () => {
    navbarMenu.style.right = '0'
    navbarOpenBtn.style.display = 'none'
    navbarCloseBtn.style.display = 'block'
}

navbarCloseBtn.addEventListener('click', hideMenuNavbar)
navbarOpenBtn.addEventListener('click', showMenuNavbar)



// Close menu navbar when clicking any option
if(window.innerWidth > 1) {
    document.querySelectorAll('.navbar__list .navbar__item .navbar__link').forEach(navItems => {
        navItems.addEventListener('click', () => {
            hideMenuNavbar()
        })
    })
}

// Open menu Register / Login
const openRegisterBtn = document.getElementById('openRegisterBtn')
const closeRegisterBtn = document.getElementById('closeRegisterBtn')
const registerMenu = document.getElementById('registerMenu') // used twice

const showRegisterMenu = () => {
    registerMenu.style.right = '0'
}

const hideRegisterMenu = () => {
    registerMenu.style.right = '-100%'
}

openRegisterBtn.addEventListener('click', showRegisterMenu)
closeRegisterBtn.addEventListener('click', hideRegisterMenu)

// Switch from login to signup
const forms = document.querySelector('.forms')
const links = document.querySelectorAll('.link')

links.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault()
        forms.classList.toggle('show__signup')
    })
})