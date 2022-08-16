function initArchive() {
    setTimeout(() => {
        renderArchive();
    }, 400)
}

function renderArchive() {
    let archiv = document.getElementById('archiveBox');
    archiv.innerHTML = ``;
    let archiveTasks = task.filter( t => t['status'] == `archive`);
    for (let i = 0; i < archiveTasks.length; i++) {
        const element = archiveTasks[i];
        document.getElementById('archiveBox').innerHTML += generateArchiveHTML(element);
    }
}

function generateArchiveHTML(element) {
    return `
    <div class="backlogCard">
       
    <div class="assignedToText width30">
            <span class="namebacklog">Britney </span> <br>
    </div>
    <div class="backlogCardCategory width20">
        <span>${element.category} </span>
    </div>
    <div class="backlogCardDetails width50bl">
        <span>${element.title}</span>                    
    </div>
    <img src="img/trash.png" alt="trash icon" class="trash-archive" onclick="deleteTask(${element.id})">
</div>
    `;
}

async function deleteTask(id) {
    let deleteTask = task.find(t => t['id'] == id);
    let test = task.indexOf(deleteTask);
    task.splice(test, 1);
    let allTasksAsString = JSON.stringify(task)
    await backend.setItem('task', allTasksAsString);
    initArchive();
}

function deleteUser(name) {
    backend.deleteItem('users');
}
