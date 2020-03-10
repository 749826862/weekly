<template lang="pug">
  .monthhome
    MonthHeader(v-model="dataList")
    MonePage(v-model="dataList.zj")
    MtwoPage(v-model="dataList.pdzdh")
    MthreePage(v-model="dataList.dyhgl")
    MfourPage(v-model="dataList.xsl")
    MfivePage(v-model="dataList.khfw")
    //- 煤改电
    //- CoalPage
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