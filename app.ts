// app.ts
import { Task, TaskStatus, addTask, filterByStatus } from "./model.js";

let tasks: Task[] = [];
let filter: "all" | TaskStatus = "all";

// Grab elements — cast so tsc knows exactly what they are.
const titleInput = document.getElementById("title") as HTMLInputElement;
const addBtn = document.getElementById("add") as HTMLButtonElement;
const listEl = document.getElementById("list") as HTMLUListElement;

// Render function to update the DOM with the current tasks
function render(): void {
  listEl.innerHTML = ""; // Clear current list

  const tasksToDisplay: Task[] = filter === "all" ? tasks : filterByStatus(tasks, filter);

  tasksToDisplay.forEach((task: Task) => {
    const li = document.createElement("li");
    li.textContent = task.title;
    listEl.appendChild(li);
  });
}

addBtn.onclick = () => {
  const title = titleInput.value.trim();   // .value is known & typed
  if (!title) return;
  tasks = addTask(tasks, title);           // returns a fresh Task[]
  titleInput.value = "";                   // clear input field
  render();
};