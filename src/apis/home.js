import http from '@api/http.js'

// 获取图表配置
export const GET_CHARTS_OPTION = params => http('get', '../../static/weeklyCharts/chartsOption.json', params)