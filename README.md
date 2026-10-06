# SM Consultores

Sitio institucional de **SM Consultores**, consultora en sistemas de gestión, desarrollo organizacional, OEC (Operador Económico Calificado), comercio exterior y cadena de suministro.

Sitio publicado: https://smconsultores.netlify.app

Para probar cambios antes de publicarlos está la versión de pruebas: [smconsultores-test](https://github.com/FABIOR1981/smconsultores-test).

## Contenido del sitio

- **Portada**: estrategia, sistemas de gestión y desarrollo organizacional.
- **Servicios especializados**:
  - Gestión del talento y cultura organizacional.
  - Sistemas de gestión, seguridad y certificaciones.
  - Desarrollo organizacional y comunicación.
- **Principales clientes de comercio exterior**, con sus logos.
- **Contacto**: para coordinar una reunión, con los canales de comunicación.
- Menú adaptable a celular (hamburguesa) que resalta la sección que se está viendo.

## Cómo actualizar

### Logos de clientes

1. Subí el logo a `img/logos_clientes/` con un número adelante, que define el orden. Por ejemplo: `6_logo-nuevo.png`.
2. Agregalo a la lista en `js/logos.js`, con el nombre del archivo y la web del cliente.

`js/main.js` lee esa lista, ordena los logos por el número del archivo y arma las tarjetas.

### Textos e imágenes

Los textos están en `index.html` y las imágenes de los servicios en `img/`.

## Ejecutar localmente

No necesita instalación. Abrí `index.html` en el navegador.

## Estructura

```
index.html            Página completa
style.css             Estilos
js/app.js             Menú en celular y resaltado de la sección activa
js/logos.js           Lista de logos de clientes (lo único a editar al sumar uno)
js/main.js            Carga y ordena los logos
img/                  Imágenes del sitio y logos de clientes
```
