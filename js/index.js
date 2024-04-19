// Variables
const task = document.getElementById("task");
const add = document.getElementById("add");
const list = document.getElementById("list");
const error = document.querySelector(".error");

// Afegeix la tasca
add.addEventListener("click", () => {
  // Si el input esta vacio que me mueste un mensaje de error
  if (!task.value) {
    error.style.display = "block";
    error.textContent = "El camp d'entrada no pot estar buit";
    return;
  } else {
    error.style.display = "none";
    const li = document.createElement("li");
    li.textContent = task.value;
    list.appendChild(li);
    task.value = "";
    addCheckbox(li);
    addDeleteButton(li);
    alert("Tasca afegida correctament");
  }
});

// Afegeix el checkbox
function addCheckbox(li) {
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  li.prepend(checkbox);

  // Función para manejar el cambio de line-throug 
  const lineThroug = () => {
    const isChecked = checkbox.checked;
    li.style.textDecoration = isChecked ? "line-through" : "none";
    // color al line-through
    li.style.color = isChecked ? "#b11928" : "black";
  };

  // Agregar un event listener para marcar la tarea como completada
  li.addEventListener("click", () => {
    checkbox.checked = !checkbox.checked;
    // Llamar a la función lineThroug
    lineThroug();
  });
}

// Afegeix el boton d'eliminar
function addDeleteButton(li) {
  const button = document.createElement("button");
  button.classList.add("delete");
  button.textContent = "Eliminar";
  li.appendChild(button);
  button.addEventListener("click", () => {
    li.remove();
  });
}
