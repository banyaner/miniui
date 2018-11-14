<h1 align="center">MiniUI</h1>

<p align="center">
    <a href=""https://travis-ci.org/banyaner/miniui><img src="https://travis-ci.org/banyaner/miniui.svg?branch=master" alt="Build Status"></a>
</p>

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

# git使用

## 分支管理

![manage-flow](https://static.ws.126.net/163/frontend/newsapp-wxmp/static/git-manage-flow.png)

如图所示：
master分支只用于存放线上版本
线上紧急bug，使用hot-fix分支
开发在dev分支上，小的测试bug也可在dev分支修改。线上紧急修复bug也需合并到dev分支
开发复杂的新功能可新建分支`dev-${devName}`


## Git Commit message 规范

[使用Angular的Commit message 格式](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#commits)。

### commit message 格式

每个commitm message 包括header,body和footer，各占一行，每行不超过100字符。其中header由type、scope和subject组成。**header必须要写**，header的scope是可选的。


```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

### Revert

如果commit用于撤销之前的commit，需以revert:开头，接着写被撤销的commit的header。body里要写：this reverts commit <hash>. ,hash为被撤销的commit的hash值。这种格式也可以由```git revert```命令自动生成。

### Type

必须为下列之一:
- feat：新功能（feature）
- fix：修补bug
- docs：文档修改
- style： 不影响代码含义的修改(例如：white-space; 格式化等)
- refactor：重构（即不是新增功能，也不是修改bug的代码变动）
- perf: 提升性能的修改
- test：增加或修改测试
- chore：构建流程或辅助工具的变动

### Scope

scope用于说明commit修改的范围，比如数据层、控制层、视图层,route, component, utils, build等等。如果修改影响多处，可使用"*"。

### Subject

Subject是对修改的简要说明：
- 使用祈使语气，一般现在时。
- 首字母小写
- 句末不要使用句号

### Body

使用祈使语气，一般现在时。另外，body需要包含修改的原因和与之前版本的区别。

### Footer

任何Breaking changes的信息或者关闭issue的信息都可写在Footer.
Breaking changes需要以**BREAKING CHANGE: **开头。

## standard version

自动生成CHANGELOG.md。

执行```npm run release```会自动生成CHANGELOG.md，并生成一个commit记录和tag一个新的发布。

### 首次发布

只需运行
```
npm run release -- --first-release
```
这会生成一个发布tag，但不会在package.json中修改版本。

### 发布一个pre-release
使用--prerelease来生成预发布：
假设当前版本是1.0.0，且将要commit的代码为打补丁的修改。运行：
```
npm run release -- --prerelease
```
将生成版本号1.0.1-0。
如果想指定预发布版本名字可以通过```--rerelease <name>```。
例如：
```
npm run release -- --prerelease alpha
 ```
 这个tag将是1.0.1-alpha.0

 ### 发布指定的类型
 使用--release-as 加参数major或minor或patch可以取消自动生成版本号。
 假设当前版本为1.0.0.运行
 ```
 //  npm run script
 npm run release -- --release-as minor
 //  Or
 npm run release -- --release-as 1.1.0
 ```
 将生成版本号1.1.0,而不是自动生成的版本号1.0.1







