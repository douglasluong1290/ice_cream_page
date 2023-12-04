// Menu toggle button (only available on mobile devices)
const toggleNavbarButton = document.getElementById('toggleNavbarButton')
const toggleNavbar = () => {
    const navBar = document.getElementById('navbarCollapse')
    if (navBar.classList.contains('show')) {
        navBar.classList.remove('show')
    } else {
        navBar.classList.add('show')
    }
}
toggleNavbarButton.addEventListener("click", toggleNavbar)

