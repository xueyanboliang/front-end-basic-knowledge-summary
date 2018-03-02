# HTML总结
DOCTYPE 声明了文档类型
## HTML常用标签
### 标题
h1-h6 h1标签只能有一个
### 段落
P
### 锚点
a 主要用于页面跳转和当前页面内部导航(to do) "链接文本" 不必一定是文本。图片或其他 HTML 元素都可以成为链接
### 图片
img
### body 元素定义了 HTML 文档的主体
### html 元素定义了整个 HTML 文档
### br 元素用于换行
### HMTL通用属性 class id title style
### hr 元素用于创建水平线
### 对于 HTML，您无法通过在 HTML 代码中添加额外的空格或换行来改变输出的效果。当显示页面时，浏览器会移除源代码中多余的空格和空行。所有连续的空格或空行都会被算作一个空格。需要注意的是，HTML 代码中的所有连续的空行（换行）也被显示为一个空格。
### b 定义粗体文本
### i 定义斜体字
### code 定义计算机代码
### sub 上标文本
### sup 下标文本
### strong 定义加重语气
### small 定义小号字
### del 定义删除字
### em 定义着重文字
### ins 定义插入字
### head 元素包含了所有的头部标签元素。在 <head>元素中你可以插入脚本（scripts）, 样式文件（CSS），及各种 meta 信息。可以添加在头部区域的元素标签为: title, style, meta, link,script, noscript 和 base。head 元素描述了文档的各种属性和信息，其中包括文档的标题、在 Web 中的位置以及和其他文档的关系等。
### title 标签定义了不同文档的标题。
### base 标签描述了基本的链接地址/链接目标，该标签作为HTML文档中所有的链接标签的默认链接
### link 标签定义了文档与外部资源之间的关系。
### style 标签定义了HTML文档的样式文件引用地址
### meta标签描述了一些基本的元数据。meta 标签提供了元数据.元数据也不显示在页面上，但会被浏览器解析。META元素通常用于指定网页的描述，关键词，文件的最后修改时间，作者，和其他元数据。元数据可以使用于浏览器（如何显示内容或重新加载页面），搜索引擎（关键词），或其他Web服务。meta一般放置于 head区域
栗子：每隔30s刷新一次页面
<-meta http-equiv="refresh" content="30">
### script标签用于加载脚本文件，如： JavaScript
### table 表格 表格由table标签来定义。每个表格均有若干行（由tr标签定义），每行被分割为若干单元格（由td标签定义）。字母 td 指表格数据（table data），即数据单元格的内容。数据单元格可以包含文本、图片、列表、段落、表单、水平线、表格等等。
### 列表 有序列表：ol>li 无序列表： ul>li 自定义列表: dl > dt > dd
### HTML 表单元素 form input label select textarea fieldset legend 等等
### HTML 框架iframe
## HTML5新标签
### canvas标签定义图形，比如图表和其他图像。该标签基于 JavaScript 的绘图 API
### audio 定义音频内容 同下，跟video差不多
### video 定义视频内容 属性有controls buffered paused palyed time currentSrc muted loop 方法有load play pause
### source 定义媒体内容 如audio 和 video
### embed 定义插入的内容 比如说插件
### track 为诸如video 和 audio 之类的内容定义外部文本轨道
### datalist 定义选项列表。请与 input 元素配合使用该元素，来定义 input 可能的值
### article 定义页面独立的内容区域
### aside 定义页面的侧边栏内容
### command 定义命令按钮，比如单选按钮、复选框或按钮
### dialog 定义对话框
### details 用于描述文档或文档某个部分的细节
### summary 标签包含 details 元素的标题
### progress 定义进度条
### section 定义文档的某个独立的区域或者部分
### figure 定义文档中独立的流内容（比如说图片，图表，代码等等）
### figcaption figure的标题
### time 定义时间或者日期
### nav 定义运行中的进度
### header 定义文档的头部内容
### footer 定义文档或者section的页脚
### 新增属性拖放，通过设置内联属性draggable=true，设置相关事件即可实现，但是貌似用法比较局限，基本上是把一个元素从一个地方拖进另一个地方
### 地理位置 navigator.geolocation navigator.getCurrentPosition navigator.WatchPosition
### input 新增了很多类型 如color tel time datatime week search等等
### keygen用于表单的密钥对生成器字段
### localStorage 和 session Storage 两者的接口都差不多，getItem setItem clear removeItem key
### WebSQL 浏览器模拟的数据库
### 应用程序缓存 可以离线运行 manifest
### WebWorkers 可以后台跑js不影响页面渲染和交互
### SSE 服务器发送时间
### WebSocket 用于服务端和客户端通信

