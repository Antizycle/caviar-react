export default function toggleMenu() {
    
    const menuToggler = document.getElementById('menuToggler');
    const menuCloser = document.getElementById('menuCloser');
    if (menuToggler && menuCloser) {
        menuToggler.classList.toggle('menu-show');
        menuCloser.classList.toggle('menu-show');
    }
}