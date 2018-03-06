## JavaScript注意点总结
### window.DOMContentLoaded 所有DOM加载完之后执行，不包括图片视频等资源
### console.dir 可以详细打印出对象的属性和方法
### 在window.onload事件中，如果已经有了很多内容，这时候，输出document.write()；会彻底的清空页面；所以，不要在window.onload中写document.write；
### js中的数据类型分类
#### 按标准划分
number

string

boolean

undefined

null

symbol(ES6新增)

Object
#### 按typeof 划分
number

string

boolean

undefined

object

function
### 判断数据类型的方法

instance of

### NaN跟任何值都不相等，包括他自己，也不相等（在ES6新增方法Object.is(NaN,NaN)中是相等的）
NaN出现的情况：

1)转换失败出现NaN

2)非法运算出现NaN
### 数字转换
parseInt():只能进行整数的转换

parseFloat():能进行小数的转换；
### JS中有哪些对象： Object Array 日期对象 正则对象 JSON对象
### 对象的属性名有不重名的特性=>可以用来去重，对象的属性名如果没有定义的话会报undefined
### JS中属性名采用小驼峰的写法
### querySelector获取的是第一个匹配的元素，querySelectorAll获取的是所有匹配元素，返回的是一个数组
### 保留几位小数用.toFixed()
### 对象中如果想通过[]拿到属性值的话属性名必须加引号，但是数字除外
### 函数自带了一个arguments的参数机制，是一个类数组 比如{'0': 0, '1':1},具有length属性
### []经过number转换后得到的结果为0
### 类数组：
       1）他们打印出来长得像数组

       2）他们都有数组的length属性

       3）他们都有数组的下标

       4）但他们不能使用数组的真正的方法（但可以通过[].slice.call()转换成数组）
### 数据类型的比较规律
1)object==object  对象数据类型是进行地址的比较 []==[]-false

2)object==string  都转成字符串 []==''-true

3)object==number  都转成数字 []==0->true

4)object==boolean 都转成数字 []==![]

* 1.有！号的情况下，会优先进行布尔值的转换 ![]-false-0;

* 2.[] ->0
5)string==number 都转成数字  ''==0 ->true

6)string==boolean 都转成数字 ''==![] ->true

7)number==boolean 都转成数字 0==false ->true; 1=false->?false

8)null==undefined =》true ；null===undefined =》false;

遇到第8个，以上规律都不起作用；

9)NaN 他跟任何值都不相等，包括他自己

总结：只要跟boolean进行“==”比较都转换成数字进行比较，Number类型跟任何类型进行“==”比较都转换成number类型进行比较，Object跟任何类型进行“==”比较都不占据主动，都转换成别的类型进行比较

注意事项：需要明白哪些会进行隐式数据类型转换，但是不要用；

1）在进行运算的时候，都把他们变成相同的数据类型

2）在进行比较的时候，除了 null == undefined其他都用===严格比较
### Math.random() 0-1之间的随机小数；不包含1；
### 数组常用的几个方法
push() 尾部添加

pop()  尾部删除

shift() 头部删除

unshift() 头部添加

splice() 以数组的形式返回被删除的数据，这种方法会改变原数组

slice() 截取 不改变原数组

concat 数组拼接，记住，不改变原数组！！

indexOf 查找数组元素，查到则返回索引，否则返回-1

### document.getElementsByName(); 通过name获取元素，最好应用在获取表单元素；而且只能在document下获取name;
### document.documentElement 整个HTML
### document.body 整个body
### 关于文档尺寸的获取
document.documentElement.clientWidth || document.body.clientWidth

document.documentElement.clientHeight || document.body.clientHeight
### 节点
parentNode 父节点

childNodes 所有子节点，包括元素节点，文本节点，注释节点，document节点

children 元素节点 IE8下还包括注释节点

previousSibling 上一个兄弟节点 previousElementSibling 上一个兄弟元素节点

nextSibling 下一个兄弟节点 nextElementSibling 下一个兄弟元素节点

firstChild 第一个节点(可能是文本节点，元素节点，注释节点等等)

lastChild 最后一个节点(可能是文本节点，元素节点，注释节点等等)

元素节点的nodeType为1
### eval()把字符转换成js代码执行
### 4.字符串常用方法
第一类：通过下标找到对应的字符或者编码

    1.charAt() 通过下标找字符串中对应的字符

    2.charCodeAt(); 通过下标找到每个字符对应的ASCII编码值；

第二类：通过字符找到对应的索引

    3.indexOf()  从前往后找，找到返回的当前字符对应的索引；找不到返回的都是-1；

    4.lastIndexOf()从后往前找，找到返回的当前字符对应的索引；找不到返回的都是-1；

第三类：字符串截取

    5.substr(n,m) 从索引n开始，往后找m个，原字符串不发生改变

    6.substring(n,m) 从索引n开始，到索引m，但不包含m；

    7.slice(n,m)从索引n开始，到索引m，但不包含m；但是他可以取负值；

第四类：字符串转数组

    8.split(切割形式) 通过切割形式转成数组；
第五类： 字符串转大小写

    9.toUpperCase() 字符串转大写

    10.toLowerCase() 字符串转小写
第六类：字符串替换以及以后会用在正则的；
    11.replace(); 字符串替换,用正则去匹配，不改变原字符串

    12.search(); 用来查找字符的，找到返回对应字符的索引； 找不到-1；用正则去匹配，不改变原字符串

    13.match();匹配字符的，找到，就把找到的内容以数组的形式返回；找不到null；用正则去匹配，不改变原字符串
### 日期对象 new Date();
    1.oDate.getFullYear() 年

    2.oDate.getMonth()+1 月份获取时一定要+1；

    3.oDate.getDate() 日

    4.oDate.getDay() 星期 注意：周日 0；

    5.oDate.getHours() 时

    6.oDate.getMinutes() 分

    7.oDate.getSeconds() 秒

    8.getTime() 距离1970年1月1日00时00分00秒的毫秒数
### 定时器
    定时器的返回值：第几个定时器；

    定时器小技巧：每开启一个定时器之前，一定要先关闭没用的定时器；

    定时器关闭

    clearTimeout  可以关闭setTimeout(); 也可以关闭 setInterval();

    clearInterval 可以关闭setTimeout(); 也可以关闭 setInterval();

    注意：我们一般都是成双成对的关闭；
### 关于属性
1).和attribute
2).属性设置的是js属性，通过.可以直接获取到，但在标签上看不到，属于property
3)attribute属于标签上的属性包括自定义属性，在标签上可以显示出来，通过.getAttribute获取，通过setAttribute设置，通过removeAttribute删除
4)注意事项：. 和 attribute 一定不能混搭；即 通过点设置属性，就通过点来获取属性；通过setAttribute来设置属性，就getAttribute来获取属性；
### DOM动态创建
创建元素 document.createElement('tag')

克隆元素 obj.cloneNode(deep);

deep,默认为false，是否采用深度克隆,如果为true,则该节点的所有后代节点也都会被克隆,如果为false,则只克隆该节点本身.克隆一个元素节点会拷贝它所有的属性以及属性值,当然也就包括了属性上绑定的事件(比如onclick="alert(1)"),但不会拷贝那些使用addEventListener()方法或者node.onclick = fn这种用JavaScript动态绑定的事件.

插入到一个元素末尾 parentNode.appendChild(ele)

插入到一个元素之前 parentNode.insertBefore(newEle, oldEle)

替换元素 parentNode.replaceChild(newEle, oldEle)

删除元素 parentNode.removeChild(ele)
### Ajax：async javascript and xml 异步的JS和XML
创建Ajax的几个步骤：

1.创建XMLHttpRequest对象
let XMLHR = new XMLHttpRequest()

低版本浏览器用XMLHR= new ActiveXObject()可以通过window.XMLHttpRequest()进行判断

2.注册回调事件
XMLHR.onreadystatechange = (() => {

    if (XMLHR.reaystate === 4 && XMLHR.status === 200) {
        // to do...
    }

})

3.XMLHR.open('method', url, true/false)

4.XMLHR.send()

readyState的几个状态：

0: 请求未初始化

1: 服务器连接已建立

2: 请求已接收

3: 请求处理中

4: 请求完成，且响应就绪
### 常用状态码
     200 OR ^2\d{2} (200或者以2开头的)  ->都代表响应主体的内容已经成功返回了

     301 ->永久重定向/永久转移

     302 ->临时重定向/临时转移  服务器的负载均衡

     304 ->本次获取的内容是读取缓存中的数据

     400 ->客户端传递给服务器端的参数出现错误

     401 ->无权限访问

     404 ->客户端访问的地址不存在

     500 ->未知的服务器错误

     503 ->服务器已经超负荷 一台服务器能承受10000人，那么第10001个人访问，如果没有做服务器的负载均衡，那么这个人的状态码就是503

### 区分同源和非同源：
    当前页面的地址 && 数据请求的接口地址

    1)协议

    2)域名或者IP

    3)端口号

    以上三部分完全相同属于同源策略,我们使用AJAX技术获取数据;只要有一个不一样的,就属于非同源,我们一般使用JSONP获取数据;
### 处理跨域请求的方法    
#### jsonp原理
通过动态创建script标签并且通过callBack传入回调函数，服务端会自动返回你所请求的数据并且将数据以参数的形式传入你所传入的函数中，然后进行函数执行

 function( url ) jsonHandle{

        var script = document.createElement("script");

        script.setAttribute("src",`${url}callBack=${fn}`);

        document.getElementsByTagName("body")[0].appendChild(script);

    }
### git合并分支 git merge <name>    
### 预解析（其实就是变量提升）
#### 预解析的时候函数会被放在前面，变量在后面
#### 已经声明过的变量不会进行重复声明，但会重新赋值
#### 私有变量只包含两种，一是函数中通过var声明的，二是函数中的形参
#### if条件语句不管成不成立都会进行预解析，且不要在if条件句中声明函数和变量，因为各大浏览器对if条件句的预解析的解析不同，return的返回值不需要进行预解释，但其后的语句需要
#### 回调：为响应事件而执行的函数
#### 回调函数需要注意的几点：
1.函数表达式作为参数传入函数中就是回调函数

2.回调函数被调用多少次取决于是否能达到触发回调函数的条件，就跟事件差不多

3.回调函数中的this一般是指window，如果调用了call方法，则指向call方法中的第一个参数

4.回调函数如何传参，要么直接传，要么通过call方法从第二个参数开始传
#### 闭包：通俗讲就是函数中的函数，依赖于上一层函数中的变量。闭包是函数和声明此函数的词法环境的结合。
#### 函数中的变量只在他的私有作用域中进行预解析而不会在全局作用域中进行预解析
### 内存释放：
堆内存： 存放的是引用数据类型的值，对象存放的是属性名和属性值，函数存放的是代码块的字符串
堆内存释放：只要堆内存被变量占用，就无法释放； var a=xxff00; a=null;

解决措施：让 变量名=null； 即，让变量名等于空指针，当浏览器空闲的时候，就会把指向空指针的变量
收回，浏览器的这种回收机制，叫做垃圾回收机制

栈内存：存放的是全局作用域和私有作用域

全局作用域：当浏览器加载完HTML页面的时候，就形成一个全局作用域；只有关闭页面，才能释放

如果不关闭页面，那么全局作用域下的所有变量和内容都无法得到释放

我们唯一能做的就是减少全局变量

私有作用域：当函数执行的时候，形成一个私有作用域；一般情况下，当函数执行完成的时候私有作用域就被释放

有两种情况不会被释放：

1.如果私有函数中有东西被函数外面的变量或者其他元素占用的时候，此函数不能释放(比如说函数中设置了全局方法类似于window.xx = func)

2.不立即释放

这个函数执行完成的时候，会返回一个函数，被返回的这个函数还需要再执行一次，等返回的函数执行完成，所有的函数才能释放
### 关于this
1.当触发一个元素上的事件时，事件绑定函数中的this就是指该元素

2.函数执行时，‘.’前面的就是this

3.自执行函数中的this永远指的是windowz

4.构造函数中的this指当前实例
### 面向对象
#### 封装
#### 继承
#### 多态
### 构函数模式跟工厂模式的区别：
1.在调用时候

构造函数 new Person()

工厂模式 person()

2.在函数体内的区别

构造函数：系统自动创建一个对象，等我们给对象加工完成后，系统自动输出该对象

工厂模式：手动创建对象，等我们给对象加工完成后，手动输出对象
### 构造函数中，系统默认会为我们返回一个对象；如果我们手动返回的话：
1）return 基本数据类型，不会造成任何影响；实例还有他的属性和方法；

2）return 引用数据类型，会影响系统返回的对象，实例就没有他以前的属性和方法了；
### 构造函数中的this，永远指当前实例
### 原型
1）每一个函数数据类型（类，普通函数）上都天生自带一个属性，叫做prototype（原型），它是一个对象

2）prototype这个原型上，天生自带一个属性，叫做constructor,指向当前所属的类
constructor：类

3）每个对象(实例，普通对象，prototype)上，都天生自带一个属性，叫做__proto__,他指向当前实例所属类的原型
### Object.prototype:都放的公有的属性和方法
hasOwnProperty:判断attr这属性是否是这个对象上的私有属性

isPrototypeOf：obj1是否在obj2的原型链上

propertyIsEnumerable：是否可枚举的属性
### 原型链查找机制：比如要查找f1.x==>对象.属性名
1.首先在当前对象的私有属性中进行查找，找到则返回属性值

2.如果找不到，则通过_proto_在当前实例所属类的原型上进行查找，即公有的属性和方法上进行查找

3.如果还是找不到则继续通过上一步中原型的_proto_沿着原型链进行找到，如果一直找到Object.prototype上还没有就返回undefined

注意：一看到A.prototype={}-->这是自己创建的原型对象，上面一定没有constructor,这个实例就不能进行类的细分，当然你可以对constructor进行定义，规定其所属的类
### 关于call方法
#### 来源：由于call方法在function.prototype这个公有空间中，所以每个函数实例都可以调用call方法
#### call()方法的第一个参数是指this的指向，后面的参数通过逗号隔开作为参数传入函数中
#### call方法与apply方法的区别是在于第二参数，apply的第二个参数是传入的一个由需要传入的参数组成的数组，所以func.call(this, a, b)，func.apply(this, [a, b])
#### call方法与bind方法的区别是call方法是直接对函数进行调用，而bind方法则是返回的一个函数，所以需要再调用一次，所以func.call(this, a, b)func.bind(this, a, b)() 
### 关于对象属性的判断
1.通过in来判断该属性是否属于该对象，包括公有属性和私有属性

2.通过hasOwnProperty判断是否为对象的私有属性
### obj.isPrototypeOf(obj2)判断obj是否在obj2的原型链上
### 带var和带function的声明和定义不同：
带var：只声明不定义

带function：声明+定义
### 带var和不带var的区别：
    带var：1）会进行预解析 2）如果是全局变量的话，带var的还是全局属性window.xx
    不带var: 1)不进行预解析；2)如果是设置的话会沿作用域链一层一层向上查找，找不到的话则为全局变量
### 上级作用域： 只跟函数的堆内存在哪里开辟即函数在哪里定义有关，跟函数在哪里调用无关
