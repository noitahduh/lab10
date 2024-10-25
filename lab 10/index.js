let tareas = [];

function agregarTarea() {
  const inputTarea = document.getElementById('inputTarea');
  const nombreTarea = inputTarea.value;

  if (nombreTarea !== '') {
    tareas.push({ nombre: nombreTarea, estado: 'pendiente' });
    inputTarea.value = '';
    actualizarInterfaz();
  }
}

function moverTarea(index, nuevoEstado) {
  tareas[index].estado = nuevoEstado;
  actualizarInterfaz();
}

function actualizarInterfaz() {
  const listaPendientes = document.getElementById('listaPendientes');
  const listaHaciendo = document.getElementById('listaHaciendo');
  const listaCompletadas = document.getElementById('listaCompletadas');
  
  listaPendientes.innerHTML = '';
  listaHaciendo.innerHTML = '';
  listaCompletadas.innerHTML = '';
  
  tareas.forEach((tarea, index) => {
    const tareaDiv = document.createElement('div');
    tareaDiv.classList.add('tarea');
    tareaDiv.innerHTML = `<span>${tarea.nombre}</span>`;
    
    if (tarea.estado === 'pendiente') {
      tareaDiv.innerHTML += `
        <button class="boton-avanzar" onclick="moverTarea(${index}, 'haciendo')">→</button>
      `;
      listaPendientes.appendChild(tareaDiv);
    } else if (tarea.estado === 'haciendo') {
      tareaDiv.innerHTML += `
        <button class="boton-retroceso" onclick="moverTarea(${index}, 'pendiente')">←</button>
        <button class="boton-completado" onclick="moverTarea(${index}, 'completada')">✔</button>
      `;
      listaHaciendo.appendChild(tareaDiv);
    } else if (tarea.estado === 'completada') {
      listaCompletadas.appendChild(tareaDiv);
    }
  });
}
