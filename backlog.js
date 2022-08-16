function initBacklog() {
    setTimeout(() => {
        renderBacklog();
    }, 400)    
}

function renderBacklog() {
    document.getElementById('backlogCardWrapper').innerHTML = ``; 
    let backlogTasks = task.filter( t => t['status'] == `backlog`);
    for (let i = 0; i < backlogTasks.length; i++) {
        const element = backlogTasks[i];
        document.getElementById('backlogCardWrapper').innerHTML += generateBacklog(element);
    }
}   

function generateBacklog(element) {
    return `
    <div class="backlogCard">
        <div class="backlogCardAvatar width30">
            <img src="Profilpicture/profilepicture2.png" class="assignedTo">
            <div class="assignedToText">
            <span class="namebacklog">Britney </span> <br>
            <span class="emailbacklog">britney@outlook.com</span></div>
        </div>
        <div class="backlogCardCategory width20">
            <span>${element.category} </span>
        </div>
        <div class="backlogCardDetails width50bl">
            <span>${element.title}</span>                    
        </div>
        <div>
            <img src="img/board.png" title="Move this task to the board!" onclick="backlogToBoard(${element.id})" class="delete-task-backlog">
        <div>
    </div>  
    `
}

function backlogToBoard(id) {
    let element = task.find(ticket => ticket.id == id);
    element['status'] = 'toDo'; 
    backend.setItem('task' , JSON.stringify(task));
    initBacklog(); 
}