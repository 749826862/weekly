<template lang="pug">
  .home_main
    HomeHeade(v-model="dataList")
    onePage(v-model="dataList.pdzdh" :tbData="dataList.tb")
    twoPage(v-model="dataList.pbdyhgl" :tbData="dataList.tb")
    threePage(v-model="dataList.pbdyhgl" :tbData="dataList.tb")
    fourPage(v-model="dataList.xsl" :tbData="dataList.xsltb")
    fivePage(v-model="dataList.khfw" :tbData="dataList.tb")
</template>
<script>
import { GET_CHARTS_OPTION } from "@api/home"
import ajaxData from "@api/index"
import weekData from '../../static/weeklyCharts/chartsOption.json'
import { Notification,loading } from 'element-ui'
export default {
  name:"weeklyHome",
  data() {
    return {
      dataList:weekData.data,
      loading:true
    };
  },
  created() {
    let params = this.$route.params
    this.getWeekReport(params)
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
    getWeekReport(params){
      ajaxData("getWeekReport")(params).then(res=>{
        console.log(res)
      })
    }
  }
};
</script>
<style lang='less' scoped>
.home_main{
  width: 210mm;
  height: 100%;
  margin: 0 auto;
  padding: 0 80px;
  box-sizing: border-box;
}
</style>