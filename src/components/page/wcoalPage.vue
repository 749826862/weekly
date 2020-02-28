<template lang="pug">
  .two_main
    .message
      .title_1
        h4.word_title_3 （八）“煤改电”配变电压合格率监测情况
        p 
          span.word_title_4 1．“煤改电”配变电压质量总体情况
        p 
          span.word_content 12月12日-12月18日，公司在运“煤改电”配变22338台，电压可监测“煤改电”配变21971台，“煤改电”配变可监测率98.36%，“煤改电”配变电压合格率为98.12%。
        zhutuzhexian.auto( :className="'mgaiqualified'" :isTitle="true" :title="{tableName:'图30  公司“煤改电”配变电压合格率变化趋势'}")
        p 
          span.word_content 12月12日-12月18日，公司发生电压异常的“煤改电”配变共计54台，较上周增加3台。其中低电压6台、过电压6台、数据异常42台。

        zhutufenceng.auto( :chartsOption="{className:'aiqualified', tableName:'图31 公司配变电压异常台数'}" )
        p 
          span.word_content 从单位构成上看，发生电压异常“煤改电”配变数量较多的三家单位分别为城区、房山、丰台。

        zhutufenceng.auto( :chartsOption="{className:'mgaiqualified3', tableName:'图32 各单位“煤改电”配变不合格情况'}" )
        p 
          span.word_title_4 2．各单位配变电压合格率情况
        p 
          span.word_content 12月12日-12月18日，“煤改电”配变电压合格率较高的三家单位分别为海淀、平谷、通州，较低的三家单位为别为昌平、密云、延庆。

        zhutuzhexian.auto( :className="'mgaiqualihegaie'" :isTitle="true" :title="{tableName:'图33 各单位“煤改电”配变电压合格率情况'}")
        p 
          span.word_title_4 3.各单位不可监测配变情况
        p 
          span.word_content 12月12日-12月18日，公司不可监测“煤改电”配变有367台，较上周减少1台，变化情况见下图。
        zhuzhaungtu.auto(  :chartsOption="{className:'meigaidianizationtrend', tableName:'图34 公司不可监测配变数量变化趋势',legendName:''}")
        p 
          span.word_content 从单位构成上看不可监测“煤改电”配变数量较多三家单位分别为昌平、密云、大兴。
        zhuzhaungtu.auto(  :chartsOption="{className:'meigaidianizat', tableName:'图35 各单位不可监测“煤改电”配变情况',legendName:''}")
</template>
<script>
export default {
  props:["value","tbData"],
  data() {
    return {};
  },
  created() {
  
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
      // margin: 10px 0;
    }
    p{
      text-indent: 3em;
      line-height: 25px;
      letter-spacing: 2px;
    }
    .tip{
        display: block;
        font-size: 13px;
    }
    .trendCharts{
      width: 100%;
      height: 490px;
      position: relative;
      .auto{
        margin-bottom: 0;
      }
      .chartMain{
        position: absolute;
        &:nth-of-type(1){
          top: 0;
          left: 0;
        }
        &:nth-of-type(2){
          top: 150px;
          left: 0;
        }
        &:nth-of-type(3){
          top: 286px;
          left: 0;
        }
      }
      // display: flex;
      // flex-direction: column;
    }
  }
}
</style>