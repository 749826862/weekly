<template lang="pug">
  .home_title
    h3 运营监测周报
    .stage [2019]第40期
    .message
      span 互联网部
      span 2019年11月29日
    .statistics 本周，公司配电自动化故障自愈实现率为99.70%；配变电压合格率为96.54%；同期线损率为6.51%； 95598电话呼入量本周9.56万通，环比下降5.33%；一次办结工单本周4.15万件，环比下降8.07%。
</template>

<script>
export default {
  name: 'HelloWorld',
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
  height: 500px;
  padding-top: 30px;
  h3{
    font-size: 50px;
    font-weight: 500;
    color: #008080;
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
