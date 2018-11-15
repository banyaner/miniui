/**
 * Created by zhongjx on 2018/11/15.
 */
import { shallowMount, mount} from '@vue/test-utils'
import Modal from '@/components/modal'
import MuiButton from '@/components/button'

describe('Modal', () => {
    test('隐藏模态框', () => {
        const wrapper = shallowMount(Modal, {
            propsData: {
                visible: false,
            },
            stubs: {
                MuiButton,
            }
        })
        expect(wrapper.isVisible()).toBe(false)
    })
    test('触发确认事件', () => {
        const wrapper = shallowMount(Modal, {
            stubs: {
                MuiButton,
            }
        })
        wrapper.find('.mui-modal__footer>button:nth-child(1)').trigger('click')
        expect(wrapper.emitted().ok).toBeTruthy()
    })
    test('触发取消事件', () => {
        const wrapper = shallowMount(Modal, {
            stubs: {
                MuiButton,
            }
        })
        wrapper.find('.mui-modal__footer>button:nth-child(2)').trigger('click')
        expect(wrapper.emitted().cancel).toBeTruthy()
    })
    test('slot default正确渲染', () => {
        const wrapper = shallowMount(Modal, {
            slots: {
                default: 'content',
            },
            stubs: {
                MuiButton,
            }
        })
        expect(wrapper.html()).toContain('content')
    })
    test('slot header正确渲染', () => {
        const wrapper = shallowMount(Modal, {
            slots: {
                header: 'header',
            },
            stubs: {
                MuiButton,
            }
        })
        expect(wrapper.html()).toContain('header')
    })
    test('slot footer正确渲染', () => {
        const wrapper = shallowMount(Modal, {
            slots: {
                footer: 'footer',
            },
            stubs: {
                MuiButton,
            }
        })
        expect(wrapper.html()).toContain('footer')
    })
})