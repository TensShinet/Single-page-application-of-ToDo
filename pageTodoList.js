var todoTemplate = function(todo) {
    var done = todo.done
    var task = todo.task
    var t = `
        <div class="todo-celaaAl">
            ${task}
        </div>
    `
    return t
}

var todoEdit = function(todo) {
    var status = ''
    var done = todo.done
    if(done) {
        status = 'done'
    }
    var task = todo.task
    var t = `
        <div class='todo-cell ${status}'>
            <button class='todo-done'>完成</button>
            <button class='todo-delete'>删除</button>
            <span class='todo-content' contenteditable='true'>${task}</span>
        </div>
    `
    return t
}

var todoDetail = function(todo) {
    var task = todo.task
    var t = `
        <div class='todo-cell'>
            <button class='todoList-detail'>点击查看Detail</button>
            <span class='todo-content' contenteditable='true'>${task}</span>
        </div>
    `
    return t
}

var insertTodoList = function(todoList) {
    var todoListDiv = e('.todo-list')
    // 把todoList的东西全部插入那个后面
    // 先把todolistDiv 中的东西全部清空
    todoListDiv.innerHTML = ''
    for (var i = 0; i < todoList.length; i++) {
        let t = todoList[i]
        let content = todoTemplate(t)
        appendHtml(todoListDiv, content)
    }
}
var insertEdit = function(todoList) {
    var todoListDiv = e('.todo-edit')
    // 清空现有的所有 todo
    todoListDiv.innerHTML = ''
    for (var i = 0; i < todoList.length; i++) {
        let t = todoList[i]
        let content = todoEdit(t)
        appendHtml(todoListDiv, content)
    }
}
var insertDetail = function(todoList) {
    var todoListDiv = e('.todo-detail')
    // 清空现有的所有 todo
    todoListDiv.innerHTML = ''
    for (var i = 0; i < todoList.length; i++) {
        let t = todoList[i]
        let content = todoDetail(t)
        appendHtml(todoListDiv, content)
    }
}
var saveAllTodos = function() {
    var todoEditDiv = e('.todo-edit')
    // 事件委托,
    bindEvent(todoEditDiv, 'click', function(event){
        var target = event.target
        var p = target.parentElement
        if(target.classList.contains('todo-done')) {
            // 改变样式
            toggleClass(p, 'done')
            // 保存所有
            saveEditTodos()
        } else if (target.classList.contains('todo-delete')) {
            p.remove()
            saveEditTodos()
        }
    })
}

var showTodoList = function() {
    var todoList = loadTodos()
    insertTodoList(todoList)
    insertEdit(todoList)
    insertDetail(todoList)
}

saveAllTodos()
