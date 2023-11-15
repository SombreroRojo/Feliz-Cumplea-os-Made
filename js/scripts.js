document.addEventListener('DOMContentLoaded', function () {
    const masonryContainer = document.getElementById('masonry-container');

    // Datos de las imágenes y las páginas HTML
    const imageData = [
        { imageUrl: 'images/imagen1.jpg', pageUrl: 'paginas/pagina1.html' },
        { imageUrl: 'images/imagen2.jpg', pageUrl: 'paginas/pagina2.html' },
        { imageUrl: 'images/imagen3.jpg', pageUrl: 'paginas/pagina3.html' },
        { imageUrl: 'images/imagen4.jpg', pageUrl: 'paginas/pagina4.html' },
        { imageUrl: 'images/imagen5.jpg', pageUrl: 'paginas/pagina5.html' },
        { imageUrl: 'images/imagen6.jpg', pageUrl: 'paginas/pagina6.html' },
    ];

    // Función para crear elementos masonry
    function createMasonryItem(data) {
        const masonryItem = document.createElement('div');
        masonryItem.classList.add('masonry-item');

        const linkElement = document.createElement('a');
        linkElement.href = data.pageUrl;

        const imgElement = document.createElement('img');
        imgElement.src = data.imageUrl;
        imgElement.alt = 'Imagen Pinterest';

        linkElement.appendChild(imgElement);
        masonryItem.appendChild(linkElement);
        masonryContainer.appendChild(masonryItem);
    }

    // Agrega masonry items al cargar la página
    imageData.forEach(data => createMasonryItem(data));
});

document.addEventListener('DOMContentLoaded', function () {
    // Recuperar el contenido de la carta almacenado localmente
    const carta = localStorage.getItem('carta');
    if (carta) {
        document.getElementById('carta').value = carta;
    }
});

function guardarCarta() {
    // Obtener el contenido de la carta
    const cartaContenido = document.getElementById('carta').value;

    // Guardar la carta en el almacenamiento local
    localStorage.setItem('carta', cartaContenido);
    alert('Carta guardada exitosamente');
}
