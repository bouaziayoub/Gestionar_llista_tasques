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
    editTask(li);
    alert("Tasca afegida correctament");
  }
});

// Afegeix el checkbox
function addCheckbox(li) {
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  li.prepend(checkbox);

  // Función para manejar el cambio de line-throug
  const lineThrough = () => {
    const isChecked = checkbox.checked;
    li.style.textDecoration = isChecked ? "line-through" : "none";
    // color al line-through
    li.style.color = isChecked ? "#b11928" : "black";
  };

  // Agregar un event listener para marcar la tarea como completada
  li.addEventListener("click", (event) => {
    event.stopPropagation(); // Detiene la propagación del evento
    checkbox.checked = !checkbox.checked;
    // Llamar a la función lineThrough
    lineThrough();
  });
}


// Afegeix el boton d'eliminar
function addDeleteButton(li) {
  const buttonDelete = document.createElement("img");
  buttonDelete.classList.add("btnDelete");
  buttonDelete.src = "img/delete.png";
  li.appendChild(buttonDelete);
  buttonDelete.addEventListener("click", () => {
    li.remove();
  });
}

// Editar tasca
function editTask(li) {
  const btnEdit = document.createElement("img");
  btnEdit.classList.add("btnEdit");
  btnEdit.src = "img/edit.png";
  li.style.textDecoration = "none";
  // color al line-through
  li.style.color = "black";
  li.appendChild(btnEdit);
  btnEdit.addEventListener("click", () => {
    const text = li.textContent;
    const input = document.createElement("input");
    input.type = "text";
    input.value = text;
    li.textContent = "";
    li.appendChild(input);
    input.focus();
    input.addEventListener("blur", () => {
      if (!input.value) {
        li.textContent = text;
      } else {
        li.textContent = input.value;
      }
      addCheckbox(li);
      addDeleteButton(li);
      editTask(li);
    });

  
  });
}
