// 1 - Handle add TODO
const form = document.querySelector('.add')
const lists = document.querySelector('ul')
// const lists = document.querySelector('.todos')

const generateTemplate = (todo) => {
    const html =  
    `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>
    `
    return html;
}

form.addEventListener('submit', e => {
    e.preventDefault()
    if(form.add.value.trim().length){
        lists.innerHTML += generateTemplate(form.add.value.trim())
        form.reset()
    }else {
        form.reset()
        alert("Pour ajouter une tâche, saisissez du texte")
    }
})

// 2 - Handle delete TODO

const deleteToDo = document.querySelector('ul')
deleteToDo.addEventListener('click', e => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove()
    }
})


// 3 - Handle filter TODO
const search = document.querySelector('.search input')
const filterToDos = (term) => {
    Array.from(lists.children)
    .filter(todo => {
       // return todo.textContent
       return ! todo.textContent.includes(term)
    })
    .forEach(todo => {
        todo.classList.add('filtered')
    })
}

search.addEventListener('keyup', e=> {
    const term = search.value.trim()
    filterToDos(term)
})