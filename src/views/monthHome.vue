<template lang="pug">
  .monthhome
    MonthHeader(v-model="dataList")
    div(v-if="$route.params.status == 1")
      MonePage(v-model="dataList.zj" :tbdata="dataList.tb")
      MtwoPage(v-model="dataList.pdzdh" :tbdata="dataList.tb")
      MthreePage(v-model="dataList.dyhgl" :tbdata="dataList.dyhgltb")
      MfourPage(v-model="dataList.xsl" :tbdata="dataList.xsltb")
      MfivePage(v-model="dataList.khfw" :tbdata="dataList.khfwtb")
    //- 煤改电
    CoalPage(v-model="mgdData" :tbdata="mgdData.mgdtb"  v-else)
</template>
<script>
import { Notification } from 'element-ui'
import ajaxData from "@api/index"
import MontData from '../../static/monthlyCharts/chartsOption.json'
import MontMgdData from '../../static/monthlyCharts/mgdData.json'
export default {
  name:"monthHome",
  data() {
    return {
      dataList:MontData.data,  // 常规月报数据
      mgdData:MontMgdData.data   //煤改电月报数据
    };
  },
  created() {
    let params = this.$route.params
    if (params.status == 1) {
      this.getMonthReport(params)
    }else{
      this.getMonthReportMgd(params)
    }
    
  
  },
  methods: {
    getMonthReport({year,zq}){
      ajaxData("getMonthReport")({year,zq}).then(res=>{
        console.log(res)
      })
    },
    // 月报煤改电数据
    getMonthReportMgd({year,zq}){
      ajaxData("getMonthReportMgd")({year,zq}).then(res=>{
        console.log(res)
      })
    }
  }
};
</script>
<style lang='less' scoped>
.monthhome{
  width: 210mm;
  height: 100%;
  margin: 0 auto;
  padding: 0 80px;
  box-sizing: border-box;
}
</style>