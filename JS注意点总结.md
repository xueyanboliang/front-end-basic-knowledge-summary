function addEventListener(elem, type, handler) {
    if (elem.addEventListener){
        elem.addEventListener(type, handler, false)
        return handler
    } else if (elem.attachEvent){
        function wrapper (){
            let event = window.event
            let target = event.srcElement
            return handler.call(elem, target)
        }
        elem.attacheEvent(on + 'type', wrapper)
        return wrapper
    }
}
a.parentNode.insertBefore(btn1, btn2)

### encodeURIComponent() 函数可把字符串作为 URI 组件进行编码。encodeURIComponent()可以大大提高安全性