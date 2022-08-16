
async function init() {
    await includeHTML();
}

async function initBackend() { //ruft die Daten aus dem Backend auf
    await downloadFromServer();
    task = JSON.parse(backend.getItem('task')) || [];
}

//* TEMPLATE ----------------------------------------------------------------------------------------------------- */

async function includeHTML() {
    let includeElements = document.querySelectorAll('[w3-include-html]');
    for (let i = 0; i < includeElements.length; i++) {
        const element = includeElements[i];
        file = element.getAttribute("w3-include-html"); // "includes/navbar.html"
        let resp = await fetch(file);
        if (resp.ok) {
            element.innerHTML = await resp.text();
        } else {
            element.innerHTML = 'Page not found';
        }
    }
}

/** DRAG & DROP ----------------------------------------------------------------------------------------------------- */
function allowDrop(event) {
    event.preventDefault();
}

function startDragging(id) {
  currentDraggedElement = id; 
}

async function moveTo(category) {
    let element = task.find(ticket => ticket.id == currentDraggedElement);
    element['status'] = category; 
    backend.setItem('task' , JSON.stringify(task));

    filterAll();
}

/** NAV BAR MOBIL ------------------------------------------------------------------------------------------------------ */

function showNavMobil() {
    document.getElementById('pop-nav').classList.remove('d-none');
}

function closePopNav() {
    document.getElementById('pop-nav').classList.add('d-none');
}

/** Current Link **/
let currentLinkIsBoard = false; 

function currentLink() {
    console.log(currentLinkIsBoard); 
    currentLinkIsBoard = true; 
    console.log(currentLinkIsBoard); 
}




