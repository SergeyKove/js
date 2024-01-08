
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
    let number = todos[i].id;
    addListItem(names, number)
}

function addListItem(value, value2) {
    let li = document.createElement('li');
    li.innerText = value;

    let doneButton = document.createElement('button')
    doneButton.classList.add("doneButton")
    doneButton.addEventListener('click', () => onDone(value2))

    let editButton = document.createElement('button')
    editButton.classList.add("editButton")

    let deleteButton = document.createElement('button')
    deleteButton.classList.add("deleteButton")
    deleteButton.addEventListener('click', () => onDelete(value2))

    li.setAttribute('id', value2)
    list.appendChild(li);
    li.appendChild(doneButton);
    li.appendChild(editButton);
    li.appendChild(deleteButton);
}

function onDelete(value2) {
    let el = document.getElementById(value2);
    el.remove();
}

function onDone(value2) {
    let el = document.getElementById(value2);
    el.style.textDecoration = 'line-through';
}

// function deleteTodo(value) {
//     const index = todos.filter(item => item.id !== '1');
//     todos.splice(index, 1);
//     console.log(todos);
// }
// const delButton = document.getElementById('1')
// delButton.addEventListener('click', deleteTodo())

button.addEventListener('click', createTodo)
function createTodo() {
    let textinput = input.value;
    addListItem(textinput)
}