document.getElementById("add").addEventListener("click", addTask)

export function addTask() {
  const input = document.getElementById("title")
  const task = input.value.trim()

  if (task !== "") {
    const tasklist = document.getElementById("tasklist")

    const li = document.createElement("li")

    li.innerHTML = `
      <span id="task">${task}</span>
      <button class="done">Done</button>
      <button class="deleteTask">Delete</button>
    `

    tasklist.appendChild(li)
    input.value = ""
  }

  if ((document.querySelector(".done") && document.querySelector(".deleteTask")) !== null) {
    document.querySelector(".done").addEventListener("click", markCompleted);
    document.querySelector(".deleteTask").addEventListener("click", deleteTask);
  }
}

function markCompleted(event) {
  console.log(event)
  const taskItem = event.target.parentElement.firstElementChild;
  taskItem.classList.toggle("line-through");
}

function deleteTask(event) {
  const taskItem = event.target.parentElement;
  taskItem.remove();
}