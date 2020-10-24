
function displayTodos(todos) {

    todos.forEach(todo => {
        const todoUL = document.querySelector('.todos');
        const todoLI = document.createElement('li');

        todoLI.innerHTML = `${todo.todo} - ${todo.category}`

        todoUL.append(todoLI)

    })
    
}

async function fetchTodos() {
    const response = await fetch('http://localhost:3000/api');
    const todos = await response.json();
    return todos;
}




  fetchTodos().then(todos => {
    displayTodos(todos)
  });