"use strict";
// model.ts
let nextId = 1;
// Add a new task — always starts as "todo".
function addTask(tasks, title) {
    const newTask = { id: nextId++, title, status: "todo" };
    return [...tasks, newTask];
}
// Mark a task done by id.
function completeTask(tasks, id) {
    return tasks.map((t) => (t.id === id ? { ...t, status: "done" } : t));
}
// Return only the tasks matching a given status.
function filterByStatus(tasks, status) {
    return tasks.filter((t) => t.status === status);
}
