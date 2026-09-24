const tareas = [
    "Revisar el código del proyecto",
    "Corregir errores de la consola",
    "Documentar la nueva funcionalidad",
    "Preparar la entrega del trabajo"
];


const horasDisponibles = 4;

console.log("Tareas del día:");
tareas.forEach((tarea, indice) => {
    console.log(`${indice + 1}. ${tarea}`);
});


if (horasDisponibles > 5) {
    console.log("Día tranquilo");
} else if (horasDisponibles >= 3 && horasDisponibles <= 5) {
    console.log("Día normal");
} else {
    console.log("Día ajustado");
}

