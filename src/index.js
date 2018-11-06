/**
 * Created by zhongjx on 2018/11/4.
 */
import './styles/index'
import MuiButton from './components/button/index'

const components = {
    MuiButton,
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
