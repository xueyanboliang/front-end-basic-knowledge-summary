# ES6总结
### let 和 const
#### ES6 明确规定，如果区块中存在let和const命令，这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。凡是在声明之前就使用这些变量，就会报错。
#### 暂时性死区的本质就是，只要一进入当前作用域，所要使用的变量就已经存在了，但是不可获取，只有等到声明变量的那一行代码出现，才可以获取和使用该变量。
#### let不允许在相同作用域内，重复声明同一个变量。
#### let声明的变量只在它所在的代码块有效。
#### for循环还有一个特别之处，就是设置循环变量的那部分是一个父作用域，而循环体内部是一个单独的子作用域。
#### let 不存在变量提升
#### 总结：let的特点： 1.形成块级作用域，同时变量也只在本作用域有效，外部也无法影响 2.不存在变量提升 3.暂存死区，即使用前必须先声明 4.不能重复声明
#### const声明一个只读的常量。一旦声明，常量的值就不能改变。
#### const声明的变量不得改变值，这意味着，const一旦声明变量，就必须立即初始化，不能留到以后赋值。
#### const的作用域与let命令相同：只在声明所在的块级作用域内有效。
#### const命令声明的常量也是不提升，同样存在暂时性死区，只能在声明的位置后面使用。
#### const声明的常量，也与let一样不可重复声明。
#### const的本质：const实际上保证的，并不是变量的值不得改动，而是变量指向的那个内存地址不得改动。对于简单类型的数据（数值、字符串、布尔值），值就保存在变量指向的那个内存地址，因此等同于常量。但对于复合类型的数据（主要是对象和数组），变量指向的内存地址，保存的只是一个指针，const只能保证这个指针是固定的，至于它指向的数据结构是不是可变的，就完全不能控制了。因此，将一个对象声明为常量必须非常小心。
#### 如果真的想将对象冻结，应该使用Object.freeze方法。除了将对象本身冻结，对象的属性也应该冻结。这样才能彻底冻结一个对象
#### 总结： const的特点：1.声明之后就不能在改变，声明之后必须马上赋值 2.不可重复声明 3.不存在变量提升 4.存在暂存死区 5.会形成块级作用域 6.const指的值不可改变实际上指的是地址不变，要想存的对象完全不变，必须深冻结
### 块级作用域
#### 外层作用域无法读取内层作用域的变量
#### 内层作用域可以定义外层作用域的同名变量。
#### ES5 规定，函数只能在顶层作用域和函数作用域之中声明，不能在块级作用域声明。ES6 引入了块级作用域，明确允许在块级作用域之中声明函数。ES6 规定，块级作用域之中，函数声明语句的行为类似于let，在块级作用域之外不可引用。
#### 在浏览器的 ES6 环境中，块级作用域内声明的函数，行为类似于var声明的变量。考虑到环境导致的行为差异太大，应该避免在块级作用域内声明函数。如果确实需要，也应该写成函数表达式，而不是函数声明语句。
#### ES6 的块级作用域允许声明函数的规则，只在使用大括号的情况下成立，如果没有使用大括号，就会报错。也就是说块级作用域只在大括号下才成立
### ES声明变量的方法：ES5 只有两种声明变量的方法：var命令和function命令。ES6 除了添加let和const命令，后面章节还会提到，另外两种声明变量的方法：import命令和class命令。所以，ES6 一共有 6 种声明变量的方法。
### 顶层对象的获取
#### 方法1
var getGlobal = function () {

  if (typeof self !== 'undefined') { return self; }

  if (typeof window !== 'undefined') { return window; }

  if (typeof global !== 'undefined') { return global; }

  throw new Error('unable to locate global object');

};
#### 方法2
现在有一个提案，在语言标准的层面，引入global作为顶层对象。也就是说，在所有环境下，global都是存在的，都可以从它拿到顶层对象。

垫片库system.global模拟了这个提案，可以在所有环境拿到global。
### 解构赋值
#### 本质上，这种写法属于“模式匹配”，只要等号两边的模式相同，左边的变量就会被赋予对应的值。
#### 如果解构不成功，变量的值就等于undefined。
#### 不完全解构，即等号左边的模式，只匹配一部分的等号右边的数组。这种情况下，解构依然可以成功。
#### 如果等号的右边不是数组（或者严格地说，不是可遍历的结构，参见《Iterator》一章），那么将会报错。
#### 事实上，只要某种数据结构具有 Iterator 接口，都可以采用数组形式的解构赋值。
#### 解构赋值允许指定默认值。如：
let [x, y = 'b'] = ['a']; // x='a', y='b'

let [x, y = 'b'] = ['a', undefined]; // x='a', y='b'

注意，ES6 内部使用严格相等运算符（===），判断一个位置是否有值。所以，只有当一个数组成员严格等于undefined，默认值才会生效。

默认值可以引用解构赋值的其他变量，但该变量必须已经声明。
#### 对象的解构赋值
##### 对象的属性没有次序，变量必须与属性同名，才能取到正确的值。
##### 对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。真正被赋值的是后者，而不是前者。 如：
let { foo: baz } = { foo: "aaa", bar: "bbb" };

baz // "aaa" 

foo // error: foo is not defined
##### 对象的解构也可以指定默认值。默认值生效的条件是，对象的属性值严格等于undefined。
#### 字符串的结构赋值 字符串也可以解构赋值。这是因为此时，字符串被转换成了一个类似数组的对象
#### 函数参数也可以进行解构赋值
#### 圆括号问题 建议只要有可能，就不要在模式中放置圆括号。
### 解构赋值的规则是，只要等号右边的值不是对象或数组，就先将其转为对象。由于undefined和null无法转为对象，所以对它们进行解构赋值，都会报错。
### 解构赋值的用途：1.交换两个变量的值 2.从函数返回多个值返回出来之后进行赋值 3.函数参数的定义 4.提取json数据（很有用）
### 字符串的扩展
#### 字符串的遍历接口 ES6中字符串可以通过for of进行遍历
##### includes()：返回布尔值，表示是否找到了参数字符串。
##### repeat方法返回一个新字符串，表示将原字符串重复n次。
##### 模板字符串 写法：`${变量/表达式/函数}`
如果大括号中的值不是字符串，将按照一般的规则转为字符串。比如，大括号中是一个对象，将默认调用对象的toString方法。

如果模板字符串中的变量没有声明，将报错。
### 数值的扩展 Number.isNaN()用来检查一个值是否为NaN。与传统的isNaN()方法的区别是传统的isNaN()是先调用Number()方法，而Number.isNaN()只对数值有效
#### Math.trunc方法用于去除一个数的小数部分，返回整数部分
### 函数的扩展
#### 函数参数默认值的指定
双重默认值

function fetch(url, { body = '', method = 'GET', headers = {} } = {}) {

  console.log(method);

}

fetch('http://example.com')

// "GET"

定义了默认值的参数应该是函数参数的尾参数，因为这样比较容易看出来，到底省略了哪些参数。如果非尾部的参数设置默认值，实际上这个参数是没法省略的。
#### 函数的length属性 指定了默认值以后，函数的length属性，将返回没有指定默认值的参数个数。也就是说，指定了默认值后，length属性将失真。
#### 函数参数作用域

一旦设置了参数的默认值，函数进行声明初始化时，参数会形成一个单独的作用域（context），查找规则是本作用域找不到就到上一层作用域进行查找，一直找到全局，找不到就报undefined。等到初始化结束，这个作用域就会消失。这种语法行为，在不设置参数默认值时，是不会出现的。

#### 应用 
利用参数默认值，可以指定某一个参数不得省略，如果省略就抛出一个错误。如下：
function throwIfMissing() {

  throw new Error('Missing parameter');

}

function foo(mustBeProvided = throwIfMissing()) {

  return mustBeProvided;

}

foo()

// Error: Missing parameter
#### Rest参数 ES6 引入 rest 参数（形式为...变量名），用于获取函数的多余参数，这样就不需要使用arguments对象了。rest 参数搭配的变量是一个数组，该变量将多余的参数放入数组中。如下： 
function add (...val) {
    let sum = 0
    for (let i = 0; i < val.length; i ++) {
        sum += val[i]
    }
    console.log(sum)
}
add (2, 5, 7)// 14
#### rest参数实际上是代替了arguments  rest 参数之后不能再有其他参数（即只能是最后一个参数），否则会报错。函数的length属性，不包括 rest 参数。
#### name属性 函数的name属性，返回该函数的函数名。
#### 箭头函数
如果箭头函数不需要参数或需要多个参数，就使用一个圆括号代表参数部分。

如果箭头函数的代码块部分多于一条语句，就要使用大括号将它们括起来，并且使用return语句返回。

由于大括号被解释为代码块（会作为代码块执行），所以如果箭头函数直接返回一个对象，必须在对象外面加上括号，否则会报错。

与解构赋值结合：
const full = ({ first, last }) => first + ' ' + last;

// 等同于
function full(person) {

  return person.first + ' ' + person.last;

}

##### 箭头函数根本没有自己的this，导致内部的this就是！！外层代码块的this！！。正是因为它没有this，所以也就不能用作构造函数。
所以，箭头函数转成 ES5 的代码如下：

function foo() {

  setTimeout(() => {

    console.log('id:', this.id);

  }, 100);

}

// ES5
function foo() {

  var _this = this;


  setTimeout(function () {

    console.log('id:', _this.id);

  }, 100);

}
##### 除了this，以下三个变量在箭头函数之中也是不存在的，指向外层函数的对应变量：arguments、super、new.target。
##### 由于箭头函数没有自己的this，所以当然也就不能用call()、apply()、bind()这些方法去改变this的指向。
#### 关于箭头函数的总结：
1.箭头函数的this在声明的时候已经百分之百确定了，也不管嵌套了多少层，跟调用时所在的上下文完全无关。箭头函数其实压根没有自己的this，所以箭头函数的this就是它上一层代码块中的this=> let _this = this

2.箭头函数不能作为构造函数，因为他压根没有自己的this

3.箭头函数没有自己的arguments，所以不能使用，如果硬要找的话可以找到不是箭头函数的普通函数那一层，但可以用rest参数即...rest,rest变量

4.箭头函数不能用yield命令
#### 双冒号运算符 函数绑定运算符是并排的两个冒号（::），双冒号左边是一个对象，右边是一个函数。该运算符会自动将左边的对象，作为上下文环境（即this对象），绑定到右边的函数上面。如下：
foo::bar;
// 等同于
bar.bind(foo);

foo::bar(...arguments);
// 等同于
bar.apply(foo, arguments);
 #### 尾调用（Tail Call）是函数式编程的一个重要概念，本身非常简单，一句话就能说清楚，就是指某个函数的最后一步是调用另一个函数。注意一定是！！！最后一步！！！才是尾调用！
### 对象的扩展
#### 属性的简写，如下：
function f(x, y) {

  return {x, y};

}

// 等同于

function f(x, y) {

  return {x: x, y: y};

}

f(1, 2) // Object {x: 1, y: 2}
#### 属性名表达式 用表达式作为属性名，这时要将表达式放在方括号之内。
#### Object.is() JavaScript 缺乏一种运算，在所有环境中，只要两个值是一样的，它们就应该相等。Object.is就是部署这个算法的新方法。它用来比较两个值是否严格相等，与严格比较运算符（===）的行为基本一致。
除了：
+0不等于-0和NaN等于自身
#### Object.assign() Object.assign方法用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target）。
注意:1)同名属性的处理。如果目标对象与源对象有同名属性，或多个源对象有同名属性，则后面的属性会覆盖前面的属性。
    2)浅拷贝。Object.assign方法实行的是浅拷贝，而不是深拷贝。也就是说，如果源对象某个属性的值是对象，那么目标对象拷贝得到的是这个对象的引用。
    3)数组的处理。 Object.assign可以用来处理数组，但是会把数组视为对象。
    4)取值函数的处理。 Object.assign只能进行值的复制，如果要复制的值是一个取值函数，那么将求值后再复制。
##### 用途：
1.为对象添加属性和方法

2.浅拷贝对象

3.合并多个对象

4.为属性指定默认值

#### 可枚举属性
目前，有四个操作会忽略enumerable为false的属性。

for...in循环：只遍历对象自身的和继承的可枚举的属性。

Object.keys()：返回对象自身的所有可枚举的属性的键名。

JSON.stringify()：只串行化对象自身的可枚举的属性。

Object.assign()： 忽略enumerable为false的属性，只拷贝对象自身的可枚举的属性。   
### 属性的遍历
ES6 一共有 5 种方法可以遍历对象的属性。

（1）for...in

for...in循环遍历对象自身的和继承的可枚举属性（不含 Symbol 属性）。

（2）Object.keys(obj)

Object.keys返回一个数组，包括对象自身的（不含继承的）所有可枚举属性（不含 Symbol 属性）的键名。

（3）Object.getOwnPropertyNames(obj)

Object.getOwnPropertyNames返回一个数组，包含对象自身的所有属性（不含 Symbol 属性，但是包括不可枚举属性）的键名。

（4）Object.getOwnPropertySymbols(obj)

Object.getOwnPropertySymbols返回一个数组，包含对象自身的所有 Symbol 属性的键名。

（5）Reflect.ownKeys(obj)

Reflect.ownKeys返回一个数组，包含对象自身的所有键名，不管键名是 Symbol 或字符串，也不管是否可枚举。

以上的 5 种方法遍历对象的键名，都遵守同样的属性遍历的次序规则。

首先遍历所有数值键，按照数值升序排列。

其次遍历所有字符串键，按照加入时间升序排列。

最后遍历所有 Symbol 键，按照加入时间升序排列。
#### Object.getOwnPropertyDescriptors方法，返回指定对象所有自身属性（非继承属性）的描述对象。
#### super关键字表示原型对象。只能用在对象的方法之中，用在其他地方都会报错。目前，只有对象方法的简写法可以让 JavaScript 引擎确认，定义的是对象的方法。如下：
const _proto_ {

    foo: 'hello world!'
}

Object.setPrototypeOf(obj, _proto_);

const obj = {

  foo: 'world',

  find() {
    
    console.log(this)

    return super.foo;

  }

}; 

obj.find() // "hello"
#### 上面代码中，super.foo指向原型对象proto的foo属性，但是函数中绑定的this却还是当前对象obj
#### Object.keys方法，返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键名。
#### Object.values方法返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键值。
#### Object.entries方法返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键值对数组。如下：
const obj = { foo: 'bar', baz: 42 };

Object.entries(obj)
// [ ["foo", "bar"], ["baz", 42] ]
#### 对象的扩展运算符
const [a, ...b] = [1, 2, 3];

a // 1

b // [2, 3]
##### 对象的扩展运算符（...）用于取出参数对象的所有可遍历属性，拷贝到当前对象之中。
let z = { a: 3, b: 4 };

let n = { ...z };

n // { a: 3, b: 4 }
### symbol 一种新的js基本数据类型，与字符串类似，但独一无二。如： let s = Symbol
Symbol函数可以接受一个字符串作为参数，表示对 Symbol 实例的描述，主要是为了在控制台显示，或者转为字符串时，比较容易区分。

如果 Symbol 的参数是一个对象，就会调用该对象的toString方法，将其转为字符串，然后才生成一个 Symbol 值。

注意，Symbol函数的参数只是表示对当前 Symbol 值的描述，因此相同参数的Symbol函数的返回值是不相等的。

Symbol 值不能与其他类型的值进行运算，会报错。

Symbol 值也可以转为布尔值，但是不能转为数值。
#### 用途：作为属性名
由于每一个 Symbol 值都是不相等的，这意味着 Symbol 值可以作为标识符，用于对象的属性名，就能保证不会出现同名的属性。这对于一个对象由多个模块构成的情况非常有用，能防止某一个键被不小心改写或覆盖。

注意，Symbol 值作为对象属性名时，不能用点运算符。

const mySymbol = Symbol();

const a = {};

a.mySymbol = 'Hello!';

a[mySymbol] // undefined

a['mySymbol'] // "Hello!"

上面代码中，因为点运算符后面总是字符串，所以不会读取mySymbol作为标识名所指代的那个值，导致a的属性名实际上是一个字符串，而不是一个 Symbol 值。

同理，在对象的内部，使用 Symbol 值定义属性时，Symbol 值必须放在方括号之中。

#### 魔术字符串 魔术字符串指的是，在代码之中多次出现、与代码形成强耦合的某一个具体的字符串或者数值。风格良好的代码，应该尽量消除魔术字符串，改由含义清晰的变量代替。
常用的消除魔术字符串的方法，就是把它写成一个变量。

### set 和 map数据结构
#### ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。
Set 函数可以接受一个数组（或者具有 iterable 接口的其他数据结构）作为参数，用来初始化。

向 Set 加入值的时候，不会发生类型转换，所以5和"5"是两个不同的值。Set 内部判断两个值是否不同，使用的算法叫做“Same-value-zero equality”，它类似于精确相等运算符（===），主要的区别是NaN等于自身，而精确相等运算符认为NaN不等于自身。

Set 结构的实例有以下属性。

Set.prototype.constructor：构造函数，默认就是Set函数。

Set.prototype.size：返回Set实例的成员总数。

Set 实例的方法分为两大类：操作方法（用于操作数据）和遍历方法（用于遍历成员）。下面先介绍四个操作方法。

add(value)：添加某个值，返回 Set 结构本身。

delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。

has(value)：返回一个布尔值，表示该值是否为Set的成员。

clear()：清除所有成员，没有返回值。

Array.from方法可以将 Set 结构转为数组。
##### 这就提供了去除数组重复成员的另一种方法。

function dedupe(array) {

  return Array.from(new Set(array));

}

dedupe([1, 1, 2, 3]) // [1, 2, 3]

Set 结构的实例有四个遍历方法，可以用于遍历成员。

keys()：返回键名的遍历器

values()：返回键值的遍历器

entries()：返回键值对的遍历器

forEach()：使用回调函数遍历每个成员

keys方法、values方法、entries方法返回的都是遍历器对象。由于 Set 结构没有键名，只有键值（或者说键名和键值是同一个值），所以keys方法和values方法的行为完全一致。

forEach方法的参数就是一个处理函数。该函数的参数与数组的forEach一致，依次为键值、键名。这里需要注意，Set 结构的键名就是键值（两者是同一个值），因此第一个参数与第二个参数的值永远都是一样的。
### Map ES6 提供了 Map 数据结构。它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。也就是说，Object 结构提供了“字符串—值”的对应，Map 结构提供了“值—值”的对应，是一种更完善的 Hash 结构实现。如果你需要“键值对”的数据结构，Map 比 Object 更合适。
作为构造函数，Map 也可以接受一个数组作为参数。该数组的成员是一个个表示键值对的数组。

Map 的键实际上是跟内存地址绑定的，只要内存地址不一样，就视为两个键。这就解决了同名属性碰撞（clash）的问题，我们扩展别人的库的时候，如果使用对象作为键名，就不用担心自己的属性与原作者的属性同名。

如果 Map 的键是一个简单类型的值（数字、字符串、布尔值），则只要两个值严格相等，Map 将其视为一个键，比如0和-0就是一个键，布尔值true和字符串true则是两个不同的键。另外，undefined和null也是两个不同的键。虽然NaN不严格相等于自身，但 Map 将其视为同一个键。
#### 实例的属性和操作方法 
size属性返回 Map 结构的成员总数

set(key, value) set方法设置键名key对应的键值为value，然后返回整个 Map 结构。如果key已经有值，则键值会被更新，否则就新生成该键。

get(key) get方法读取key对应的键值，如果找不到key，返回undefined。

has(key) has方法返回一个布尔值，表示某个键是否在当前 Map 对象之中。

delete(key) delete方法删除某个键，返回true。如果删除失败，返回false。

clear() clear方法清除所有成员，没有返回值。

Map 结构原生提供三个遍历器生成函数和一个遍历方法。

keys()：返回键名的遍历器。

values()：返回键值的遍历器。

entries()：返回所有成员的遍历器。

forEach()：遍历 Map 的所有成员。

需要特别注意的是，Map 的遍历顺序就是插入顺序。
#### 与其他数据结构的相互转换
Map 转为数组最方便的方法，就是使用扩展运算符（...）。

将数组传入 Map 构造函数，就可以转为 Map。

### 函数的扩展

#### 扩展运算符（spread）是三个点（...）。它好比 rest 参数的逆运算，将一个数组转为用逗号分隔的参数序列。

#### 扩展运算符的用途：
1.复制数组

2.合并数组

3.与解构赋值结合

4.扩展运算符还可以将字符串转为真正的数组。

5.实现了 Iterator 接口的对象  任何 Iterator 接口的对象（参阅 Iterator 一章），都可以用扩展运算符转为真正的数组。
#### Array.from()
Array.from方法用于将两类对象转为真正的数组：类似数组的对象（array-like object）和可遍历（iterable）的对象（包括 ES6 新增的数据结构 Set 和 Map）
#### Array.of方法用于将一组值，转换为数组。
Array.of(3, 11, 8) // [3,11,8]

Array.of(3) // [3]

Array.of(3).length // 1
#### 数组实例的 entries()，keys() 和 values()
#### 数组实例的includes方法 返回一个布尔值，表示某个数组是否包含给定的值。如:[1,2,3].includes(2) => true
### Proxy 
Proxy 用于修改某些操作的默认行为，等同于在语言层面做出修改，所以属于一种“元编程”（meta programming），即对编程语言进行编程。

Proxy 可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。Proxy 这个词的原意是代理，用在这里表示由它来“代理”某些操作，可以译为“代理器”。
#### var proxy = new Proxy(target, handler);表示对proxy进行代理
Proxy 对象的所有用法，都是上面这种形式，不同的只是handler参数的写法。其中，new Proxy()表示生成一个Proxy实例，target参数表示所要拦截的目标对象，handler参数也是一个对象，用来定制拦截行为。

注意，要使得Proxy起作用，必须针对Proxy实例（上例是proxy对象）进行操作，而不是针对目标对象（上例是空对象）进行操作。
##### this问题
在 Proxy 代理的情况下，目标对象内部的this关键字会指向 Proxy 代理。
### Reflect（主要是一些语言内部的方法）
reflect的作用：
1.替代object对象上一些针对语言内部的方法。现阶段，某些方法同时在Object和Reflect对象上部署，未来的新方法将只部署在Reflect对象上。也就是说，从Reflect对象上可以拿到语言内部的方法。

2.修改某些Object方法的返回结果，让其变得更合理。比如，Object.defineProperty(obj, name, desc)在无法定义属性时，会抛出一个错误，而Reflect.defineProperty(obj, name, desc)则会返回false。

3.让Object操作都变成函数行为。某些Object操作是命令式，比如name in obj和delete obj[name]，而Reflect.has(obj, name)和Reflect.deleteProperty(obj, name)让它们变成了函数行为。

4.使Proxy可以方便地调用Reflect方法，完成默认行为，作为修改行为的基础。Reflect对象的方法与Proxy对象的方法一一对应，只要是Proxy对象的方法，就能在Reflect对象上找到对应的方法。也就是说，不管Proxy怎么修改默认行为，你总可以在Reflect上获取默认行为。
#### Reflect.apply(func, thisArg, args)
Reflect.apply方法等同于Function.prototype.apply.call(func, thisArg, args)，用于绑定this对象后执行给定函数。
#### Reflect.isExtensible (target)
Reflect.isExtensible方法对应Object.isExtensible，返回一个布尔值，表示当前对象是否可扩展。
#### Reflect.ownKeys (target)
Reflect.ownKeys方法用于返回对象的所有属性，基本等同于Object.getOwnPropertyNames与Object.getOwnPropertySymbols之和。
#### 总结：逐渐开始用reflect系列方法代替Object操作语言内部的方法，因为Object这些方法会慢慢被废除
### Promise
Promise 是异步编程的一种解决方案，比传统的解决方案——回调函数和事件——更合理和更强大。它由社区最早提出和实现，ES6 将其写进了语言标准，统一了用法，原生提供了Promise对象。

所谓Promise，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。从语法上说，Promise 是一个对象，从它可以获取异步操作的消息。Promise 提供统一的 API，各种异步操作都可以用同样的方法进行处理。

Promise对象有以下两个特点。

（1）对象的状态不受外界影响。Promise对象代表一个异步操作，有三种状态：pending（进行中）、fulfilled（已成功）和rejected（已失败）。只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。这也是Promise这个名字的由来，它的英语意思就是“承诺”，表示其他手段无法改变。

（2）一旦状态改变，就不会再变，任何时候都可以得到这个结果。Promise对象的状态改变，只有两种可能：从pending变为fulfilled和从pending变为rejected。只要这两种情况发生，状态就凝固了，不会再变了，会一直保持这个结果，这时就称为 resolved（已定型）。如果改变已经发生了，你再对Promise对象添加回调函数，也会立即得到这个结果。这与事件（Event）完全不同，事件的特点是，如果你错过了它，再去监听，是得不到结果的。

有了Promise对象，就可以将异步操作以同步操作的流程表达出来，避免了层层嵌套的回调函数。此外，Promise对象提供统一的接口，使得控制异步操作更加容易。

Promise也有一些缺点。首先，无法取消Promise，一旦新建它就会立即执行，无法中途取消。其次，如果不设置回调函数，Promise内部抛出的错误，不会反应到外部。第三，当处于pending状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）。

如果某些事件不断地反复发生，一般来说，使用 Stream 模式是比部署Promise更好的选择。
#### Promise.prototype.then()
Promise 实例具有then方法，也就是说，then方法是定义在原型对象Promise.prototype上的。它的作用是为 Promise 实例添加状态改变时的回调函数。前面说过，then方法的第一个参数是resolved状态的回调函数，第二个参数（可选）是rejected状态的回调函数。

then方法返回的是一个新的Promise实例（注意，不是原来那个Promise实例）。因此可以采用链式写法，即then方法后面再调用另一个then方法。
#### Promise.prototype.catch()
Promise.prototype.catch方法是.then(null, rejection)的别名，用于指定发生错误时的回调函数。

getJSON('/posts.json').then(function(posts) {

  // ...

}).catch(function(error) {

  // 处理 getJSON 和 前一个回调函数运行时发生的错误

  console.log('发生错误！', error);
  
});

#### Promise.prototype.finally()
finally方法用于指定不管 Promise 对象最后状态如何，都会执行的操作。该方法是 ES2018 引入标准的。

promise

.then(result => {···})

.catch(error => {···})

.finally(() => {···});
#### Promise.all()
Promise.all方法用于将多个 Promise 实例，包装成一个新的 Promise 实例。

p的状态由p1、p2、p3决定，分成两种情况。

const p = Promise.all([p1, p2, p3]);

（1）只有p1、p2、p3的状态都变成fulfilled，p的状态才会变成fulfilled，此时p1、p2、p3的返回值组成一个数组，传递给p的回调函数。

（2）只要p1、p2、p3之中有一个被rejected，p的状态就变成rejected，此时第一个被reject的实例的返回值，会传递给p的回调函数。
#### Promise.race() 
Promise.race方法同样是将多个 Promise 实例，包装成一个新的 Promise 实例。

const p = Promise.race([p1, p2, p3]);

上面代码中，只要p1、p2、p3之中有一个实例率先改变状态，p的状态就跟着改变。那个率先改变的 Promise 实例的返回值，就传递给p的回调函数。

Promise.race方法的参数与Promise.all方法一样，如果不是 Promise 实例，就会先调用下面讲到的Promise.resolve方法，将参数转为 Promise 实例，再进一步处理。

下面是一个例子，如果指定时间内没有获得结果，就将 Promise 的状态变为reject，否则变为resolve。

const p = Promise.race([

  fetch('/resource-that-may-take-a-while'),

  new Promise(function (resolve, reject) {

    setTimeout(() => reject(new Error('request timeout')), 5000)

  })

]);

p
.then(console.log)

.catch(console.error);

上面代码中，如果 5 秒之内fetch方法无法返回结果，变量p的状态就会变为rejected，从而触发catch方法指定的回调函数。
### Promise.resolve()
有时需要将现有对象转为 Promise 对象，Promise.resolve方法就起到这个作用。
### Promise.reject()
Promise.reject(reason)方法也会返回一个新的 Promise 实例，该实例的状态为rejected。
### ES6 创造了一种新的遍历命令for...of循环，Iterator 接口主要供for...of消费。


