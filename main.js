const form = document.querySelector("form");
const input = form.querySelector("input");
const ul = document.querySelector(".todo-list");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const text = input.value.trim();
  if (text !== "") {
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    const span = document.createElement("span");
    span.textContent = text;
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.className = "delete-btn";
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    ul.appendChild(li);
    input.value = "";
  }
});

ul.addEventListener("click", function (event) {
  if (event.target.type === "checkbox") {
    event.target.parentNode.classList.toggle("completed");
  } else if (event.target.classList.contains("delete-btn")) {
    event.target.parentNode.remove();
  }
});
