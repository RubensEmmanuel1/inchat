console.log("Initializing menu toggle...");

// Menu toggle
const menuHamburguer = document.querySelector('.menu-hamburguer');
const menu = document.querySelector('.menu');

if (menuHamburguer && menu) {
    menuHamburguer.addEventListener('click', () => {
        menu.classList.toggle('menu-ativo');
        console.log("Menu toggled!");
    });
}

// Smooth scroll for internal links
const menuLinks = document.querySelectorAll('.menu a');

menuLinks.forEach(link => {
    const target = link.getAttribute('href');
    if (target.startsWith("#")) { // Only handle internal links
        link.addEventListener('click', e => {
            e.preventDefault();
            const targetId = target.substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
                console.log(`Scrolled to section: ${targetId}`);
            }
        });
    }
});