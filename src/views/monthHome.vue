<template lang="pug">
  .monthhome
    MonthHeader
    MonePage
    MtwoPage
    MthreePage
    MfourPage
    MfivePage
    //- 煤改电
    //- CoalPage
</template>
<script>
import { Notification } from 'element-ui'
import ajaxData from "@api/index"
export default {
  name:"monthHome",
  data() {
    return {};
  },
  created() {
    let params = this.$route.params
    this.getMonthReport()
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
    getMonthReport(){
      ajaxData("getMonthReport")().then(res=>{
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