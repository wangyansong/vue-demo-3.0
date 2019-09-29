import axios from 'axios'
import { Message } from 'element-ui'

// 创建axios 实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // api的base_url
  timeout: 10000 // 请求超时时间
})

// request 拦截器
service.interceptors.request.use(
  config => {
    // 这里可以自定义一些config 配置

    return config
  },
  error => {
    //  这里处理一些请求出错的情况

    Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
    if (!res) {
      Message({
        message: res.message,
        type: 'error',
        showClose: true,
        duration: 2 * 1000
      })
    }
    return res
  },
  error => {
    Message({
      message: 'error...',
      type: 'error',
      showClose: true,
      duration: 2 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
