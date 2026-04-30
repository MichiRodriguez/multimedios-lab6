import { obtenerTareas } from "./modules/storage.js";
import {
  setTareas,
  getTareas,
  agregarTarea,
  toggleTarea,
  eliminarTarea
} from "./modules/tasks.js";
import { renderTareas, actualizarContador } from "./modules/ui.js";

const input = document.querySelector("#input-tarea");
const btn = document.querySelector("#btn-agregar");
const lista = document.querySelector("#lista-tareas");
const contador = document.querySelector("#contador");
const emptyState = document.querySelector("#empty-state");
const errorMsg = document.querySelector("#error-msg");

function init() {
  setTareas(obtenerTareas());
  render();
}

function render() {
  renderTareas(lista, getTareas());
  actualizarContador(lista, contador, emptyState);
}

function mostrarError(msg) {
  errorMsg.textContent = msg;
  errorMsg.classList.add("visible");
  input.classList.add("error");

  setTimeout(() => {
    errorMsg.classList.remove("visible");
    input.classList.remove("error");
  }, 2000);
}

function handleAgregar() {
  const texto = input.value.trim();

  if (!texto) {
    mostrarError("La tarea no puede estar vacía");
    return;
  }

  agregarTarea(texto);
  input.value = "";
  render();
}

btn.addEventListener("click", handleAgregar);

input.addEventListener("keydown", e => {
  if (e.key === "Enter") handleAgregar();
});

lista.addEventListener("click", e => {
  const li = e.target.closest(".tarea-item");
  if (!li) return;

  const id = Number(li.dataset.id);

  if (e.target.classList.contains("btn-check")) {
    toggleTarea(id);
  }

  if (e.target.classList.contains("btn-del")) {
    eliminarTarea(id);
  }

  render();
});

init();