// 格式化时间
export function formatDate(source, format) {
    const o = {
        'M+': source.getMonth() + 1, // 月份
        'd+': source.getDate(), // 日
        'H+': source.getHours(), // 小时
        'm+': source.getMinutes(), // 分
        's+': source.getSeconds(), // 秒
        'q+': Math.floor((source.getMonth() + 3) / 3), // 季度
        'f+': source.getMilliseconds() // 毫秒
    }
    if (/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, (source.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    for (let k in o) {
        if (new RegExp('(' + k + ')').test(format)) {
            format = format.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
        }
    }
    return format
}

//获取间隔时间
export function getTimeInterval($time1, $time2) {
    var time1 = arguments[0],
        time2 = arguments[1];
    time1 = Date.parse(time1) / 1000;
    time2 = Date.parse(time2) / 1000;
    var time_ = time1 - time2;
    return Math.ceil((time_ / (3600 * 24)));
}
// 根据键值 获取对应的参数值
export const getUrlParam = (key) => {
    // 获取参数
    var url = window.location.hash;
    url = "?" + url.split("?")[1];
    // 正则筛选地址栏
    var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
    // 匹配目标参数
    var result = url.substr(1).match(reg);
    //返回参数值
    return result ? decodeURIComponent(result[2]) : null;
}
// 游览器信息
export const browser = {
    versions: (function () {
        var u = navigator.userAgent,
            app = navigator.appVersion;
        return {
            //移动终端浏览器版本信息
            trident: u.indexOf("Trident") > -1, //IE内核
            presto: u.indexOf("Presto") > -1, //opera内核
            webKit: u.indexOf("AppleWebKit") > -1, //苹果、谷歌内核
            gecko: u.indexOf("Gecko") > -1 && u.indexOf("KHTML") == -1, //火狐内核
            mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
            android: u.indexOf("Android") > -1 || u.indexOf("Linux") > -1, //android终端或uc浏览器
            iPhone: u.indexOf("iPhone") > -1, //是否为iPhone或者QQHD浏览器
            iPad: u.indexOf("iPad") > -1, //是否iPad
            webApp: u.indexOf("Safari") == -1 //是否web应该程序，没有头部与底部
        };
    })(),
    language: (navigator.browserLanguage || navigator.language).toLowerCase()
}
let util = {}
// 存储session 或者获取session
util.session = (key, value) => {

    if (typeof value === 'number' || typeof value === 'boolean') {
        sessionStorage.setItem(key, value)
        return
    }
    if (value) {
        if (typeof value == 'object') {
            value = JSON.stringify(value)
        }
        sessionStorage.setItem(key, value)
        return
    }
    let session = sessionStorage.getItem(key)
    if (session) {
        try {
            session = JSON.parse(session)
        } catch (e) {
            session = session
        }
    } else {
        session = null
    }
    return session
}
export default util;