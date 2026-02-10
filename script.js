const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const emptyText = document.getElementById("emptyText");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let editIndex = null;

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
    taskList.innerHTML = "";

    if (tasks.length === 0) {
        emptyText.style.display = "block";
        return;
    }

    emptyText.style.display = "none";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.className = task.completed ? "completed" : "";

        const span = document.createElement("span");
        span.textContent = task.text;
        span.addEventListener("click", () => toggleTask(index));

        const actions = document.createElement("div");
        actions.style.display = "flex";
        actions.style.gap = "8px";

        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.style.color = "#2563eb";
        editBtn.style.fontSize = "14px";
        editBtn.onclick = () => startEdit(index);

        const deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "&times;";
        deleteBtn.onclick = () => deleteTask(index);

        actions.appendChild(editBtn);
        actions.appendChild(deleteBtn);

        li.appendChild(span);
        li.appendChild(actions);
        taskList.appendChild(li);
    });
}

function addTask() {
    const text = taskInput.value.trim();
    if (!text) return;

    if (editIndex !== null) {
        // Update existing task
        tasks[editIndex].text = text;
        editIndex = null;
        addTaskBtn.textContent = "Add";
    } else {
        // Add new task
        tasks.push({ text, completed: false });
    }

    taskInput.value = "";
    saveTasks();
    renderTasks();
}

function startEdit(index) {
    taskInput.value = tasks[index].text;
    taskInput.focus();
    editIndex = index;
    addTaskBtn.textContent = "Save";
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    saveTasks();
    renderTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
}

addTaskBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") addTask();
});

renderTasks();

