// ==========================================================================
// LÓGICA DE CARGA Y ORDENACIÓN DINÁMICA DE LOGOS DE CLIENTES
// Toma la variable 'clientesComex' de logos.js
// ==========================================================================

// Lee el prefijo numérico del archivo (ej: "1_logo-aramaycia.png" -> 1)
function obtenerOrden(nombreArchivo) {
    const partes = nombreArchivo.split('_');
    const numero = parseInt(partes[0], 10);
    return isNaN(numero) ? 99 : numero; // Si un archivo nuevo no tiene prefijo, va al final
}

// Renderiza las tarjetas de clientes con los estilos de index.html
function cargarLogosClientes() {
    const grid = document.getElementById('clients-grid');
    if (!grid) return;

    const clientesOrdenados = [...clientesComex].sort((a, b) => {
        return obtenerOrden(a.logo) - obtenerOrden(b.logo);
    });

    const estiloTarjeta = 'flex h-28 items-center justify-center rounded-lg border border-black/5 bg-white p-6 transition hover:border-bordo/40';
    const estiloLogo = 'max-h-14 w-auto max-w-full object-contain';

    grid.innerHTML = clientesOrdenados.map(cliente => {
        const logo = `<img src="img/logos_clientes/${cliente.logo}" alt="Logo ${cliente.nombre}" class="${estiloLogo}">`;

        if (cliente.url) {
            return `<a href="${cliente.url}" target="_blank" rel="noopener noreferrer" title="${cliente.nombre}" class="${estiloTarjeta}">${logo}</a>`;
        }

        return `<div class="${estiloTarjeta}">${logo}</div>`;
    }).join('');
}

document.addEventListener('DOMContentLoaded', () => {
    if (typeof clientesComex !== 'undefined') {
        cargarLogosClientes();
    } else {
        console.warn('clientesComex no está definido. Verifica que js/logos.js se cargue antes de js/main.js.');
    }
});
