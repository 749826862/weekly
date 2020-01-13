<template lang="pug">
  .two_main
    h3.big_tilte 第一部分 “四率”指标监测
    .message
      .title_1
        h4.word_title_2 一、配电自动化率
        p 
          span.word_content 11月份，按照公司董事长对“四率”
          span.word_lingt （配电自动化率、电压合格率、线损率、客户满意率）
          span.word_content 工作指示要求，互联网部遵循“一个指标一个指标分析、一个指标一个指标提升”的工作思路，全方位、多维度按周期（周/月）开展“四率”指标监测分析工作。定位专业管理主要问题，及时协同专业部门开展根因分析，全程督促基层单位开展问题梳理和问题整改工作，以“四率”指标促进公司高质量发展的工作目标初步实现。
        p 
          span.word_content 11月份，公司“四率”指标完成情况如下：
        .result
        .imgCharts
          .chart_1
            img(src="~@assets/charts2.png")
            imgzhexian(:chartsOption="{className:'pdzdhl',legendName:[],tableName:'',isRow:true}")
          .chart_1
            img(src="~@assets/charts3.png")
            imgzhexian(:chartsOption="{className:'dyhgl',legendName:[],tableName:'',isRow:true}")
          .chart_1
            img(src="~@assets/charts1.png")
            imgzhexian(:chartsOption="{className:'xsl',legendName:[],tableName:'',isRow:true}")
          .chart_1
            img(src="~@assets/charts4.png")
            imgzhexian(:chartsOption="{className:'khmyl',legendName:[],tableName:'',isRow:true}")

</template>
<script>
export default {
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
  }
}
</style>