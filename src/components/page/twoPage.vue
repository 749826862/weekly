<template lang="pug">
  .two_main
    //- h3.word_title_1 第一部分 重点专题监测情况
    .message
      .title_1
        h4.word_title_2 二、电压合格率
        p 
          span.word_lingt 【监测周期】
          span.word_content {{ value.jczq1 }}—{{ value.jczq2 }}
        p 
          span.word_lingt 【监测概要】
          span.word_content 从用电信息采集系统、营销业务应用系统和PMS2.0三个业务系统中，获取周配变运行电压数据{{ value.jcgy }}亿条。对低电压、过电压、数据异常等问题开展趋势与分布特征分析，定位主要问题，挖掘问题根因，指导各单位开展配变及低压用户电压综合治理与数据治理。
        p 
          span.word_lingt 【监测分析情况】
        h4.word_title_3 （一）配变电压合格率监测
        p 
          span.word_title_4 1、配变电压合格率周趋势
        .result  
        p 
          span.word_content 截至{{ value.zcs1 }}，公司在运配变{{ value.zypb }}万台，可监测配变{{ value.kjcpb }}万台（不可监测配变{{ value.bkjcpb }}台），配变电压可监测率{{ value.kjcl }}，电压合格率¹为{{ value.dyhgl }}，较上周{{ value.dyhgl_1 }}个百分点，较10月份97.17%{{ value.dyhgl_2 }}个百分点。
        
        div.trendCharts
          zhuzhexian.auto(v-model="tbData.tb3" :className="'trend'")
          zhexian(v-model="tbData.tb3" :className="'hegezhexian1'")
          zhexianBottom(v-model="tbData.tb3" :className="'hegezhexian2'")
        p 
          span.word_title_4 2、各单位电压合格率分布情况
        p 
          span.word_content 在单位分布上,配变电压合格率较高的三家单位分别为{{ value.dw_1 }}公司，配变电压合格率较低的三家单位分别为{{ value.dw_2 }}公司。
        zhutuzhexian.auto(v-model="tbData.tb4" :className="'qualified'" :isTitle="true")
        p 
          span.word_title_4 3、不合格配变周趋势
        p 
          span.word_content {{ value.bhgpbzcs1 }}-{{ value.bhgpbzcs2 }},公司发生电压不合格配变{{ value.bhgpbzcs3 }}台，较上周数量{{ value.bhgpbzcs4 }}台。其中低电压²有{{ value.bhgpbzcs5 }}台(占比{{ value.bhgpbzcs6 }})、过电压³ {{ value.bhgpbzcs7 }}台（占比{{ value.bhgpbzcs8 }}）、数据异常⁴有{{ value.bhgpbzcs9 }}台（占比{{ value.bhgpbzcs10 }}）。
        p 
          span.word_content.tip ¹配变电压合格率=配变电压合格台数/在运配变总数，其中电压合格数=在运配变总数-不可监测配变数-配变电压异常数-配变数据异常数。
          span.word_content.tip ²配变低电压：配变电压低于198V，在132V-198 V之间，持续1小时;
        zhutufenceng.auto(v-model="tbData.tb5" :chartsOption="{ className:'noqualified',isRow:true,tableName:'图7 电压不合格配变周趋势',legendName:['低电压异常(台)', '过电压异常(台)', '数据异常(台)']}")
        p 
          span.word_title_4 4、各单位配变电压不合格分布情况
        p 
          span.word_content {{ value.pbdybhgfb1 }}-{{ value.pbdybhgfb2 }}，公司发生电压不合格配变⁵共{{ value.pbdybhgfb3 }}台，其中电压不合格配变较多的三家单位分别为{{ value.pbdybhgfb4 }}公司。
        zhutufenceng.auto(v-model="tbData.tb6" :chartsOption="{ className:'noqualifiedfenbu',isRow:false,tableName:'图8 各单位电压不合格配变分布',legendName:['低电压异常(台)', '过电压异常(台)', '数据异常(台)']}")
        p 
          span.word_title_4 5、不可监测配变周趋势
        p 
          span.word_content {{ value.bkjcpbzcs1 }}-{{ value.bkjcpbzcs2 }}，公司发生不可监测配变有{{ value.bkjcpbzcs3 }}台，较上周{{ value.bkjcpbzcs4 }}台。其中，上周持续至本周仍不可监测{{ value.bkjcpbzcs5 }}台，本周新增{{ value.bkjcpbzcs6 }}台。
        p 
          span.word_content.tip ³配变过电压：配变电压高于235.4V，在235.4V-308V之间，持续1小时;
          span.word_content.tip ⁴配变数据异常：配变电压低于正常电压40%（132V）或电压高于正常电压40%（308V），持续1小时。
          span.word_content.tip ⁵电压不合格配变数=低电压台区数+过电压配变数+数据异常配变数;
        zhutufengcengfour.auto(v-model="tbData.tb7" :chartsOption="{className:'gedanweibuke',isRow:true,tableName:'图9 各单位不可监测配变分布',legendName:['变压器与营销台区关系紧缺', '台区与电能表关系紧缺', '台区与电能表存在1对多问题','电能表缺失电压曲线数据']}")
        p 
          span.word_title_4 6、配变不合格治理情况
        p 
          span.word_content 自{{ value.pbbhgzl1 }}份以来，公司累计发生不合格配变共计{{ value.pbbhgzl2 }}台，截至{{ value.pbbhgzl3 }}，已有{{ value.pbbhgzl4 }}台完成治理，治理率为{{ value.pbbhgzl5 }}。各单位治理情况如下：
        zhutuzhexian.auto(v-model="tbData.tb8" :className="'dianyaqingkuang'" :title="{tableName:'图10 配变电压不合格治理情况',legendName:['已治理配变数(台)', '未治理配变数(台)','治理率(%)']}")
        p 
          span.word_title_4 配变电压不合格治理措施分析：
          span.word_content 扣除瞬时发生自行恢复外，治理二次线虚接、错接的措施占比最大，占比{{ value.pbbhgzl6 }}，其次为调整配变分接头措施，占比{{ value.pbbhgzl7 }}。
        QualityTable
        p 
          span.word_title_4 7、不可监测配变治理情况
        p 
          span.word_content 自{{ value.bkjcpbzl1 }}份以来，公司累计发生不可监测配变共计{{ value.bkjcpbzl2 }}台，截至{{ value.bkjcpbzl3 }}，已有{{ value.bkjcpbzl4 }}台完成治理，治理率为{{ value.bkjcpbzl5 }}。各单位治理情况如下：
        zhutuzhexian.auto(:className="'bukejiance'" :title="{tableName:'图11 不可监测配变情况',legendName:['已实现监测配变数(台)','仍不可监测配变数(台)','治理率(%)']}")
        NoMonitorTable
</template>
<script>
export default {
  props:["value","tbData"],
  data() {
    return {};
  },
  created() {
    console.log(this.tbData,888)
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