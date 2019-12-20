import axios from 'axios'
//响应拦截器 忽略
axios.interceptors.response.use((response) => {
  let result = response.data
  return result
}, (error) => {
  try {
    return Promise.reject(error)
  } catch (error) {}
})
let ajax = (method = 'get', url, params = {}) => {
  method = method.toLowerCase()
  let http = null
  // 不同处理方法
  switch (method) {
    case 'get':
      http = axios({
        method: 'get',
        url,
        params
      })
      break
    case 'post':
      http = axios({
        method: 'post',
        url,
        data: params
      })
      break
    case 'delete':
      http = axios({
        method: 'delete',
        url,
        params
      })
      break
    case 'put':
      http = axios({
        method: 'put',
        url,
        data: params
      })
      break
    // 上传
    case 'upload':
      if (params instanceof FormData) {
        http = axios.post(url, params)
      }
      break
  }
  return http
}
export default ajax
