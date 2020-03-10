<template lang="pug">
  .two_main
    .message
      .title_1
        h4.word_title_2 二、电压合格率监测分析
        p 
          span.word_lingt 【监测周期】
          span.word_content {{ value.jczq1 }}—{{ value.jczq2 }}
        p 
          span.word_lingt 【监测概要】
          span.word_content 从PMS2.0、用电信息采集和营销业务应用系统中，获取{{ value.jcgy }}台配电变压器（以下简称配变）的电压数据，对低电压、过电压、数据异常等问题开展趋势与分布特征分析，定位主要问题，挖掘问题根因，指导各单位开展配变及低压客户到户电压综合治理与数据治理工作。
        p 
          span.word_lingt 【监测分析情况】

        h4.word_title_3 （一）配变电压合格率监测情况
        p 
          span.word_title_4 1．配变电压合格率总体情况
        p 
          span.word_content {{ value.dyhgl1 }}份，公司在运配变{{ value.dyhgl2 }}台，电压可监测配变{{ value.dyhgl3 }}台，可监测率{{ value.dyhgl4 }}，电压合格率{{ value.dyhgl5 }}。
        zhutuzhexian.auto(:title="{legendName:['电压合格配变数(万台)','电压不合格配变数(万台)','配变电压合格率(%)'],tableName:'图1  公司配变电压合格率变化趋势',isRow:true}" :className="'pbdyhegelv'",)
        p 
          span.word_content {{ value.dyhgl6 }}份，公司发生电压异常的配变¹共计{{ value.dyhgl7 }}台，其中低电压¹{{ value.dyhgl8 }}台、过电压²{{ value.dyhgl9 }}台、数据异常³{{ value.dyhgl10 }}台。电压异常配变数量与负荷关联关系见下图。
        p 
          span.word_content.tip ¹电压不合格配变数=低电压台区数+过电压配变数+数据异常配变数;
          span.word_content.tip ²配变过电压：配变电压高于235.4V，在235.4V-308V之间，持续1小时;
          span.word_content.tip ³配变数据异常：配变电压低于正常电压40%（132V）或电压高于正常电压40%（308V），持续1小时。
        danzhuzhexian.auto(:chartsOption="{className:'fhqkdb',legendName:['电压不合格配变数(台)','月最大负荷(万千瓦)'],tableName:'图2  公司配变电压异常台数与负荷情况对比',isRow:true}")
        p 
          span.word_content {{ value.dyhgl11 }}份，公司发生不可监测配变{{ value.dyhgl12 }}台，较{{ value.dyhgl13 }}份{{ value.dyhgl14 }}台，各月变化情况见下图。
        zhuzhaungtu.auto(:chartsOption="{className:'bkjcpb',legendName:['不可监测配变数(台)'],tableName:'图3  公司不可监测配变数量变化趋势',isRow:true}")
        p 
          span.word_content {{ value.dyhgl15 }}台不可监测配变中，投运日期在{{ value.dyhgl16 }}的{{ value.dyhgl17 }}台，占比{{ value.dyhgl18 }}，具体分布情况见下图。
        p 
          span.word_title_4 2．各单位配变电压合格率情况
        p 
          span.word_content {{ value.dwdyhgl1 }}份，配变电压合格率较高的三家单位分别为{{ value.dwdyhgl2 }}公司，较低的三家单位分别为{{ value.dwdyhgl3 }}公司。
        zhutuzhexian.auto(:title="{legendName:['电压合格配变数(万台)','电压不合格配变数(万台)','配变电压合格率(%)'],tableName:'图5  各单位配变电压合格率情况',isRow:true}" :className="'gedwdyheg'")
        p 
          span.word_title_4 3．配变电压合格率治理情况
        p 
          span.word_content 截至{{ value.dyhglzl1 }}份，公司配变电压异常治理率{{ value.dyhglzl2 }}，不可监测治理率{{ value.dyhglzl3 }}。
        p 
          span.word_content 配变电压异常治理情况：自{{ value.dyhglzl4 }}，公司发生电压异常配变累计{{ value.dyhglzl5 }}台。截至{{ value.dyhglzl6 }}，已有{{ value.dyhglzl7 }}台完成治理，治理率{{ value.dyhglzl8 }}。各单位治理情况见下图。
        zhutuzhexian.auto(:title="{legendName:['已治理配变数(台)','未治理配变数(台)','治理率(%)'],tableName:'图6  各单位电压异常配变治理情况',isRow:true}" :className="'dypbzlqk'")
        p 
          span.word_content 不可监测配变治理情况：自{{ value.bkjcbpzl1 }}，公司发现不可监测配变累计{{ value.bkjcbpzl2 }}台。截至{{ value.bkjcbpzl3 }}，已有{{ value.bkjcbpzl4 }}台完成治理，治理率{{ value.bkjcbpzl5 }}。各单位治理情况见下图。
        zhutuzhexian.auto(:title="{legendName:['已实现监测配变数(台)','仍不可监测配变数(台)','治理率(%)'],tableName:'图7  各单位不可监测配变治理情况',isRow:true}" :className="'dypbbkzlqk'")
        p 
          span.word_title_4 4．新投配变维护时长分析
        p 
          span.word_content {{ value.xtypbsc1 }}至{{ value.xtypbsc2 }}，公司新投运配变{{ value.xtypbsc3 }}台。已实现可监测{{ value.xtypbsc4 }}台，平均用时{{ value.xtypbsc5 }}天，其中PMS2.0侧维护平均用时{{ value.xtypbsc6 }}天，营销系统侧维护平均用时{{ value.xtypbsc7 }}天。仍不可监测的{{ value.xtypbsc8 }}台，其中PMS2.0侧维护平均用时{{ value.xtypbsc9 }}天，营销系统侧维护平均已用时{{ value.xtypbsc10 }}天。
        p 
          span.word_content 从各单位情况看，数据维护平均用时较短的三家单位分别为{{ value.xtypbsc11 }}公司，较长的三家单位分别为{{ value.xtypbsc12 }}公司。
        Mdanzhuzhexian.auto(:chartsOption="{className:'gdwxty',legendName:['已实现监测配变数(台)','实现监测平均用时(天)'],tableName:'图8  各单位新投运配变实现监测用时情况',isRow:true}")
        p 
          span.word_lingt 【相关建议】
        p 
          span.word_content 1．{{ value.xgjy1 }}份，公司配变电压合格率{{ value.xgjy2 }}，说明公司配变的电压质量情况并不能全面、客观反映低压客户真实用电感受，建议公司进一步重视到户电压合格率的监测工作，提升到户电压数据获取的频度与精度，全面反映低压客户真实电压质量水平，为进一步改善低压客户用电感受奠定基础。
        p 
          span.word_content 2．{{ value.xgjy3 }}份，引起配变电压异常的主要原因为{{ value.xgjy4 }}，占所有原因的{{ value.xgjy5 }}，这反映出各单位在现场工作质量管控上还存在薄弱环节，应引起公司及各单位重视。
        p 
          span.word_content 3．公司配变从现场投运、建立台账，到最终获取到电压数据，经过设备专业、营销专业的不同系统，需要各专业协同维护，通过近六个月的监测，新投运已实现监测的配变全过程平均用时{{ value.xgjy6 }}天。建议各供电公司进一步提高维护效率，缩短维护时间，保证配变投运后尽快与考核表关联匹配，及时实现配变电压在线监测。
        
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
    .tip{
        display: block;
        font-size: 12px;
        line-height: 20px;
    }
  }
}
</style>