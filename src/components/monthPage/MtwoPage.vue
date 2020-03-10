<template lang="pug">
  .two_main
    .message
      .title_1
        h4.word_title_2 一、配电自动化率
        p 
          span.word_lingt 【监测周期】
          span.word_content {{ value.jczq1 }}—{{ value.jczq2 }}
        p 
          span.word_lingt 【监测概要】
          span.word_content 从设备部获取公司配电自动化故障自愈情况数据，分析历史变化趋势、各单位差异情况，全面反映公司配电自动化故障自愈实现情况，指导各单位不断提升配电自动化管理水平。
        p 
          span.word_lingt 【监测分析情况】

        h4.word_title_3 （一）配电自动化故障自愈情况
        p 
          span.word_title_4 1．故障自愈实现率变化趋势
        p 
          span.word_content {{ value.jczq3 }}份, 公司配电自动化故障自愈实现率继续上升，达到{{ value.gzzysxl1 }}。
        Mzhexian.auto(:chartsOption="{className:'gzzl',legendName:['故障自愈实现率(%)'],tableName:'图4  公司配电自动化故障自愈实现率变化趋势',isRow:true}")
        p 
          span.word_title_4 2．各单位故障自愈实现率情况
        p 
          span.word_content {{ value.dwgzzysxl1 }}份，配电自动化故障自愈实现率较高的三家单位分别为{{ value.dwgzzysxl3 }}公司，较低的单位为{{ value.dwgzzysxl4 }}公司。
        zhuzhaungtu.auto(:chartsOption="{className:'gzzlsx',legendName:['故障自愈实现率'],tableName:'图5 各单位配电自动化故障自愈实现率情况',isRow:false}")
        p 
          span.word_lingt 【相关建议】
        p 
          span.word_content {{ value.dwgzzysxl5 }}份，公司配电自动化故障自愈实现率{{ value.dwgzzysxl6 }}，{{ value.dwgzzysxl7 }}公司故障自愈实现率较低，上述单位应进一步关注配电自动化功能运行情况，采取有效措施提升故障自愈水平。
        
</template>
<script>
export default {
  props:["value"],
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