/*
    Make a Todo List
    0) Make it so that after entering the task and clicking the "Add Task" button, that new task appears inside the todo-list.
    1) Add the ability to check off tasks by clicking on them - (text-decoration:strikethrough is a nice way to)
    BONUS) Add a functioning "delete" button to each task (HINT: use the keyword "this" in your delete button's click listener! Console log "this" to see what value it holds)
    SUPER BONUS) Make each task editable
*/
// console.log('aaa')
let description = document.querySelector('#description')
let addButton = document.querySelector('#add-button')
let toDo = document.querySelector('#todo-list')
let items = document.querySelectorAll('#todo-list li')


addButton.addEventListener('click', function(){
    let newList = document.createElement('li')
    newList.innerHTML = description.value
    toDo.appendChild(newList)
    
    newList.addEventListener('click', function(){
        newList.style['text-decoration']= 'line-through'
    })
    console.dir(document.querySelectorAll('#todo-list li').length)
})
