# Modal 模态框
----

## 基本用法

visible控制Modal的显示和隐藏，支持使用 `.sync` 双向绑定。

<div class="demo-block">
    <mui-button @click="showModal">点击打开弹窗</mui-button>
    <mui-modal :visible.sync="modalVisible" title="标题" okText="确定">
        <div slot="body">
            Modal内容
        </div>
    </mui-modal>
</div>
<script>
 export default {
    data() {
        return {
            modalVisible: false,
        }
    },
    methods: {
      showModal() {
          this.modalVisible = true
      }
    }
  }
</script>


:::demo
```html
<div class="demo-block">
    <mui-button @click="showModal">点击打开弹窗</mui-button>
    <mui-modal :visible.sync="modalVisible" title="标题" okText="确定">
        <div slot="body">
            Modal内容
        </div>
    </mui-modal>
</div>
```
```js
<script>
 export default {
    data() {
        return {
            modalVisible: false,
        }
    },
    methods: {
      showModal() {
          this.modalVisible = true
      }
    }
  }
</script>
```
:::

如果使用vuex管理Modal的显示与隐藏，则可通过监听`update:visible`修改vuex的visible值。


## Props
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |----------------------------- |-------- |
| visible     | 是否显示Modal，支持 .sync 修饰符 | Boolean    | — | — |
| title     | Modal的标题，若使用具名 slot 自定义头，则title无效 | String    | — | — |
| mask-closable     | 是否允许点击遮罩层关闭   | Boolean   | — | true |
| show-close    | 是否显示关闭按钮   | Boolean   | — | true |
| ok-text   | 确认按钮文案   | String   | — | 确认 |
| cancel-text    | 取消按钮文案   | String   | — | 取消 |

## Slot
| name | 说明 |
|------|--------|
| — | Modal 的内容 |
| header | Modal 标题区 |
| footer | Modal 按钮操作区 |

## Events
| 事件名称      | 说明    | 回调参数  |
|---------- |-------- |---------- |
| ok  | 确认按钮的回调函数 | — |
| cancel  | 取消按钮的回调函数 | — |