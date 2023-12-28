
const todos = [
    {id: 1, name: 'дело1' },
    {id: 2, name: 'дело2' },
    {id: 3, name: 'дело3' },
    {id: 4, name: 'дело4' }
]

const button = document.getElementById('adButton')
const list = document.getElementById("item-list")
const input = document.getElementById('adText')

for(let i = 0; i < todos.length; ++i) {
    let names = todos[i].name;
    addListItem(names)
}

function addListItem(value) {
    let li = document.createElement('li');
    li.innerText = value;
    let doneButton = document.createElement('button')
    doneButton.classList.add("doneButton")
    let editButton = document.createElement('button')
    editButton.classList.add("editButton")
    let deleteButton = document.createElement('button')
    deleteButton.classList.add("deleteButton")
    list.appendChild(li);
    li.appendChild(doneButton);
    li.appendChild(editButton);
    li.appendChild(deleteButton);
}

function deleteButtonId(value) {
    document.getElementsByClassName("deleteButton")[value].id = "deleteButton" + value;
}

for (let i = 0; i < 4; ++i) {
    deleteButtonId(i)
}

function deleteTodo() {
    const index = todos.filter(item => item.id !== '1');
    todos.splice(index, 1);
    console.log(todos)
}

const delButton = document.getElementById('deleteButton0')
delButton.addEventListener('click', deleteTodo)

button.addEventListener('click', createTodo)
function createTodo() {
    let textinput = input.value;
    addListItem(textinput)
}