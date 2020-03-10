<template lang="pug">
  .two_main
    h3.word_title_1 第一部分 重点专题监测情况
    .message
      .title_1
        h4.word_title_2 一、配电自动化率
        p 
          span.word_lingt 【监测周期】
          span.word_content {{ value.jczq1 }}—{{ value.jczq2 }}
        p 
          span.word_lingt 【监测概要】
          span.word_content 从设备部获取公司整体及16家供电公司配电自动化远方操作、故障自愈等数据，分析历史变化趋势、各单位差异情况，全面反映公司配电自动化远方操作率、操作成功率和故障自愈实现率完成情况，指导各单位不断提升配电自动化管理水平。
        p 
          span.word_lingt 【监测分析情况】
        h4.word_title_3 （一）配电自动化故障自愈实现情况
        p 
          span.word_lingt 1、故障自愈实现率总体情况
        p 
          span.word_content 11月18日-11月24日,北京公司累计投入配电自动化8689条，故障自愈实现率为99.70%，较上周上升0.01个百分点。
        zhuzhaungtu.auto(v-model="tbData.tb1"  :chartsOption="{className:'realizationtrend',isRow:true, tableName:'图3 配电自动化故障自愈实现率周趋势',legendName:'故障自愈实现率(%)'}")
        p 
          span.word_lingt 2、各单位故障自愈实现率情况
        p 
          span.word_content {{ value.dwgzzysxl1 }}-{{ value.dwgzzysxl2 }}，故障自愈实现率较高的公司分别为{{ value.dwgzzysxl3 }}公司，故障自愈实现率较低的公司分为{{ value.dwgzzysxl4 }}公司。
        zhuzhaungtu.auto(v-model="tbData.tb2" :chartsOption="{className:'realization',isRow:false,tableName:'图4 各单位配电自动化故障自愈实现率情况',legendName:'故障自愈实现率(%)'}"  )
        p 
          span.word_lingt 【相关建议】
        p 
          span.word_content {{ value.dwgzzysxl5 }}-{{ value.dwgzzysxl6 }}，故障自愈实现率为{{ value.dwgzzysxl7 }}，{{ value.dwgzzysxl8 }}公司故障自愈实现率较低，以上单位进一步关注配电自动化功能投入率和故障自愈实现率的水平。
</template>
<script>
export default {
  props:["value","tbData"],
  data() {
    return {
      
    };
  },
  created() {
    // console.log(this.value,999)
  },
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