const inputBox = document.getElementById("input-box");
const taskList = document.getElementById("task-list");
const toggleButton = document.getElementById("toggleButton");

function addTask() {
    if (inputBox.value === "") {
        alert("Please enter a task!");
    } else {
        
        let li = document.createElement("li");
        li.textContent = inputBox.value;
        taskList.appendChild(li);
        
        let span = document.createElement('span');
        span.textContent = "\u00d7";
        li.appendChild(span);
        
        inputBox.value = ""; // Clear input box after adding task
        saveData();
        }
    }

// Event listener for Enter key press
inputBox.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});

taskList.addEventListener("click", function(event) {
    if(event.target.tagName === "LI"){
        event.target.classList.toggle("checked");
        saveData();
    }
    else if(event.target.tagName === "SPAN"){
        event.target.parentElement.remove();
        saveData();
    }

    });

function saveData(){
    localStorage.setItem("data",taskList.innerHTML)
}

function showTasks(){
    taskList.innerHTML=localStorage.getItem( "data" ) ;
}

showTasks(); //HOISTING -> can be called before function is defined as well

function toggleView() {
    let taskList = document.getElementById("task-list");
    let toggleButton = document.querySelector(".btn");
    
    // Toggle between grid and list view
    if (taskList.classList.contains("grid-view")) {
        taskList.classList.remove("grid-view");
        toggleButton.classList.remove("grid-view");
        toggleButton.classList.add("list-view");
    } else {
        taskList.classList.add("grid-view");
        toggleButton.classList.remove("list-view");
        toggleButton.classList.add("grid-view");
    }
}