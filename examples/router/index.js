import Vue from 'vue'
import Router from 'vue-router'
import index from '../views/index'
import navObj from '../nav.config'

Vue.use(Router)
const getComponentRouter = (nav) => {
    const temp = []
    for (const item in nav) {
        temp.push(...nav[item])
    }
    return temp
}
const addComponents = (routes) => {
    routes.forEach((route) => {
        if (route.type === 'view') {
            route.component = () => import(`../views/${route.name}.vue`)
        } else {
            route.component = () => import(`../docs/${route.name}.md`)
        }
    })
}
const routes = getComponentRouter(navObj)
addComponents(routes)
export default new Router({
    routes,
})
