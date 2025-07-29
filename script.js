const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        const li = document.createElement("li");
        li.textContent = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.textContent = "\u00D7"; // Unicode for multiplication sign (×)
        li.appendChild(span);
        inputBox.value = '';
        saveTasks();
    }
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle("checked");
        saveTasks();
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveTasks();
    }
}, false);

function saveTasks() {
    localStorage.setItem("tasks", listContainer.innerHTML);
}

function loadTasks() {
    listContainer.innerHTML = localStorage.getItem("tasks");
}

loadTasks();
