/**
 * Created by zhongjx on 2018/11/8.
 */
import MuiToast from './src/toast'

MuiToast.install = function (Vue) {
    Vue.component(MuiToast.name, MuiToast)
    Vue.prototype.$toast = function ({text}) {
        
    }
}

export default MuiToast
