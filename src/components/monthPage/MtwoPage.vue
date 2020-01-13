<template lang="pug">
  .two_main
    .message
      .title_1
        h4.word_title_2 一、配电自动化率
        p 
          span.word_lingt 【监测周期】
          span.word_content 2019年11月1日0时—11月30日24时
        p 
          span.word_lingt 【监测概要】
          span.word_content 从设备部获取公司配电自动化故障自愈情况数据，分析历史变化趋势、各单位差异情况，全面反映公司配电自动化故障自愈实现情况，指导各单位不断提升配电自动化管理水平。
        p 
          span.word_lingt 【监测分析情况】

        h4.word_title_3 （一）配电自动化故障自愈情况
        p 
          span.word_title_4 1．故障自愈实现率变化趋势
        p 
          span.word_content 11月份, 公司配电自动化故障自愈实现率继续上升，达到99.70%。
        Mzhexian(:chartsOption="{className:'gzzl',legendName:['故障自愈实现率'],tableName:'',isRow:true}")
        p 
          span.word_title_4 2．各单位故障自愈实现率情况
        p 
          span.word_content 11月份，配电自动化故障自愈实现率较高的三家单位分别为城区、通州、朝阳公司，较低的单位为延庆、密云、门头沟公司。
        zhuzhaungtu(:chartsOption="{className:'gzzlsx',legendName:['故障自愈实现率'],tableName:'',isRow:true}")
        p 
          span.word_lingt 【相关建议】
        p 
          span.word_content 11月份，公司配电自动化故障自愈实现率99.70%，延庆、密云、门头沟公司故障自愈实现率较低，上述单位应进一步关注配电自动化功能运行情况，采取有效措施提升故障自愈水平。
        
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