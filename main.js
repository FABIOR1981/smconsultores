// Base de datos de clientes vinculada a los archivos de la carpeta img/logos_clientes
const clientesComex = [
    {
        nombre: "Aramaycia",
        logo: "1_logo-aramaycia.png", // El número al principio dictará la posición
        contacto: "Sr. Christian Derderian",
        cargo: "Director",
        detalles: [
            "Auditoría Integral de Comercio Exterior y Cadena de Suministro.",
            "Mantenimiento de los requisitos OEA (Operador Económico Calificado)."
        ],
        email: "cderderian@aramaycia.com.uy"
    },
    {
        nombre: "Santa Rosa",
        logo: "2_logo-santarosa.png",
        tag: "Integrante del Grupo Antelo",
        contacto: "Sr. Maximiliano Gratadoux",
        cargo: "Gerente Comercio Exterior",
        detalles: [
            "Auditoría de Procesos en el marco del mantenimiento de la Certificación OEA."
        ],
        email: "mgratadoux@santarosa.com.uy"
    },
    {
        nombre: "Ibarra Comex",
        logo: "3_logo-ibarra.png",
        contacto: "Sra. Federica Ibarra",
        cargo: "Directora",
        detalles: [
            "Auditoría y control de operaciones de Comercio Exterior."
        ],
        email: "federicaibarra@ibarra.com.uy"
    },
    {
        nombre: "Liguori Dendi",
        logo: "4_logo-liguori.png",
        contacto: "Sr. Ignacio Liguori",
        cargo: "Director",
        detalles: [
            "Auditoría y Reingeniería de procesos de Comercio Exterior.",
            "Más de 30 horas de Capacitación in-company al personal del área."
        ],
        email: "iliguori@liguoridendi.com"
    }
];

// Función para obtener el número de orden desde el nombre del archivo (ej: "1_logo.png" -> 1)
function obtenerOrden(nombreArchivo) {
    const partes = nombreArchivo.split('_');
    const numero = parseInt(partes[0], 10);
    return isNaN(numero) ? 99 : numero; // Si no tiene número, lo manda al final
}

// Función para renderizar las tarjetas ordenadas de forma dinámica
function cargarClientes() {
    const grid = document.getElementById('clients-grid');
    if (!grid) return;

    // ORDENACIÓN: Ordena el array de menor a mayor según el prefijo numérico del logo
    const clientesOrdenados = [...clientesComex].sort((a, b) => {
        return obtenerOrden(a.logo) - obtenerOrden(b.logo);
    });

    // Renderizamos las tarjetas ya ordenadas
    grid.innerHTML = clientesOrdenados.map(cliente => {
        const viñetasHTML = cliente.detalles.map(linea => `<li>${linea}</li>`).join('');
        const tagHTML = cliente.tag ? `<span class="client-tag">${cliente.tag}</span>` : '';

        return `
            <div class="client-card">
                <div class="client-logo-container">
                    <img src="img/logos_clientes/${cliente.logo}" alt="Logo ${cliente.nombre}" class="client-logo">
                </div>
                <h4>${cliente.nombre}</h4>
                ${tagHTML}
                <p class="client-contact"><strong>${cliente.contacto}</strong><br>${cliente.cargo}</p>
                
                <ul class="client-details-list">
                    ${viñetasHTML}
                </ul>

                <span class="client-mail">${cliente.email}</span>
            </div>
        `;
    }).join('');
}

// Ejecutar cuando el documento esté listo
document.addEventListener('DOMContentLoaded', cargarClientes);