export function renderTareas(lista, tareas) {
  lista.innerHTML = "";

  tareas.forEach(tarea => {
    const li = document.createElement("li");
    li.classList.add("tarea-item");

    if (tarea.completada) {
      li.classList.add("completada");
    }

    li.dataset.id = tarea.id;

    li.innerHTML = `
      <button class="btn-check"></button>
      <span class="tarea-texto">${tarea.texto}</span>
      <button class="btn-del">✕</button>
    `;

    lista.append(li);
  });
}

export function actualizarContador(lista, contador, emptyState) {
  const pendientes = lista.querySelectorAll(".tarea-item:not(.completada)");
  contador.textContent = pendientes.length;

  emptyState.style.display =
    lista.children.length > 0 ? "none" : "block";
}