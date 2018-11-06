import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '../views/IndexPage'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: IndexPage,
        },
    ],
})
