// Get references to DOM elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Array to store tasks
let tasks = [];

// Function to render the task list
function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <label>
                <input type="checkbox" onchange="toggleTaskStatus(${index})" ${task.completed ? 'checked' : ''}>
                ${task.text}
            </label>
            <button onclick="removeTask(${index})">Remove</button>
        `;
        taskList.appendChild(listItem);
    });
}

// Function to add a new task
function addTask() {
    const text = taskInput.value.trim();
    if (text !== '') {
        tasks.push({ text, completed: false });
        taskInput.value = '';
        renderTasks();
    }
}

// Function to remove a task
function removeTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

// Function to toggle task status (completed or not)
function toggleTaskStatus(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

// Event listener for "Add Task" button
addTaskBtn.addEventListener('click', addTask);

// Initial rendering of tasks
renderTasks();
