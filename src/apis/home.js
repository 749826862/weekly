import http from '@api/http.js'

// 实时数据
export const GET_OVER_REAL = params => http('get', '/map/api/realTimeData', params)