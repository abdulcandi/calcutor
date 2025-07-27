// --- Universal Tab Switching Logic ---
function openApp(evt, appName) {
    // Get all elements with class="tab-content" and hide them
    const tabContent = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    // Get all elements with class="tab-link" and remove the class "active"
    const tabLinks = document.getElementsByClassName("tab-link");
    for (let i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(appName).style.display = "block";
    evt.currentTarget.className += " active";
}


// --- To-Do List Logic ---
document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        // Create list item
        const li = document.createElement('li');

        // Create span for task text
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        taskSpan.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        // Create delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';
        deleteBtn.addEventListener('click', () => {
            taskList.removeChild(li);
        });

        // Append elements
        li.appendChild(taskSpan);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);

        // Clear input field
        taskInput.value = '';
    }

    // Event listeners for To-Do List
    addTaskBtn.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});


// --- Calculator Logic ---
const calcScreen = document.getElementById('calcScreen');

// Append a value (number or operator) to the screen
function appendValue(value) {
    calcScreen.value += value;
}

// Clear the entire display
function clearDisplay() {
    calcScreen.value = '';
}

// Delete the last character from the display
function deleteLast() {
    calcScreen.value = calcScreen.value.slice(0, -1);
}

// Evaluate the expression and show the result
function calculateResult() {
    try {
        // Use eval() for simplicity. Be cautious with eval in real-world complex applications.
        const result = eval(calcScreen.value);
        if (result === Infinity || isNaN(result)) {
            calcScreen.value = 'Error';
        } else {
            calcScreen.value = result;
        }
    } catch (error) {
        calcScreen.value = 'Error';
    }
}
