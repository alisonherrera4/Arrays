let tareasPendientes = [];
function agregarTarea() {
    let nuevaTarea = prompt("Ingrese la nueva tarea:");

    // Agregar la nueva tarea al final del arreglo utilizando push()
    tareasPendientes.push(nuevaTarea);

    console.log("¡La tarea \"" + nuevaTarea + "\" fue agregada correctamente!");

    console.log("Tareas pendientes:", tareasPendientes);
}
agregarTarea();