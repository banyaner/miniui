# switch组件
----

## 基础用法


<template>
<div class="demo-block">
  <div>
    <mui-switch @change="hello" v-model="switchState" :disabled="false"></mui-switch>
  </div>
</div>
</template>
<script>
 export default {
    data() {
       return {
          switchState: false
       }
    },
    methods: {
      hello() {
        this.switchState = !this.switchState
        console.log('change')
      }
    }
  }
</script>

:::demo
```html
<template>
<div class="demo-block">
  <div>
    <mui-switch @change="hello" :value="switchState" :disabled="false"></mui-switch>
  </div>
</div>
</template>
<script>
 export default {
    data() {
       return {
          switchState: false
       }
    },
    methods: {
      hello() {
        this.switchState = !this.switchState
        console.log('change')
      }
    }
  }
</script>
```
:::

### Props

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value  | 指定当前是否选中，可以使用 v-model 双向绑定数据    | boolean   | —   | false   |
| disabled  | 是否禁用状态    | boolean   | —   | false   |


## Events


| 事件名称      | 说明    | 回调参数  |
|---------- |-------- |---------- |
| change  | 开关被点击时触发 | — |