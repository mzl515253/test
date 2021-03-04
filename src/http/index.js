//封装axios
import axios from 'axios'

//创建实例
const http = axios.create({
    //基础路径
    baseURL: '/api',
    timeout: 10000,      //超时时间  如果请求时间大于了超时时间 就会判定请求失败
})

// 相应拦截  处理请求返回回来是结果
http.interceptors.response.use(res => { // 固定写法
    //请求拿到是结果直接就是需要数据
    return res.data
}, err => {

    //请求失败的错误
    //根据状态码来判断

    let status = err.response && err.response.status

    if (status === 400) {

        alert('请求参数错误')
    }

    if (status === 401) {

        alert('没有权限')
    }



    if (status === 403) {

        alert('登录过期')
    }


    if (status === 404) {
        alert('请求路径错误')

    }

    if (status === 500) {

        alert('服务器出错')
    }

    if (status === 503) {
        alert('服务器在维护')

    }


    return Promise.reject(err)

}

)

export default http

