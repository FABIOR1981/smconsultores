// ==========================================================================
// LÓGICA DE CARGA Y ORDENACIÓN DINÁMICA DE LOGOS DE CLIENTES
// ==========================================================================

// Array de datos de tus clientes vinculados a la carpeta img/logos_clientes/
const clientesComex = [
    { nombre: "Aramaycia", logo: "1_logo-aramaycia.png" },
    { nombre: "Santa Rosa", logo: "2_logo-ibarra.png" },
    { nombre: "Ibarra Comex", logo: "3_logo-santarosa.png" },
    { nombre: "Liguori Dendi", logo: "4_logo-liguori.png" }
];

// Función para leer el prefijo numérico del archivo (ej: "1_logo-aramaycia.png" -> 1)
function obtenerOrden(nombreArchivo) {
    const partes = nombreArchivo.split('_');
    const numero = parseInt(partes[0], 10);
    return isNaN(numero) ? 99 : numero; // Si un archivo nuevo no tiene prefijo, va al final
}

// Renderizado dinámico de las tarjetas de clientes
function cargarLogosClientes() {
    const grid = document.getElementById('clients-grid');
    if (!grid) return; // Seguridad en caso de que no encuentre el contenedor

    // Ordenar los clientes por el número del prefijo del archivo
    const clientesOrdenados = [...clientesComex].sort((a, b) => {
        return obtenerOrden(a.logo) - obtenerOrden(b.logo);
    });

    // Inyectar la estructura HTML correspondiente a cada logo en la subruta indicada
    grid.innerHTML = clientesOrdenados.map(cliente => `
        <div class="client-card">
            <div class="client-logo-container">
                <img src="img/logos_clientes/${cliente.logo}" alt="Logo ${cliente.nombre}" class="client-logo">
            </div>   
        </div>
    `).join('');
}

// Ejecutar la carga cuando el documento esté completamente listo
document.addEventListener('DOMContentLoaded', cargarLogosClientes);