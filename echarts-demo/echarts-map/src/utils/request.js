import axios from 'axios'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 100000 * 5
})

// 请求产生的中间件
service.interceptors.request.use((config) => {
  // Do something before request is sent
  Object.assign(config.headers, { Authorization: 'Bearer ' })
  return config
}, (error) => {
  // Do something with request error
  return Promise.reject(error)
})

// 响应产生的中间件
service.interceptors.response.use((response) => {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response
}, (error) => {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error)
})

export default service
