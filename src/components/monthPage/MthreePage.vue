<template lang="pug">
  .two_main
    .message
      .title_1
        h4.word_title_2 二、电压合格率监测分析
        p 
          span.word_lingt 【监测周期】
          span.word_content 2019年11月1日0时—11月30日24时
        p 
          span.word_lingt 【监测概要】
          span.word_content 从PMS2.0、用电信息采集和营销业务应用系统中，获取8.64万台配电变压器（以下简称配变）的电压数据，对低电压、过电压、数据异常等问题开展趋势与分布特征分析，定位主要问题，挖掘问题根因，指导各单位开展配变及低压客户到户电压综合治理与数据治理工作。
        p 
          span.word_lingt 【监测分析情况】

        h4.word_title_3 （一）配变电压合格率监测情况
        p 
          span.word_title_4 1．配变电压合格率总体情况
        p 
          span.word_content 11月份，公司在运配变8.68万台，电压可监测配变8.47万台，可监测率97.64%，电压合格率95.71%。
        zhutuzhexian.auto(:title="{legendName:['电压合格配变数(万台)','电压不合格配变数(万台)','配变电压合格率(%)'],tableName:'图1  公司配变电压合格率变化趋势',isRow:true}" :className="'pbdyhegelv'",)
        p 
          span.word_content 11月份，公司发生电压异常的配变¹共计1733台，其中低电压¹415台、过电压²592台、数据异常³726台。电压异常配变数量与负荷关联关系见下图。
        p 
          span.word_content.tip ¹电压不合格配变数=低电压台区数+过电压配变数+数据异常配变数;
          span.word_content.tip ²配变过电压：配变电压高于235.4V，在235.4V-308V之间，持续1小时;
          span.word_content.tip ³配变数据异常：配变电压低于正常电压40%（132V）或电压高于正常电压40%（308V），持续1小时。
        danzhuzhexian.auto(:chartsOption="{className:'fhqkdb',legendName:['电压不合格配变数(台)','月最大负荷(万千瓦)'],tableName:'图2  公司配变电压异常台数与负荷情况对比',isRow:true}")
        p 
          span.word_content 11月份，公司发生不可监测配变2044台，较10月份增加404台，各月变化情况见下图。
        zhuzhaungtu.auto(:chartsOption="{className:'bkjcpb',legendName:['不可监测配变数(台)'],tableName:'图3  公司不可监测配变数量变化趋势',isRow:true}")
        p 
          span.word_content 2044台不可监测配变中，投运日期在2019年的1276台，占比62.43%，具体分布情况见下图。
        p 
          span.word_title_4 2．各单位配变电压合格率情况
        p 
          span.word_content 11月份，配变电压合格率较高的三家单位分别为房山、平谷、亦庄公司，较低的三家单位分别为延庆、密云、怀柔公司。
        zhutuzhexian.auto(:title="{legendName:['电压合格配变数(万台)','电压不合格配变数(万台)','配变电压合格率(%)'],tableName:'图5  各单位配变电压合格率情况',isRow:true}" :className="'gedwdyheg'")
        p 
          span.word_title_4 3．配变电压合格率治理情况
        p 
          span.word_content 截至11月份，公司配变电压异常治理率96.96%，不可监测治理率87.23%。
        p 
          span.word_content 配变电压异常治理情况：自2018年6月，公司发生电压异常配变累计12559台。截至11月30日，已有12177台完成治理，治理率96.96%。各单位治理情况见下图。
        zhutuzhexian.auto(:title="{legendName:['已治理配变数(台)','未治理配变数(台)','治理率(%)'],tableName:'图6  各单位电压异常配变治理情况',isRow:true}" :className="'dypbzlqk'")
        p 
          span.word_content 不可监测配变治理情况：自2018年6月，公司发现不可监测配变累计11440台。截至11月30日，已有9979台完成治理，治理率87.23%。各单位治理情况见下图。
        zhutuzhexian.auto(:title="{legendName:['已实现监测配变数(台)','仍不可监测配变数(台)','治理率(%)'],tableName:'图7  各单位不可监测配变治理情况',isRow:true}" :className="'dypbbkzlqk'")
        p 
          span.word_title_4 4．新投配变维护时长分析
        p 
          span.word_content 2019年1月1日至11月30日，公司新投运配变4489台。已实现可监测3213台，平均用时48.69天，其中PMS2.0侧维护平均用时4.69天，营销系统侧维护平均用时44.0天。仍不可监测的1276台，其中PMS2.0侧维护平均用时6.40天，营销系统侧维护平均已用时62.30天。
        p 
          span.word_content 从各单位情况看，数据维护平均用时较短的三家单位分别为平谷、密云、顺义公司，较长的三家单位分别为石景山、城区、海淀公司。
        Mdanzhuzhexian.auto(:chartsOption="{className:'gdwxty',legendName:['已实现监测配变数(台)','实现监测平均用时(天)'],tableName:'图8  各单位新投运配变实现监测用时情况',isRow:true}")
        p 
          span.word_lingt 【相关建议】
        p 
          span.word_content 1．11月份，公司配变电压合格率95.71%，说明公司配变的电压质量情况并不能全面、客观反映低压客户真实用电感受，建议公司进一步重视到户电压合格率的监测工作，提升到户电压数据获取的频度与精度，全面反映低压客户真实电压质量水平，为进一步改善低压客户用电感受奠定基础。
        p 
          span.word_content 2．11月份，引起配变电压异常的主要原因为表计二次线的虚接和错接，占所有原因的48.18%，这反映出各单位在现场工作质量管控上还存在薄弱环节，应引起公司及各单位重视。
        p 
          span.word_content 3．公司配变从现场投运、建立台账，到最终获取到电压数据，经过设备专业、营销专业的不同系统，需要各专业协同维护，通过近六个月的监测，新投运已实现监测的配变全过程平均用时48.69天。建议各供电公司进一步提高维护效率，缩短维护时间，保证配变投运后尽快与考核表关联匹配，及时实现配变电压在线监测。
        
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
    .tip{
        display: block;
        font-size: 12px;
        line-height: 20px;
    }
  }
}
</style>