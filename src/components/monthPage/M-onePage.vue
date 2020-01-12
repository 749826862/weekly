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
        p 
          span.word_lingt 【监测分析情况】
        h4.word_title_3 （一）配电自动化故障自愈实现情况
        p 
          span.word_lingt 1、故障自愈实现率总体情况
        p 
          span.word_content 11月18日-11月24日,北京公司累计投入配电自动化8689条，故障自愈实现率为99.70%，较上周上升0.01个百分点。
        zhuzhaungtu.auto(:chartsOption="{className:'realizationtrend', tableName:'图3 配电自动化故障自愈实现率周趋势',legendName:'故障自愈实现率(%)'}")
        p 
          span.word_lingt 2、各单位故障自愈实现率情况
        p 
          span.word_content 11月18日-11月24日，故障自愈实现率较高的公司分别为城区、通州、朝阳公司，故障自愈实现率较低的公司分为延庆、密云、门头沟公司。
        zhuzhaungtu.auto(:chartsOption="{className:'realization',isRow:false,tableName:'图4 各单位配电自动化故障自愈实现率情况',legendName:'故障自愈实现率(%)'}"  )
        p 
          span.word_lingt 【相关建议】
        p 
          span.word_content 11月18日-11月24日，故障自愈实现率为99.70%，延庆、密云、门头沟公司故障自愈实现率较低，以上单位进一步关注配电自动化功能投入率和故障自愈实现率的水平。
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
}
</style>