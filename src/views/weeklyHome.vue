<template lang="pug">
  .home_main
    HomeHeade(v-model="dataList")
    onePage(v-model="dataList")
    twoPage(v-model="dataList.pbdyhgl")
    threePage(v-model="dataList.pbdyhgl")
    fourPage(v-model="dataList.xsl")
    fivePage(v-model="dataList")
    //- zhuzhaungtu
</template>
<script>
import { GET_CHARTS_OPTION } from "@api/home"
import ajaxData from "@api/index"
import weekData from '../../static/weeklyCharts/chartsOption.json'
export default {
  data() {
    return {
      dataList:weekData
    };
  },
  created() {
    // this.getWeekReport()
  },
  methods: {
    getWeekReport(){
      ajaxData("getWeekReport")().then(res=>{
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