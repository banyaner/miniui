/**
 * Created by zhongjx on 2018/11/8.
 */
import Vue from 'vue'
import MuiToast from './src/toast'

MuiToast.install = function () {
    // Vue.component(MuiToast.name, MuiToast)
    const Toast = Vue.extend(MuiToast)
    Vue.prototype.$toast = function ({msg}) {
        const instance = new Toast({
            data() {
                return {
                    msg,
                }
            },
        }).$mount()
        document.getElementsByTagName('body')[0].appendChild(instance.$el)
    }
}
Vue.use(MuiToast)
export default MuiToast
