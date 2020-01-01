<template lang="pug">
  .home_main
    HomeHeade
    onePage
    twoPage
    threePage
    fourPage
    fivePage
    //- zhuzhaungtu
</template>
<script>
import { GET_CHARTS_OPTION } from "@api/home"
export default {
  data() {
    return {};
  },
  created() {
    // this.getChartsOption()
  },
  methods: {
    async getChartsOption(){
     let options = await GET_CHARTS_OPTION()
     console.log(options,999)
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