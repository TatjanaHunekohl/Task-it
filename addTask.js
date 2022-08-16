let task = {};
let newTask; 

async function addTask() {
  
   let title = document.getElementById('title');
   let dueDate = document.getElementById('dueDate');
   let category = document.getElementById('category');
   let valueCategory = category.options[category.selectedIndex].value; 
   let urgency = document.getElementById('urgency'); 
   let valueUrgency = urgency.options[urgency.selectedIndex].value;
   console.log(valueCategory, valueUrgency)
   let text = document.getElementById('text'); 
   
   newTask = {
      'id' : new Date().valueOf(),
      'title' : title.value,
      'dueDate' : dueDate.value,
      'category' : valueCategory,
      'urgency' : valueUrgency,
      'text' : text.value,
      'status' : "backlog"
   }

   task.push(newTask);
   let allTasksAsString = JSON.stringify(task)
   await backend.setItem('task', allTasksAsString);
   window.open("backlog.html")
   cancel(); 
}

function cancel() {
   document.getElementById('title').value = ``;
   document.getElementById('dueDate').value = ``;
   document.getElementById('category').value = ``;
   document.getElementById('urgency').value = ``;
   document.getElementById('text').value = ``; 
}





