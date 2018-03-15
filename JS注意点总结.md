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
### 对于面向过程和面向对象编程的理解
#### 面向过程
面向过程编程就是分析解决问题的步骤，然后通过函数实现这些步骤，然后一步一步调用函数即可。
#### 面向对象
面向对象编程就是把需要解决的问题，具体为一个对象，具体为他的属性和行为，也就是功能，实现这些功能即解决问题

多态： 不同对象作用于同一操作产生不同的效果，其实多态实际上就是把做什么（封装的函数）和怎么去做（传入的对象）分开，最直接的表现形式就是将过程化的条件分支语句转换为对象的多态性，从而消除这些条件分支语句

对于面向对象编程思想的理解

基本思想就是利用对象，类，继承和封装等基本概念来进行程序设计

优点：

1.易维护。可读性高，可继承，即使需求改变，也只需要修改局部模块即可，维护成本低。

2.易扩展。可继承

3.重用性高，可继承，降低了重复的工作量，缩短开发周期
##### 为什么方法要写在prototype上？（个人理解）
一个类，拥有属性和方法，继承类的实例属性可以是各不相同的（私有的，比如说兔子有各种颜色，各种大小，年龄,可以通过构造函数传参设置，凡是属于同一类的行为却都是类似的（公有的比如说兔子都要吃饭，睡觉），所以这类公有的行为（方法）应该放在prototype上，我觉得主要还是基于原型链的查找的考虑（不需要搭载多余的属性，不属于公有的就放在prototype上），对于单纯new constructor意义不大。
