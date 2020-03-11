<template lang="pug">
  .two_main
    .message
      .title_1
        h4.word_title_3 （八）“煤改电”配变电压合格率监测情况
        p 
          span.word_title_4 1．“煤改电”配变电压质量总体情况
        p 
          span.word_content {{ value.mgdpbdyhgl1 }}-{{ value.mgdpbdyhgl2 }}，公司在运“煤改电”配变{{ value.mgdpbdyhgl3 }}台，电压可监测“煤改电”配变{{ value.mgdpbdyhgl4 }}台，“煤改电”配变可监测率{{ value.mgdpbdyhgl5 }}%，“煤改电”配变电压合格率为{{ value.mgdpbdyhgl6 }}%。
        zhutuzhexian.auto(v-model="tbData.tb34" :className="'mgaiqualifi522ed'" :isRow="true" :isTitle="true" :title="{tableName:'图30  公司“煤改电”配变电压合格率变化趋势',legendName:['电压合格配变数(万台)','电压不合格配变数(万台)','配变电压合格率']}")
        p 
          span.word_content {{ value.mgdpbdyhgl7 }}-{{ value.mgdpbdyhgl8 }}，公司发生电压异常的“煤改电”配变共计{{ value.mgdpbdyhgl9 }}台，较上周{{ value.mgdpbdyhgl10 }}台。其中低电压{{ value.mgdpbdyhgl11 }}台、过电压{{ value.mgdpbdyhgl12 }}台、数据异常{{ value.mgdpbdyhgl13 }}台。

        zhutufenceng.auto(v-model="tbData.tb35" :chartsOption="{className:'aiqualified', tableName:'图31 公司配变电压异常台数',isRow:true}" )
        p 
          span.word_content 从单位构成上看，发生电压异常“煤改电”配变数量较多的三家单位分别为{{ value.mgdpbdyhgl14 }}。

        zhutufenceng.auto(v-model="tbData.tb36" :chartsOption="{className:'mgaiqualified3', tableName:'图32 各单位“煤改电”配变不合格情况'}" )
        p 
          span.word_title_4 2．各单位配变电压合格率情况
        p 
          span.word_content {{ value.mgddwpbdyhgl1 }}-{{ value.mgddwpbdyhgl2 }}，“煤改电”配变电压合格率较高的三家单位分别为{{ value.mgddwpbdyhgl3 }}，较低的三家单位为别为{{ value.mgddwpbdyhgl4 }}。

        zhutuzhexian.auto(v-model="tbData.tb37" :className="'mgaiqualihegaie'" :isTitle="true" :title="{tableName:'图33 各单位“煤改电”配变电压合格率情况',legendName:['电压合格配变数(万台)','电压不合格配变数(万台)','配变电压合格率']}")
        p 
          span.word_title_4 3.各单位不可监测配变情况
        p 
          span.word_content {{ value.mgddwbkjcpb1 }}-{{ value.mgddwbkjcpb2 }}，公司不可监测“煤改电”配变有{{ value.mgddwbkjcpb3 }}台，较上周{{ value.mgddwbkjcpb4 }}台，变化情况见下图。
        zhuzhaungtu.auto(v-model="tbData.tb38"  :chartsOption="{className:'meigaidianizationtrend', tableName:'图34 公司不可监测配变数量变化趋势',legendName:'',isRow:true}")
        p 
          span.word_content 从单位构成上看不可监测“煤改电”配变数量较多三家单位分别为{{ value.mgddwbkjcpb5 }}。
        zhuzhaungtu.auto(v-model="tbData.tb39"  :chartsOption="{className:'meigaidianizat', tableName:'图35 各单位不可监测“煤改电”配变情况',legendName:''}")
</template>
<script>
export default {
  props:["value","tbData"],
  data() {
    return {};
  },
  created() {
    // console.log(this.tbData,558)
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