// Añade funcionalidades JavaScript para la última página

document.addEventListener('DOMContentLoaded', function () {
    const imagenes = document.querySelectorAll('.contenedor-imagenes img');
    const pensamientosTextarea = document.getElementById('pensamientos');

    imagenes.forEach((imagen, index) => {
        imagen.addEventListener('click', function () {
            // Muestra un texto diferente para cada imagen
            switch (index) {
                case 0:
                    mostrarTexto('Texto para la Imagen 1');
                    break;
                case 1:
                    mostrarTexto('Texto para la Imagen 2');
                    break;
                case 2:
                    mostrarTexto('Texto para la Imagen 3');
                    break;
                default:
                    mostrarTexto('Texto predeterminado');
            }
        });
    });

    function mostrarTexto(texto) {
        // Muestra el texto en el contenedor de texto
        pensamientosTextarea.value = texto;
    }
});
