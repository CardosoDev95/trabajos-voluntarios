// Selección del formulario
const formulario = document.querySelector('#formulario');

// Manejo del evento submit
formulario.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío predeterminado del formulario

    // Capturar los valores de los campos
    const datos = {
        fechaCita: document.querySelector('#fechaCita').value.trim(),
        nombre: document.querySelector('#nombre').value.trim(),
        apellidos: document.querySelector('#apellidos').value.trim(),
        telefono: document.querySelector('#telefono').value.trim(),
        fechaNacimiento: document.querySelector('#fechaNacimiento').value.trim(),
        dni: document.querySelector('#dni').value.trim(),
        observaciones: document.querySelector('#observaciones').value.trim()
    };

    // Recuperar los datos existentes o inicializar un array vacío
    const datosGuardados = JSON.parse(localStorage.getItem('datosPersonales')) || [];

    // Añadir los nuevos datos al array
    datosGuardados.push(datos);

    // Guardar el array actualizado en localStorage
    localStorage.setItem('datosPersonales', JSON.stringify(datosGuardados));

    // Limpiar el formulario
    formulario.reset();

    alert('Datos guardados correctamente. Ve a la lista para verlos.');
});
