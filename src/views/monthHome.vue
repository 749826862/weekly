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
    CoalPage(v-else)
</template>
<script>
import { Notification } from 'element-ui'
import ajaxData from "@api/index"
import MontData from '../../static/monthlyCharts/chartsOption.json'
export default {
  name:"monthHome",
  data() {
    return {
      dataList:MontData.data,
    };
  },
  created() {
    let params = this.$route.params
    console.log(params,5566)
    this.getMonthReport(params)
    // console.log(params,9999)
    // if (params.year && params.zq) {
      
    // }else{
    //   Notification.error({
    //     title: '错误',
    //     message: '非法跳转！！！',
    //     duration: 2000
    //   });
    //   this.$router.replace({name:"login"})
    // }
  },
  methods: {
    getMonthReport(params){
      ajaxData("getMonthReport")(params).then(res=>{
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