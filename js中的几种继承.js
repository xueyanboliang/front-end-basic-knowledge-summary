function Animal (name) {
    this.name = name || 'Animal'
    this.sleep = function () {
        console.log(`${this.name} is sleeping`)
    }
}
Animal.prototype.eat = function (food) {
    console.log(`${this.name} is eating ${food}`)
}
//原型链继承
// 核心：子类的原型是父类的实例
// 缺点：无法实现多继承
// function Cat () {
//     this.smile = function () {
//         console.log(`${this.name} is smiling`)
//     }
// }
// Cat.prototype = new Animal('cat')
// let tony = new Cat()
// console.log(tony.name)
// tony.smile()
// tony.sleep()
// tony.eat('apple')
// 构造继承（call继承）
// 核心：通过call方法调用父类实例方法，可以使用多个call实现多继承
// 缺点： 不能实现原型方法和属性的继承
// function Cat (name) {
//     Animal.call(this, name)
// }
// tony = new Cat('cat')
// console.log(tony.name)
// tony.sleep()
// 实例继承
// 核心：通过在子类构造函数中返回新增了属性和方法的父类实例实现。不限制调用方式，不管是new 子类()还是子类(),返回的对象具有相同的效果
// 缺点：无法实现多继承，且该实例是父类的实例但不是子类的实例
// function Cat () {
//     let cat = new Animal('cat')
//     cat.smile =  function () {
//         console.log(`${this.name} is smiling`)
//     }
//     return cat
// }
// tony = new Cat()
// console.log(tony.name)
// tony.sleep()
// tony.eat('apple')
// 拷贝继承
// 核心：通过将父类的属性和方法
// function Cat () {
//     this.smile = function () {
//         console.log(`${this.name} is smiling`)
//     }
// }
// let cat = new Animal('cat')
// for (var p in cat) {
//     Cat.prototype[p] = cat[p]
// }
// let tony = new Cat()
// console.log(tony.name)
// tony.sleep()
// tony.eat('apple')
// tony.smile()
//组合继承
// 核心： 通过call方法调用父类的实例属性和方法，通过是子类原型等于父类实例继承父类所有的属性和方法
// function Cat () {
//     Animal.call(this, 'cat')
// }
// Cat.prototype = new Animal('cat')
// Cat.prototype.constructor = 'Cat'

//寄生组合继承（完美继承）
function Cat() {
    //继承实例的属性和方法
    Animal.call(this, 'cat')
    this.smile = function () {
        console.log(`${this.name} is smiling`)
    }
}
function Super () {}
Super.prototype = Cat.prototype
Cat.prototype = new Super()
Cat.prototype.constructor = Cat
let tony = new Cat()
console.log(tony)
tony.sleep()
tony.smile()