# Button 按钮
----

### 基础用法

<div class="demo-block">
    <mui-button>默认按钮</mui-button>
    <mui-button :circle="true">圆</mui-button>
    <mui-button :disabled="true">不可用按钮</mui-button>
</div>

::: demo
```html
<div class="demo-block">
    <mui-button>默认按钮</mui-button>
    <mui-button :circle="true">圆</mui-button>
    <mui-button :disabled="true">不可用按钮</mui-button>
</div>
```
:::

### Props

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| disabled  | 是否禁用状态    | boolean   | —   | false   |
| circle  | 是否为圆形按钮    | boolean   | —   | false   |
| native-type | 原生 type 属性 | string | button / submit / reset | button |

### Slot
| name | 说明 |
|------|--------|
| — | Button 的内容 |
