# toast组件
<div class="demo-block">
  <div>
    <mui-button @click=hello>点击显示toast</mui-button>
  </div>
</div>
<script>
 export default {
    methods: {
      hello() {
        alert('Hello World!');
      }
    }
  }
</script>

:::demo
```html
<template>
<div class="demo-block">
  <div>
    <mui-button @click=hello>点击显示toast</mui-button>
  </div>
</div>
</template>
```
```js
<script>
 export default {
    methods: {
      hello() {
        alert('Hello World!');
      }
    }
  }
</script>
```
:::
