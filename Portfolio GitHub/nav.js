// Hamburger-Menu

function openMenu () {
    const aside = document.getElementById('hamburger-aside');
    aside.classList.add("active");

    const backdrop = document.getElementById('backdrop');
    backdrop.classList.add("active");

    document.querySelector('body').classList.add("active");


}

function closeMenu() {
    const aside = document.getElementById('hamburger-aside');
    aside.classList.remove("active");

    const backdrop = document.getElementById('backdrop');
    backdrop.classList.remove("active");

    document.querySelector('body').classList.remove("active");
}
    