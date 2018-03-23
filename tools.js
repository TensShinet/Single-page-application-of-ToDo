var log = function() {
    console.log.apply(console, arguments)
}

var e = function(selector) {
    return document.querySelector(selector)
}
var ea = function(selector) {
    return document.querySelectorAll(selector)
}
var getTime = function() {
    var t = new Date()
    var y = t.getFullYear()
    var mon = t.getMonth() + 1
    var d = t.getDate()
    var h = t.getHours()
    var min = t.getMinutes()

    var str = `${y}/${mon}/${d} ${h}:${min}`
    return str
}
var appendHtml = function(element, html) {
	element.insertAdjacentHTML('beforeend', html)
}
var toggleClass = function(element, className) {
    if (element.classList.contains(className)) {
        element.classList.remove(className)
    } else {
        element.classList.add(className)
    }
}
var bindEvent = function(element, eventName, callBack) {
    element.addEventListener(eventName, function(event) {
        callBack(event)
    })
}
var bindAll = function(elements, eventName, callBack) {
    for (var i = 0; i < elements.length; i++) {
        let s = elements[i]
        bindEvent(s, eventName, callBack)
    }
}
