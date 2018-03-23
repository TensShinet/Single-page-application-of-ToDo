// 给所有的按钮绑定事件
// 写出todoApi的功能

var bindEvents = function() {
    var button = e('#id-button-add')
    bindEvent(button, 'click', function(){
        let input = e('#id-input-task')
        let task = input.value
        let todo = newTodo(task)
        saveTodo(todo)
    })

    // 得到点击按钮的dataset, 显示page 和 改变 page 路线
    var buttonTab = ea('.main-tab')
    bindAll(buttonTab, 'click', function(event){
        // log("bindEvents:", event)
        var target = event.target
        let pageName = target.dataset.page.split('-')[1]
        // log('buttonTab:', pageName)
        outputPage(pageName)

    })
    // 给前进后退按钮绑定事件
    window.addEventListener("popstate", function(e) {
        var state = e.state;
        // state 就是 pushState 的第一个参数
        var pageName = state.page
        // log('Debug pageName:', pageName)
        console.log('pop state', state, pageName)
        showPage(pageName)
    })

}
var outputPage = function(pageName) {
    showPage(pageName)
    pushState(pageName)
}

var pushState = function(pageName) {
    // url没有加反斜杠是因为....不是在服务器上显示
    log("pushState() pageName:", pageName)
    var url = 'index.html?page=' + pageName
    var state = {
        page : pageName
    }
    history.pushState(state, 'title', url)
    // 手动设置 title
    document.title = pageName
}

var showPage = function(pageName) {
    // 首先把所有的页面设置为hide
    var pages = ea('.main-page')
    for (var i = 0; i < pages.length; i++) {
        let p = pages[i]
        p.classList.add('main-hide')
    }
    // 把要输出的页面的 page 的hide remove()
    var selector = '.todo-' + pageName
    // log("showPage(): selector:", selector)
    var p = e(selector)
    // log("showPage() p:", p)
    p.classList.remove('main-hide')
    showTodoList()
    // if(className === 'todo-list') {
    //     showTodoList()
    // }
}

var initApp = function() {
    // 检查域名
    // 得到域名
    var query = location.search
    var [k, v] = query.slice(1).split('=')
    var allPages = ['list', 'detail', 'new', 'edit']
    // 检查是否是有效的域名
    page = 'new'
    if(k === 'page') {
        if(allPages.includes(v)) {
            var page = v
        }
    }
    // log("initApp(), initPage:", page)
    showPage(page)
}
var __main = function() {
    initApp()
    bindEvents()
}
__main()
