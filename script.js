let input = document.querySelector(".task-input");
let ul = document.querySelector(".task-list");

function deleteTask(e) {
    e.currentTarget.remove();
}

input.addEventListener("keypress", function(e) {    
    if(e.key == "Enter"){
        let task = input.value;
        if(!task){          
            alert("Error- Adding empty task");
            return;
        }
        input.value = "";
        let li = document.createElement("li");
        li.innerText = emoji + task;   
        li.addEventListener("dblclick", deleteTask);  
        ul.insertBefore(li,ul.firstChild);
    }
})

