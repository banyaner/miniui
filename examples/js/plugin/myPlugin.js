/**
 * Created by zhongjx on 2018/5/21.
 */
const MyPlugin = {}
MyPlugin.install = (Vue) => {
    {
        const sendData = (evtName) => {
            window.NTESAntAnalysis.sendData({
                projectid: window.projectId,
                val_act: evtName,
            })
            console.log('统计事件：' + evtName)
        }
        Vue.prototype.$countEvt = (evtName) => {
            if (!evtName) {
                throw new Error('event name cannot be empty!')
            }
            const urlReg = /^wp\.m\.163\.com/
            if (urlReg.test(window.location.host)) {
                if (!window.NTESAntAnalysis) {
                    window.addEventListener('NTMReady', sendData.bind(this, evtName))
                    window.removeEventListener('NTMReady', sendData)
                } else {
                    sendData(evtName)
                }
            }
        }
    }
    //
    // Vue.directive('my-directive', {
    //     bind(el) {
    //         console.log(el, '我是指令测试bind')
    //     },
    //     inserted() {
    //         console.log('insert')
    //     },
    //     update(el, binding) {
    //         console.log('我是指令测试update----------')
    //         console.log(binding)
    //     },
    // })
}
export default MyPlugin
