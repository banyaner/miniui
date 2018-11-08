import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '../views/IndexPage'
import toast from '../docs/toast.md'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: IndexPage,
        },
        {
            path: '/toast',
            component: toast,
        },
    ],
})
