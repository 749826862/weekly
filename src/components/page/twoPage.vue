<template lang="pug">
  .two_main
    h3 第一部分 重点专题监测情况
    .message
      .title_1
        h4 一、配电自动化率
        p 
          span.lingt 【监测周期】
          span 2019年11月18日0时—2019年11月24日24时
        p 
          span.lingt 【监测概要】
          span 从设备部获取公司整体及16家供电公司配电自动化远方操作、故障自愈等数据，分析历史变化趋势、各单位差异情况，全面反映公司配电自动化远方操作率、操作成功率和故障自愈实现率完成情况，指导各单位不断提升配电自动化管理水平。
        p 
          span.lingt 【监测分析情况】
        h4 （一）配电自动化故障自愈实现情况
        p 
          span.lingt 1、故障自愈实现率总体情况
        p 
          span 11月18日-11月24日,北京公司累计投入配电自动化8689条，故障自愈实现率为99.70%，较上周上升0.01个百分点。
        zhuzhaungtu.auto(:className="'trend'")
        p 
          span.lingt 2、各单位故障自愈实现率情况
        p 
          span 11月18日-11月24日，故障自愈实现率较高的公司分别为城区、通州、朝阳公司，故障自愈实现率较低的公司分为延庆、密云、门头沟公司。
        zhuzhexian.auto(:className="'realization'")
        p 
          span.lingt 【相关建议】
        p 
          span 11月18日-11月24日，故障自愈实现率为99.70%，延庆、密云、门头沟公司故障自愈实现率较低，以上单位进一步关注配电自动化功能投入率和故障自愈实现率的水平。
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
    font-size: 20px;
  }
  .message{
    h4{
      color: #000;
      font-weight: 600;
      font-size: 14px;
      font-family:"宋体";
      margin: 20px 0;
    }
    p{
      text-indent: 3em;
      line-height: 25px;
      font-family:"宋体";
      letter-spacing: 2px;
      .lingt{
        color: #000;
        font-weight: bold;
      }
    }
  }
  .auto{
    margin: 0 auto;
  }
}
</style>