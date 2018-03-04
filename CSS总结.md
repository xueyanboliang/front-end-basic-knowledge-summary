# CSS总结
### id和class选择器，id和class的命名都不要以数字开头，这样在火狐浏览器中无效
### 样式表优先级： 浏览器缺省值设置<外部样式表<内部样式表<内联样式表
### 各种样式表的应用范围：
#### 外部样式表：当样式需要应用于很多页面时，外部样式表将是理想的选择。在使用外部样式表的情况下，你可以通过改变一个文件来改变整个站点的外观。每个页面使用 标签链接到样式表。
#### 内部样式表：当单个文档需要特殊的样式时，就应该使用内部样式表。
#### 内联样式表：由于要将表现和内容混杂在一起，内联样式会损失掉样式表的许多优势。请慎用这种方法，例如当样式仅需要在一个元素上应用一次时。要使用内联样式，你需要在相关的标签内使用样式（style）属性。Style 属性可以包含任何 CSS 属性。
### 选择器优先级:
通用选择器（*）
元素(类型)选择器
类选择器
属性选择器
伪类
ID 选择器
内联样式
### 选择器权重
内联样式表的权值最高 1000
ID 选择器的权值为 100
Class 类选择器的权值为 10
HTML 标签选择器的权值为 1
### CSS 优先级法则：
 A 选择器都有一个权值，权值越大越优先；
 B 当权值相等时，后出现的样式表设置要优于先出现的样式表设置；
 C 创作者的规则高于浏览者：即网页编写者设置的CSS 样式的优先权高于浏览器所设置的样式；
 D 继承的CSS 样式不如后来指定的CSS 样式；
 E 在同一组属性设置中标有"!important"规则的优先级最大；
 ### CSS属性方面的注意点
 #### background-color 不能继承，其默认值是 transparent。如果一个元素没有指定背景色，那么背景就是透明的，这样其父元素的背景才可见。
 #### 用 background-position：x方面，y方向 属性改变图像在背景中的位置
 #### 当使用背景简写属性时，属性值的顺序为：(color image repeat attachment position)
    background-color
    background-image
    background-repeat
    background-attachment
    background-position
 #### background-attachment	背景图像是否固定或者随着页面的其余部分滚动。
 #### 当text-align设置为"justify"，每一行被展开为宽度相等，左，右外边距是对齐（如杂志和报纸）。
 #### text-transform:uppercase;设置文本的大小写或者首字母大写
 #### text-indent 属性，所有元素的第一行都可以缩进一个给定的长度。
 #### word-spacing 属性可以改变字（单词）之间的标准间隔。其默认值 normal 与设置值为 0 是一样的
 #### white-space:nowrap;禁止换行
 #### 添加文本阴影 text-shadow:2px 2px #FF0000;
 #### vertical-align是和同级元素对比
 #### font-family 属性设置文本的字体系列。
        font-family 属性应该设置几个字体名称作为一种"后备"机制，如果浏览器不支持第一种字体，他将尝试下一种字体。
        注意: 如果字体系列的名称超过一个字，它必须用引号，如Font Family："宋体"。
        多个字体系列是用一个逗号分隔指明
#### font:italic bold 12px/30px Georgia,serif;设置字体组合属性 style weight size/line-height family
#### font-weight 字体加粗
#### font-variant	以小型大写字体或者正常字体显示文本。
#### 特别的链接，可以有不同的样式，这取决于他们是什么状态。
    这四个链接状态是：
    a:link - 正常，未访问过的链接
    a:visited - 用户已访问过的链接
    a:hover - 当用户鼠标放在链接上时
    a:active - 链接被点击的那一刻
#### list-style-type属性指定列表项标记的类型是：
#### list-style-image: url('sqpurple.gif');作为列表项标记的图像
#### list-style-position	设置列表中列表项标志的位置。
#### border-collapse 属性设置表格的边框是否被折叠成一个单一的边框或隔开    
#### 盒模型
    Margin（外边距） - 清除边框区域。Margin没有背景颜色，它是完全透明
    Border（边框） - 边框周围的填充和内容。边框是受到盒子的背景颜色影响
    Padding（内边距） - 清除内容周围的区域。会受到框中填充的背景颜色影响
    Content（内容） - 盒子的内容，显示文本和图像    
#### 怪异盒模型(box-sizing)
    当您指定一个CSS元素的宽度和高度属性时，你只是设置内容区域的宽度和高度。要知道，完全大小的元素，你还必须添加填充，边框和边距。
#### CSS padding 属性的百分比数值是相对于其父元素的 width 计算的，如果改变了父元素的 width，则它们也会改变。    
#### display属性设置一个元素应如何显示，visibility属性指定一个元素应可见还是隐藏，隐藏之后仍然占位置。
#### 定位
Static 定位

HTML元素的默认值，即没有定位，元素出现在正常的流中。
静态定位的元素不会受到top, bottom, left, right影响。

Fixed 定位

元素的位置相对于浏览器窗口是固定位置。
即使窗口是滚动的它也不会移动
注意： Fixed 定位在 IE7 和 IE8 下需要描述 !DOCTYPE 才能支持.
Fixed定位使元素的位置与文档流无关，因此不占据空间。
Fixed定位的元素和其他元素重叠。

Relative 定位

相对定位元素的定位是相对其正常位置。
相对定位元素经常被用来作为绝对定位元素的容器块。

Absolute 绝对定位
绝对定位的定位是相对于最近的已定位父元素，如果没有的话则相对于html
Absolute定位使元素的位置与文档流无关，因此不占据空间。
Absolute定位的元素和其他元素重叠。
注意： 如果两个定位元素重叠，没有指定z - index，最后定位在HTML代码中的元素将被显示在最前面。

#### float 属性创建浮动框，将其移动到一边，直到左边缘或右边缘触及包含块或另一个浮动框的边缘。

Clear

默认情况下，浮动元素将堆叠在一起。
clear属性清除堆叠。
它指定浮动元素的一个或两个边缘必须不与另一个浮动元素的边缘邻接。
其可能的值为：
left - 元素的左边缘可能不与另一个浮动元素邻接。
right - 元素的右边缘可能不与另一个浮动元素邻接。
both - 两边都不能与另一个浮动元素邻接。
none - 元素不被清除，并且任一边缘可以邻接另一个浮动元素。
#### CSS组合选择符
CSS组合选择符包括各种简单选择符的组合方式。
##### 在 CSS3 中包含了四种组合方式:
后代选取器(以空格间隔)

子元素选择器(已大于号间隔)

相邻兄弟选择器(以加号间隔)

相邻兄弟选择器（Adjacent sibling selector）可选择紧接在另一元素后的元素，且二者有相同父元素。
如果需要选择紧接在另一个元素后的元素，而且二者有相同的父元素，可以使用相邻兄弟选择器（Adjacent sibling selector）

普通兄弟选择器(以波浪号间隔)

普通兄弟选择器选取所有指定元素的相邻兄弟元素。
### 伪类的语法 
selector.class: pseudo-class {property:value;}
#### 所有css伪类/元素
:link	a:link	选择所有未访问链接

:visited	a:visited	选择所有访问过的链接

:active	a:active	选择正在活动链接

:hover	a:hover	把鼠标放在链接上的状态

:focus	input:focus	选择元素输入后具有焦点

:first-letter	p:first-letter	选择每个p元素的第一个字母

:first-line	p:first-line	选择每个p 元素的第一行

:first-child	p:first-child	选择器匹配属于任意元素的第一个子元素的 p 元素

:before	p:before	在每个p元素之前插入内容

:after	p:after	在每个p元素之后插入内容

:lang(language)	p:lang(it)	为p元素的lang属性选择一个开始值
### 伪类和伪元素的区别

伪元素产生新对象，在DOM树中看不到，但是可以操作；伪类不产生新的对象，仅是DOM中一个元素的不同状态
### 透明度：opacity 
IE8和早期版本使用滤镜：alpha（opacity= x）。 x可以采取的值是从0 - 100。较低的值，使得元素更加透明。
### 通过媒询@media对不同设备应用不同的样式
### 属性选择器
input[type="text"] 

{ 
width:150px; 
display:block; 
margin-bottom:10px; 
background-color:yellow; 
} 

input[type="button"] 

{ 
width:120px; 
margin-left:35px; 
display:block; 
}
### 网格布局是响应式的
### 关于background-size
如果 background-size 属性设置为 "contain", 背景图片将按比例自适应内容区域。图片保持其比例不变：

如果 background-size 属性设置为 "100% 100%" ，背景图片将延展覆盖整个区域：

如果 background-size 属性设置为 "cover"，则会把背景图像扩展至足够大，以使背景图像完全覆盖背景区域。注意该属性保持了图片的比例因此 背景图像的某些部分无法显示在背景定位区域中。
## CSS3总结
### 设置阴影  box-shadow: h-shadow v-shadow blur spread color inset;
### 设置圆角 border-radius

如果你在 border-radius 属性中只指定一个值，那么将生成 4 个 圆角。
但是，如果你要在四个角上一一指定，可以使用以下规则：
四个值: 第一个值为左上角，第二个值为右上角，第三个值为右下角，第四个值为左下角。
三个值: 第一个值为左上角, 第二个值为右上角和左下角，第三个值为右下角
两个值: 第一个值为左上角与右下角，第二个值为右上角与左下角
一个值： 四个圆角值相同
### 设置边框图片 border-image
### CSS3中background-clip背景剪裁属性是从指定位置开始绘制
### CSS3 允许你在元素中添加多个背景图像。且可以指定放在不同的位置

  background-image: url(/statics/images/course/img_flwr.gif), url(/statics/images/course/paper.gif);

 background-position: right bottom, left top;
 ### background-Origin属性指定了背景图像的位置区域。

content-box, padding-box,和 border-box区域内可以放置背景图像。
### 渐变
#### 线性渐变
background: linear-gradient(red, green, blue);
#### 径向渐变
background: radial-gradient(red, green, blue);
### CSS3中，text-shadow属性适用于文本阴影。
 text-shadow: 5px 5px 5px #FF0000;
### white-space: nowrap 规定段落中的文本不进行换行
### word-wrap	允许对长的不可分割的单词进行分割并换行到下一行
word-wrap: normal|break-word;
### CSS3字体
@font-face

{

   font-family: myFirstFont;

   src: url(sansation_bold.woff);

   font-weight:bold;

}

### translate()方法，根据左(X轴)和顶部(Y轴)位置给定的参数，从当前元素位置移动。
transform: translate(50px,100px);
### rotate()方法，在一个给定度数顺时针旋转的元素。负值是允许的，这样是元素逆时针旋转。
### 缩放 scale()方法，该元素增加或减少的大小，取决于宽度（X轴）和高度（Y轴）的参数：
scale（2,4）转变宽度为原来的大小的2倍，和其原始大小4倍的高度。
### 斜切 skew()方法，该元素会根据横向（X轴）和垂直（Y轴）线参数给定角度：
skew(30deg,20deg) 元素在X轴和Y轴上倾斜20度30度。
### matrix()方法和2D变换方法合并成一个。
matrix 方法有六个参数，包含旋转，缩放，移动（平移）和倾斜功能。
### 变换基点 transform-origin: x-axis y-axis z-axis;
### transform-style属性指定嵌套元素是怎样在三维空间中呈现。
flat	子元素将不保留其 3D 位置。

preserve-3d	子元素将保留其 3D 位置。
### 设置从何处查看一个元素的角度perspective:number|none;
number	元素距离视图的距离，以像素计。

none	默认值。与 0 相同。不设置透视。
### backface-visibility	定义元素在不面对屏幕时是否可见。值为hidden或者visible
### translate3d(x,y,z)	定义 3D 转化。
### rotate3d(x,y,z,angle)	定义 3D 旋转。
### CSS3 过渡是元素从一种样式逐渐改变为另一种的效果。
要实现这一点，必须规定两项内容：
指定要添加效果的CSS属性
指定效果的持续时间。

transition: width 2s, height 2s, transform 2s; 

transition: width 1s linear 2s; 
### CSS3动画
@keyframes规则是创建动画。 @keyframes规则内指定一个CSS样式和动画将逐步从目前的样式更改为新的样式。

@keyframes myfirst（动画的名称）
{
from {background: red;}
to {background: yellow;}
}

当在@keyframe创建动画，把它绑定到一个选择器，否则动画不会有任何效果。
指定至少这两个CSS3的动画属性绑定向一个选择器：
规定动画的名称
规定动画的时长

div
{
animation: myfirst（动画的名称） 5s;
-webkit-animation: myfirst 5s; /* Safari and Chrome */
}

简写属性：animation: myfirst 5s linear 2s infinite alternate;

### CSS3 多列 通过 CSS3，您能够创建多个列来对文本进行布局

column-count	指定元素应分为的列数

column-fill	指定如何填充列	

column-gap	指定列之间差距	

column-rule	一个用于设置所有列规则的简写属性

column-rule-color	指定的列之间颜色规则

column-rule-style	指定的列之间的样式规则

column-rule-width	指定的列之间的宽度规则

column-span	指定一个元素应该横跨多少列

column-width	指定列的宽度

columns	缩写属性设置列宽和列数

栗子： column-rule:3px outset #ff00ff;
### CSS用户界面
resize属性指定一个元素是否是由用户调整大小的。

outline-offset	外轮廓修饰并绘制超出边框的边缘

appearance	允许您使一个元素的外观像一个标准的用户界面元素

icon 属性为创作者提供了将元素设置为图标等价物的能力

注意：元素的图标是不可使用，除非"content"属性设置为"icon"！

img
{
content:icon;
icon:url(imgicon.png);
}
### 响应式图片
img {
    max-width: 100%;
    height: auto;
}

.responsive {
    padding: 0 6px;
    float: left;
    width: 24.99999%;
}

@media only screen and (max-width: 700px){
    .responsive {
        width: 49.99999%;
        margin: 6px 0;
    }
}

@media only screen and (max-width: 500px){
    .responsive {
        width: 100%;
    }
}
### filter 属性定义了元素(通常是<img>)的可视效果(例如：模糊与饱和度)。
### 弹性盒模型
使用弹性盒子，居中变的很简单，只想要设置弹性子元素margin: auto; 可以使得弹性子元素在两上轴方向上完全居中:

display	指定 HTML 元素盒子类型。

flex-direction	指定了弹性容器中子元素的排列方式

justify-content	设置弹性盒子元素在主轴（横轴）方向上的对齐方式。

align-items	设置弹性盒子元素在侧轴（纵轴）方向上的对齐方式。

flex-wrap	设置弹性盒子的子元素超出父容器时是否换行。

align-content	修改 flex-wrap 属性的行为，类似align-items, 但不是设置子元素对齐，而是设置行对齐

flex-flow	flex-direction 和 flex-wrap 的简写

order	设置弹性盒子的子元素排列顺序。

align-self	在弹性子元素上使用。覆盖容器的 align-items 属性。

flex	设置弹性盒子的子元素如何分配空间。