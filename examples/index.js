/**
 * Created by zhongjx on 1/19/17.
 */
import Vue from 'vue'
import 'highlight.js/styles/github.css'
import './css/md.scss'

// import 'inobounce'
// import 'normalize.css'
// import MobileUI from '../dist/mobileui'
import MobileUI from '../src/index'
import router from './router/index'
import App from './App'
import DemoBlock from './components/DemoBlock'
// import MyPlugin from './js/plugin/myPlugin'

// Vue.use(MyPlugin)
Vue.use(MobileUI)
Vue.component('demo-block', DemoBlock)
window.vm = new Vue({
    el: '#app',
    template: '<App/>',
    data() {
        return {
        }
    },
    router,
    components: {
        App,
    },
    created() {
        window.bus = new Vue() // 用于组件间通信(分享)
        // this.$countEvt('事件1')
    },
    methods: {},
})
