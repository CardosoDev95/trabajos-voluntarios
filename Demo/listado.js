// Selección de elementos
const tablaDatos = document.querySelector('#tablaDatos');
const formularioEditar = document.querySelector('#formularioEditar');
const editarCitaDiv = document.querySelector('#editarCita');

// Recuperar datos del LocalStorage
let datosGuardados = JSON.parse(localStorage.getItem('datosPersonales')) || [];

// Función para mostrar la tabla con los datos
function mostrarTabla() {
    tablaDatos.innerHTML = ''; // Limpiar contenido actual de la tabla

    datosGuardados.forEach((dato, index) => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${dato.nombre}</td>
            <td>${dato.apellidos}</td>
            <td>${dato.fechaCita}</td>
            <td>${dato.telefono}</td>
            <td>${dato.fechaNacimiento}</td>
            <td>${dato.dni}</td>
            <td>${dato.observaciones}</td>
            <td>
                <button onclick="editarCita(${index})">Editar Cita</button>
                <button onclick="eliminarCita(${index})">Eliminar</button>
            </td>
        `;
        tablaDatos.appendChild(fila);
    });
}

// Función para editar una cita
function editarCita(index) {
    // Mostrar formulario de edición
    editarCitaDiv.style.display = 'block';

    // Llenar el formulario con los datos actuales
    const dato = datosGuardados[index];
    document.querySelector('#nombreEditar').value = dato.nombre;
    document.querySelector('#apellidosEditar').value = dato.apellidos;
    document.querySelector('#fechaCitaEditar').value = dato.fechaCita;
    document.querySelector('#telefonoEditar').value = dato.telefono;
    document.querySelector('#fechaNacimientoEditar').value = dato.fechaNacimiento;
    document.querySelector('#dniEditar').value = dato.dni;
    document.querySelector('#observacionesEditar').value = dato.observaciones;


    // Guardar cambios al enviar el formulario
    formularioEditar.onsubmit = function(event) {
        event.preventDefault();

        // Actualizar los datos en el array
        datosGuardados[index] = {
            nombre: document.querySelector('#nombreEditar').value.trim(),
            apellidos: document.querySelector('#apellidosEditar').value.trim(),
            fechaCita: document.querySelector('#fechaCitaEditar').value.trim(),
            telefono: document.querySelector('#telefonoEditar').value.trim(),
            fechaNacimiento: document.querySelector('#fechaNacimientoEditar').value.trim(),
            dni: document.querySelector('#dniEditar').value.trim(),
            observaciones: document.querySelector('#observacionesEditar').value.trim()
        };

        // Guardar los cambios en LocalStorage
        localStorage.setItem('datosPersonales', JSON.stringify(datosGuardados));

        // Ocultar formulario de edición y actualizar tabla
        editarCitaDiv.style.display = 'none';
        mostrarTabla();
    };
}

// Función para eliminar una cita
function eliminarCita(index) {
    // Eliminar el dato del array
    datosGuardados.splice(index, 1);

    // Guardar cambios en LocalStorage
    localStorage.setItem('datosPersonales', JSON.stringify(datosGuardados));

    // Actualizar la tabla
    mostrarTabla();
}

// Mostrar la tabla al cargar la página
mostrarTabla();
