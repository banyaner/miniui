/**
 * Created by zhongjx on 2018/11/16.
 */
// todo: vue实例方法的测试？
import { createLocalVue, shallowMount } from '@vue/test-utils'
import Toast from '@/components/toast'

describe('Toast', () => {
    it('显示toast', () => {
        const localVue = createLocalVue()
        localVue.use(Toast)
        const wrapper = shallowMount({
            template: '<div>test</div>'
        }, {
            localVue,
        })
       expect(typeof wrapper.vm.$toast).toBe('function')
    })
})
