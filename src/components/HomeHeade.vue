<template lang="pug">
  .home_title
    h3.word_title 运营监测周报
    .stage [{{ value.year }}]第{{ value.zq }}
    .message
      span 互联网部
      span {{ value.time }}
    .statistics.word_content 本周，公司配电自动化故障自愈实现率为99.70%；配变电压合格率为{{ value.zj.zj2 }}；同期线损率为{{ value.zj.zj3 }}； 95598电话呼入量本周{{ value.zj.zj4 }}通，环比{{ value.zj.zj5 }}；一次办结工单本周{{ value.zj.zj6 }}件，环比{{ value.zj.zj7 }}。
</template>

<script>
export default {
  name: 'HelloWorld',
  props:["value"],
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.home_title{
  width: 100%;
  height: 297mm;
  padding-top: 30px;
  h3{
    
    text-align: center;
  }
  .stage{
    text-align: center;
    font-weight: bold;
    color: #000;
    margin-top: 20px;
  }
  .message{
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid #008080;
    color: #000;
    margin-top: 40px;
    font-family: "仿宋";
    font-size: 18px;
    font-weight: bold;
  }
  .statistics{
    text-indent: 3em;
    margin-top: 30px;
    padding-bottom: 30px;
    line-height: 30px;
    letter-spacing: 2px;
  }
}
</style>
