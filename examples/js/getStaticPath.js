/**
 * Created by zhongjx on 2018/7/9.
 */
const cdn = '//static.ws.126.net/163/activity'
export default function (path) {
    if (/^wp.m.163/.test(window.location.host)) {
        return cdn + path
    }
    return path
}
