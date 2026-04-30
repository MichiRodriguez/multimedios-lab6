const KEY = "tareas";

export function obtenerTareas() {
  const data = localStorage.getItem(KEY);
  return data ? JSON.parse(data) : [];
}

export function guardarTareas(tareas) {
  localStorage.setItem(KEY, JSON.stringify(tareas));
}