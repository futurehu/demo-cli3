const DEV_URL = '' //开发环境
const PRO_URL = 'https://hbmini.hnocse.com:8443' //生产环境
export default {
    base_url: process.env.NODE_ENV === 'development' ? DEV_URL : PRO_URL
}