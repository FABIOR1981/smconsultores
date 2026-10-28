document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('section[id]');

    // Menú móvil: muestra u oculta la navegación y actualiza aria-expanded
    menuToggle.addEventListener('click', () => {
        const cerrado = navLinks.classList.toggle('hidden');
        menuToggle.setAttribute('aria-expanded', String(!cerrado));
    });

    // Cierra el menú móvil al elegir una sección
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.add('hidden');
            menuToggle.setAttribute('aria-expanded', 'false');
        });
    });

    // Resalta en el menú la sección que está en el centro de la pantalla
    const marcarActivo = (id) => {
        navItems.forEach(item => {
            const activo = item.getAttribute('href') === `#${id}`;
            item.classList.toggle('text-bordo', activo);
            item.classList.toggle('font-semibold', activo);
            item.classList.toggle('text-ink/70', !activo);
        });
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                marcarActivo(entry.target.getAttribute('id'));
            }
        });
    }, { root: null, rootMargin: '-50% 0px -50% 0px', threshold: 0 });

    sections.forEach(section => observer.observe(section));
});
