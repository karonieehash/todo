// app.ts
import { addTask, filterByStatus } from "./model.js";
let tasks = [];
let filter = "all";
// Grab elements — cast so tsc knows exactly what they are.
const titleInput = document.getElementById("title");
const addBtn = document.getElementById("add");
const listEl = document.getElementById("list");
// Render function to update the DOM with the current tasks
function render() {
    listEl.innerHTML = ""; // Clear current list
    const tasksToDisplay = filter === "all" ? tasks : filterByStatus(tasks, filter);
    tasksToDisplay.forEach((task) => {
        const li = document.createElement("li");
        li.textContent = task.title;
        listEl.appendChild(li);
    });
}
addBtn.onclick = () => {
    const title = titleInput.value.trim(); // .value is known & typed
    if (!title)
        return;
    tasks = addTask(tasks, title); // returns a fresh Task[]
    titleInput.value = ""; // clear input field
    render();
};
