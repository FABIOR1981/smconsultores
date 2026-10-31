/* ==========================================================================
   SM Consultores · Interacción de la página
   - Menú hamburguesa en celular
   - Resaltado de la sección visible en el menú (scroll spy)
   ========================================================================== */
(() => {
    const toggle = document.getElementById('menuToggle');
    const nav = document.getElementById('navLinks');
    const links = Array.from(document.querySelectorAll('.nav-item'));

    if (!toggle || !nav) return;

    const setMenu = (open) => {
        nav.classList.toggle('is-open', open);
        toggle.classList.toggle('is-open', open);
        toggle.setAttribute('aria-expanded', String(open));
        toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    };

    toggle.addEventListener('click', () => {
        setMenu(!nav.classList.contains('is-open'));
    });

    links.forEach((link) => {
        link.addEventListener('click', () => setMenu(false));
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') setMenu(false);
    });

    // Resaltado de la sección activa (solo secciones que tienen enlace en el menú)
    const sectionIds = links
        .map((link) => link.getAttribute('href'))
        .filter((href) => href && href.startsWith('#'))
        .map((href) => href.slice(1));

    const sections = sectionIds
        .map((id) => document.getElementById(id))
        .filter(Boolean);

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const id = entry.target.id;
            links.forEach((link) => {
                link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
            });
        });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

    sections.forEach((section) => observer.observe(section));
})();
