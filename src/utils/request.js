import axios from 'axios'
import store from '@/store'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
});

// 添加请求拦截器
service.interceptors.request.use((config) => {
  const token = store.getters.token
  if (token) {
    config.headers.token = token
  }
  return config;
}, (error) => {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
service.interceptors.response.use((response) => {
  // 对响应数据做点什么
  return response;
}, (error) => {
  // 对响应错误做点什么
  return Promise.reject(error);
})

// 统一了传参处理
const request = (options) => {
  if (options.method.toLowerCase() === 'get') {
    options.params = options.data || {}
  }
  return service(options)
}

export default request
