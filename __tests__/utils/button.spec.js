/**
 * Created by zhongjx on 2018/11/14.
 */
import { shallowMount } from '@vue/test-utils'
import Button from '@/components/button'

describe('Button', () => {
    test('是一个按钮', () => {
        const wrapper = shallowMount(Button)
        expect(wrapper.find('.mui-button').exists()).toBeTruthy()
    })
    test('是一个不可用按钮', () => {
        const wrapper = shallowMount(Button, {
            propsData: {
                disabled: true,
            }
        })
        expect(wrapper.find('.is-disabled').exists()).toBeTruthy()
    })
    test('是一个圆形按钮', () => {
        const wrapper = shallowMount(Button, {
            propsData: {
                circle: true,
            }
        })
        expect(wrapper.find('.is-circle').exists()).toBeTruthy()
    })
    test('slot正确渲染', () => {
        const wrapper = shallowMount(Button, {
            slots: {
                default: '<strong>确定</strong>',
            }
        })
        expect(wrapper.contains('strong'))
    })
    test('点击按钮触发事件', () => {
        const wrapper = shallowMount(Button)
        wrapper.trigger('click')
        expect(wrapper.emitted().click).toBeTruthy()
    })
})