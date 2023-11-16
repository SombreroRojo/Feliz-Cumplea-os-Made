document.addEventListener('DOMContentLoaded', function () {
    const quoteTextarea = document.getElementById('quote');
    const citasGuardadasDiv = document.getElementById('citas-guardadas');

    // Cargar las citas guardadas desde LocalStorage si están disponibles
    const citasGuardadas = JSON.parse(localStorage.getItem('citas_guardadas')) || [];
    mostrarCitasGuardadas(citasGuardadas);

    document.getElementById('guardarBtn').addEventListener('click', function () {
        guardarCita();
    });

    function guardarCita() {
        const nuevaCita = quoteTextarea.value;

        if (nuevaCita.trim() !== '') {
            // Añadir la nueva cita al array de citas guardadas
            citasGuardadas.push(nuevaCita);

            // Guardar el array actualizado en LocalStorage
            localStorage.setItem('citas_guardadas', JSON.stringify(citasGuardadas));

            // Limpiar el textarea
            quoteTextarea.value = '';

            // Mostrar las citas guardadas
            mostrarCitasGuardadas(citasGuardadas);
        }
    }

    function mostrarCitasGuardadas(citas) {
        // Limpiar el contenido actual
        citasGuardadasDiv.innerHTML = '';

        // Mostrar cada cita en el contenedor
        citas.forEach(cita => {
            const citaElement = document.createElement('p');
            citaElement.textContent = cita;
            citasGuardadasDiv.appendChild(citaElement);
        });
    }
});
