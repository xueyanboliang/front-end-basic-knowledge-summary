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

previousSibling 上一个兄弟节点

nextSibling 下一个兄弟节点

firstChild 第一个节点(可能是文本节点，元素节点，注释节点等等)

lastChild 最后一个节点(可能是文本节点，元素节点，注释节点等等)
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


