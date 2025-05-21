//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ TEXT ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬//

function toggleMenu() {
    const navLinks = document.querySelector('.navigation ul');
    const hamburger = document.querySelector('.hamburger');
    navLinks.classList.toggle('open');
    hamburger.classList.toggle('open');
}
