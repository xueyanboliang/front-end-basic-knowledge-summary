### 基本类型
#### 与JavaScript中类似的：
##### Number
##### String
##### Boolean
##### 数组
#### 与JavaScript中不同的：
##### 元祖： 可以指定类型和数量的数组
// Declare a tuple type

let x: [string, number];

// Initialize it

x = ['hello', 10]; // OK

// Initialize it incorrectly

x = [10, 'hello']; // Error
##### 枚举：可以为一组数值赋予名字(不是很懂)
enum Color: {red, green, blue};

let c: Color = Color.red;
##### any: 可以为任何类型，常用于需要动态赋值的变量的类型限制；
##### void：没有任何类型，常用于没有返回值的函数，同时只能赋予值null和undefined；
##### Null和Undefined： 意义不大，只可以赋予两个值null和undefined,是所有类型的子类型
##### Never:表示那些永不存在的值的类型，例如， never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型； 变量也可能是 never类型，当它们被永不为真的类型保护所约束时。
#### 类型断言： 简单来说你知道某个变量可能是什么类型，可以直接跳过静态检查
let someValue: any = "this is a string";

let strLength: number = (someValue as string).length;
### 变量声明:同ES6中一致，此处不展开；

