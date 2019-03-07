/**
 * Created by zhongjx on 2018/11/4.
 */
import MuiButton from './components/button/index'
import MuiToast from './components/toast/index'
import MuiModal from './components/modal/index'
import MuiSwitch from './components/switch/index'
import './styles/index'

const components = {
    MuiButton,
    MuiToast,
    MuiModal,
    MuiSwitch,
}
const install = (Vue) => {
    if (install.installed) return
    for (const item in components) {
        const component = components[item]
        Vue.component(component.name, component)
    }
}
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}
export default {
    install,
    ...components,
}
