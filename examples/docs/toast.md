# toast组件
----

## 基础用法

<div class="demo-block">
  <div>
    <mui-button @click="hello">点击显示toast</mui-button>
  </div>
</div>
<script>
 export default {
    methods: {
      hello() {
        this.$toast({msg: 'Hello, toast!'})
      },
      showToast() {
          this.$toast({msg: '<p>I\'m a <i>toast</i>!</p>'})
      }
    }
  }
</script>

:::demo
```html
<template>
<div class="demo-block">
  <div>
    <mui-button @click="hello">点击显示toast</mui-button>
  </div>
</div>
</template>
```
```js
<script>
 export default {
    methods: {
      hello() {
        this.$toast({msg: 'Hello, toast!'})
      }
    }
  }
</script>
```
:::


## 使用HTML片段

<div class="demo-block">
  <div>
    <mui-button @click="showToast">使用HTML</mui-button>
  </div>
</div>

:::demo
```html
<template>
<div class="demo-block">
  <div>
    <mui-button @click="showToast">使用HTML</mui-button>
  </div>
</div>
</template>
```
```js
<script>
 export default {
   methods: {
     showToast() {
       this.$toast({msg: '<p>I\'m a <i>toast</i>!</p>'})
     }
   }
  }
</script>
```
:::

## Instance

MiniUI为全局添加了$toast方法，使用时直接调用`this.$toast(config)`。
参数config为对象。具体参数说明如下：

| 参数      | 说明          | 类型      | 可选值         | 默认值  |
|---------- |-------------- |---------- |------------- |-------- |
| msg | 消息文字 | string / VNode | — | — |
| duration | 显示时间, 毫秒| Number | — | 3000 |
