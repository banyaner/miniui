# [规范]css BEM书写规范

BEM是基于组件的web开发方法。其思想是将用户界面分隔为独立的块，从而使开发复杂的UI界面变得更简单和快，且不需要粘贴复制便可复用现有代码。
BEM由Block、Element、Modifier组成。
选择器里用以下连接符扩展他们的关系：

- `__：双下划线用来连接块和块的子元素
- ` ：仅作为连字符使用，连接块或元素或修饰符的多个单词（也可以直接写成驼峰式）
- --：双中划线用来连接块或元素的状态（也可使用‘_’单下划线表示）

示例：
block-name_modifier-name
block-name__element-name--modifier-name
block-name_modifier-name--modifier-value
block-name__element-name--modifier-name--modifier-value

## 基本概念


### Block(块)

代码片段可能被复用且这段代码不依赖其他组件即可用Block。块可以互相嵌套,可以嵌套任意多层。

#### 特点：

1. 块的名称用于描述它的目的。如 menu、button
2. 块不能影响所在环境。这意味着**不能为块设置margin或position**
3. 只能使用class命名选择器，而不能使用标签或id选择器
4. 不依赖于页面内其他块或元素

### Element（元素）

Element是Block的一部分，没有独立存在的意义。任何一个Element语义上是和Block绑定的。

#### 特点：

1. 与块使用'__'连接。 如： block__item
2. 用于描述它的目的。如：item、text
3. 元素可以彼此嵌套,可以嵌套任意多层
4. 元素总是属于块的一部分。所以类似于block__item1__item2的命名是不合法的

### Modifier（修饰符）

Modifier是Block或Element上的标记。使用它们来改变样式，行为或状态。
与块或元素连接符为'--'。

## 应用
### 相对另外的Blocks定位Block
最好的方式是混合使用block和element。解决block上不能设置margin、position。
例：
```html
<body class="page">
    <!-- header and navigation-->
    <header class="header page__header">...</header>

    <!-- footer -->
    <footer class="footer page__footer">...</footer>
</body>
```
```css
.page__header {
    padding: 20px;
}

.page__footer {
    padding: 50px;
}
```
### Block内定位Elements
通过额外创建Block的子Element来定位嵌套。
例：
```html
<body class="page">
    <div class="page__inner">
      <!-- header and navigation-->
      <header class="header">...</header>

      <!-- footer -->
      <footer class="footer">...</footer>
    </div>
</body>
```
```css
.page__inner {
    margin-right: auto;
    margin-left: auto;
    width: 960px;
}
```

## 关于命名
选择器的命名必须完整且精确地描述它代表的BEM实体。
例：
```css
.button {}
.button__icon {}
.button__text {}
.button_theme_islands {}
```
我们可直接指导我们在处理一个块元素。在html使用如：
```html
<button class="button button_theme_islands">
    <span class="button__icon"></span>

    <span class="button__text">...</span>
</button>
```
而下面的css就很难让我们做出相同的判断：
```
.button {}
.icon {}
.text {}
.theme_islands {}
```

参考：
https://en.bem.info
