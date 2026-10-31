/* ==========================================================================
   SM Consultores · Logos de clientes
   Lee la lista de js/logos.js, la ordena por el prefijo numérico del archivo
   y arma las tarjetas. Para sumar un cliente, editar solo js/logos.js.
   ========================================================================== */
(() => {
    const grid = document.getElementById('clients-grid');
    if (!grid) return;

    if (typeof clientesComex === 'undefined') {
        console.warn('clientesComex no está definido. Verificá que js/logos.js cargue antes que js/main.js.');
        return;
    }

    // "1_logo-aramaycia.png" -> 1. Sin prefijo numérico, va al final.
    const orden = (archivo) => {
        const numero = parseInt(archivo.split('_')[0], 10);
        return Number.isNaN(numero) ? Number.MAX_SAFE_INTEGER : numero;
    };

    const escapar = (texto) => String(texto).replace(/[&<>"']/g, (c) => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[c]));

    const tarjeta = (cliente) => {
        const imagen = `
            <div class="client-logo-container">
                <img src="img/logos_clientes/${escapar(cliente.logo)}"
                     alt="Logo ${escapar(cliente.nombre)}"
                     class="client-logo" loading="lazy" width="200" height="120">
            </div>`;

        const contenido = cliente.url
            ? `<a class="client-card-link" href="${escapar(cliente.url)}" target="_blank" rel="noopener noreferrer" title="${escapar(cliente.nombre)}">${imagen}</a>`
            : imagen;

        return `<div class="client-card">${contenido}</div>`;
    };

    const ordenados = [...clientesComex].sort((a, b) => orden(a.logo) - orden(b.logo));
    grid.innerHTML = ordenados.map(tarjeta).join('');
})();
