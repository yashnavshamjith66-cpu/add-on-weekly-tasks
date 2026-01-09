let tasks = [];
let currentFilter = "all";

const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const errorMsg = document.getElementById("errorMsg");
const totalTasks = document.getElementById("totalTasks");
const completedTasks = document.getElementById("completedTasks");

function addTask() {
    const text = taskInput.value.trim();

    if (text === "") {
        errorMsg.innerText = "Task cannot be empty";
        return;
    }

    errorMsg.innerText = "";

    tasks.push({
        id: Date.now(),
        text: text,
        completed: false
    });

    taskInput.value = "";
    renderTasks();
}

function renderTasks() {
    taskList.innerHTML = "";

    let filteredTasks = [];

    if (currentFilter === "all") {
        filteredTasks = tasks;
    } else if (currentFilter === "completed") {
        filteredTasks = tasks.filter(task => task.completed);
    } else if (currentFilter === "pending") {
        filteredTasks = tasks.filter(task => !task.completed);
    }

    filteredTasks.forEach(task => {
        const li = document.createElement("li");
        li.className = "list-group-item";

        const span = document.createElement("span");
        span.className = "task-text";
        span.innerText = task.text;

        if (task.completed) {
            span.classList.add("completed");
        }

        const actions = document.createElement("div");

        // COMPLETE / UNDO BUTTON
        const completeBtn = document.createElement("button");
        completeBtn.className = task.completed
            ? "btn btn-sm btn-secondary me-2"
            : "btn btn-sm btn-success me-2";

        completeBtn.innerText = task.completed ? "Undo" : "Complete";
        completeBtn.onclick = () => toggleTask(task.id);

        // EDIT BUTTON
        const editBtn = document.createElement("button");
        editBtn.className = "btn btn-sm btn-warning me-2";
        editBtn.innerText = "Edit";
        editBtn.onclick = () => editTask(task.id);

        // DELETE BUTTON
        const deleteBtn = document.createElement("button");
        deleteBtn.className = "btn btn-sm btn-danger";
        deleteBtn.innerText = "Delete";
        deleteBtn.onclick = () => deleteTask(task.id);

        actions.appendChild(completeBtn);
        actions.appendChild(editBtn);
        actions.appendChild(deleteBtn);

        li.appendChild(span);
        li.appendChild(actions);
        taskList.appendChild(li);
    });

    updateCounter();
}

function toggleTask(id) {
    tasks = tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
    );
    renderTasks();
}

function editTask(id) {
    const task = tasks.find(task => task.id === id);
    const newText = prompt("Edit task", task.text);

    if (newText && newText.trim() !== "") {
        task.text = newText.trim();
        renderTasks();
    }
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    renderTasks();
}

function updateCounter() {
    totalTasks.innerText = tasks.length;
    completedTasks.innerText = tasks.filter(task => task.completed).length;
}

function setFilter(type, button) {
    currentFilter = type;

    document.querySelectorAll(".filter-section .btn")
        .forEach(btn => btn.classList.remove("active"));

    button.classList.add("active");
    renderTasks();
}
