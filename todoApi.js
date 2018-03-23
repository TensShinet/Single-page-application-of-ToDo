var newTodo = function(task) {
    var t = getTime()
    var todo = {
        task : task,
        time : t,
        done : false,
    }
    return todo
}
var loadTodos = function() {
    var todoStr = localStorage.todos
    if(todoStr == undefined) {
        toodStr = '[]'
    }
    var todoList = JSON.parse(todoStr)
    return todoList
}

var saveTodo = function(todo) {
    var todoList = loadTodos()
    todoList.push(todo)
    saveTodos(todoList)
}

var saveTodos = function(todos) {
    localStorage.todos = JSON.stringify(todos)
}

var saveEditTodos = function() {
    var todoEditDiv = e('.todo-edit')
    var todoHtml = todoEditDiv.querySelectorAll('.todo-content')

    var todos = []
    for (var i = 0; i < todoHtml.length; i++) {
        let p = todoHtml[i].parentElement
        let done = p.classList.contains('done')
        log("saveEditTodos() done:", done)
        let task = todoHtml[i].innerHTML

        var todo = {
            task, task,
            done, done,
        }
        todos.push(todo)
    }
    // 把这个todos 变成localStorage.todos
    saveTodos(todos)
}
