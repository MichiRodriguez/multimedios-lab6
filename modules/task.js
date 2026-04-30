import { guardarTareas } from "./storage.js";

let tareas = [];

export function setTareas(nuevas) {
  tareas = nuevas;
}

export function getTareas() {
  return tareas;
}

export function agregarTarea(texto) {
  const nueva = {
    id: Date.now(),
    texto,
    completada: false
  };

  tareas.push(nueva);
  guardarTareas(tareas);
}

export function toggleTarea(id) {
  tareas = tareas.map(t =>
    t.id === id ? { ...t, completada: !t.completada } : t
  );

  guardarTareas(tareas);
}

export function eliminarTarea(id) {
  tareas = tareas.filter(t => t.id !== id);
  guardarTareas(tareas);
}