import http from '@api/http.js'

function ajaxData(apiName) {
  const APIS = window._CONFIG_.api
  return params => http('get', APIS[apiName].url, params)
}
export default ajaxData
