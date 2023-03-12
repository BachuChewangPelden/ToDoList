window.addEventListener('load', ()=>{
  const form = document.querySelector("form");
  const input = form.querySelector("#task_input");
  const list_li = document.querySelector("#tasks");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const task = input.value.trim();

    if (!task) {
      alert("Please fill in the task");
      return;
    } 

    const task_li = document.createElement("div");
    task_li.classList.add("task");
    
    const task_content_li=document.createElement("div");
    task_content_li.classList.add("content");

    task_li.appendChild(task_content_li);

    const task_input_li = document.createElement("input");
    task_input_li.classList.add("text");
    task_input_li.type = "text";
    task_input_li.value = task;
    task_input_li.setAttribute("readonly", "readonly");

    task_content_li.appendChild(task_input_li);

    const task_action = document.createElement("div");
    task_action.classList.add("action");

    const task_edit = document.createElement("button");
    task_edit.classList.add("edit");
    task_edit.innerHTML = "Edit";
    
    const task_delete = document.createElement("button");
    task_delete.classList.add("delete");
    task_delete.innerHTML = "Delete";

    task_action.appendChild(task_edit);
    task_action.appendChild(task_delete);
    task_li.appendChild(task_action);
    list_li.appendChild(task_li);

    input.value = "";

    task_edit.addEventListener('click', () => {
     if(task_edit.innerText.toLowerCase() == "edit"){
      task_input_li.removeAttribute("readonly");
      task_input_li.focus();
      task_edit.innerText ="Save";
    }else{
      task_input_li.setAttribute("readonly","readonly");
      task_edit.innerText="Edit"; 
        }
    });

    task_delete.addEventListener("click",() => {
      list_li.removeChild(task_li);
    });
  });
  
});


// form.addEventListener("submit", function (event) {
//   event.preventDefault();
//   const task = input.value.trim();
//   if (task !== "") {
//     const li = document.createElement("li");
//     const checkbox = document.createElement("input");
//     checkbox.type = "checkbox";
//     const span = document.createElement("span");
//     span.taskContent = task;
//     const deleteBtn = document.createElement("button");
//     deleteBtn.taskContent = "X";
//     deleteBtn.className = "delete-btn";
//     li.appendChild(checkbox);
//     li.appendChild(span);
//     li.appendChild(deleteBtn);
//     ul.appendChild(li);
//     input.value = "";
//   }
// });

// ul.addEventListener("click", function (event) {
//   if (event.target.type === "checkbox") {
//     event.target.parentNode.classList.toggle("completed");
//   } else if (event.target.classList.contains("delete-btn")) {
//     event.target.parentNode.remove();
//   }
// });
