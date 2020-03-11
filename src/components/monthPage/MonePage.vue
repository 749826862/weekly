<template lang="pug">
  .two_main
    h3.big_tilte 第一部分 “四率”指标监测
    .message
      .title_1
        p 
          span.word_content {{ value.jczb1 }}份，按照公司董事长对“四率”
          span.word_lingt （配电自动化率、电压合格率、线损率、客户满意率）
          span.word_content 工作指示要求，互联网部遵循“一个指标一个指标分析、一个指标一个指标提升”的工作思路，全方位、多维度按周期（周/月）开展“四率”指标监测分析工作。定位专业管理主要问题，及时协同专业部门开展根因分析，全程督促基层单位开展问题梳理和问题整改工作，以“四率”指标促进公司高质量发展的工作目标初步实现。
        p 
          span.word_content {{ value.jczb2 }}份，公司“四率”指标完成情况如下：
        .result
        .imgCharts
          .chart_1
            img(src="~@assets/charts2.png")
            imgzhexian(v-model="tbdata.tb1" :chartsOption="{className:'pdzdhl',legendName:[],tableName:'自愈实现率',isRow:true}")
          .chart_1
            img(src="~@assets/charts3.png")
            imgzhutu(v-model="tbdata.tb2" :chartsOption="{className:'dyhgl',legendName:[],tableName:'1-11月配变电压合格率(%)',isRow:true}")
          .chart_1
            img(src="~@assets/charts1.png")
            imgbinpaizhutu(v-model="tbdata.tb3" :chartsOption="{className:'xsl',legendName:['统计线损率累计值(%)','月统计线损率(%)'],tableName:'',isRow:true}")
          .chart_1
            img(src="~@assets/charts4.png")
            .charts_zhexian
              imgtwozhexian(:Tvalue="{xNames:tbdata.tb4.xNames1,xValues1:tbdata.tb4.xValues1,xValues2:tbdata.tb4.xValues2}" :chartsOption="{className:'khmyl',legendName:['2018','2019'],tableName:'95598话务量（万通）',isRow:true}")
              imgtwozhexian(:Tvalue="{xNames:tbdata.tb4.xNames2,xValues1:tbdata.tb4.xValues3,xValues2:tbdata.tb4.xValues4}" :chartsOption="{className:'khmylwanjian',legendName:['2018','2019'],tableName:'八类工单数量（万件）',isRow:true}")

</template>
<script>
export default {
  props:["value","tbdata"],
  data() {
    return {};
  },
  created() {},
  methods: {}
};
</script>
<style lang='less' scoped>
.two_main{
  h3 {
    color: #000;
    font-weight: bold;
    text-align: center;
  }
  .message{
    h4{
      color: #000;
      font-weight: 600;
      margin: 20px 0;
    }
    p{
      text-indent: 3em;
      line-height: 25px;
      letter-spacing: 2px;
    }
  }
  .imgCharts{
    // margin-top: 200px;
    width: 100%;
    img{
      width: 100%;
      height: 260px;
      position: absolute;
      top: 0px;
    }
    .chart_1{
      width: 100%;
      height: 260px;
      position: relative;
      margin-bottom: 10px;
    }
    .charts_zhexian{
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>