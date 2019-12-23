<template lang="pug">
  .two_main
    //- h3.word_title_1 第一部分 重点专题监测情况
    .message
      .title_1
        h4.word_title_2 二、电压合格率
        p 
          span.word_lingt 【监测周期】
          span.word_content 2019年11月21日0时—11月27日24时
        p 
          span.word_lingt 【监测概要】
          span.word_content 从用电信息采集系统、营销业务应用系统和PMS2.0三个业务系统中，获取周配变运行电压数据1.69亿条。对低电压、过电压、数据异常等问题开展趋势与分布特征分析，定位主要问题，挖掘问题根因，指导各单位开展配变及低压用户电压综合治理与数据治理。
        p 
          span.word_lingt 【监测分析情况】
        h4.word_title_3 （一）配变电压合格率监测
        p 
          span.word_title_4 1、配变电压合格率周趋势
        p 
          span.word_content 截至11月27日，公司在运配变8.68万台，可监测配变8.45万台（不可监测配变2272台），配变电压可监测率97.38%，电压合格率¹为96.54%，较上周上升0.21个百分点，较10月份97.17%下降0.63个百分点。
        div.trendCharts
          zhuzhexian.auto(:className="'trend'")
          zhexian(:className="'hegezhexian1'")
          zhexianBottom(:className="'hegezhexian2'")
        p 
          span.word_title_4 2、各单位电压合格率分布情况
        p 
          span.word_content 在单位分布上,配变电压合格率较高的三家单位分别为平谷、房山、亦庄公司，配变电压合格率较低的三家单位分别为延庆、城区、密云公司。
        zhutuzhexian.auto(:className="'qualified'")
        p 
          span.word_title_4 3、不合格配变周趋势
        p 
          span.word_content 11月21日-11月27日,公司发生电压不合格配变746台，较上周数量减少180台。其中低电压²有72台(占比9.65%)、过电压³ 358台（占比47.99%）、数据异常⁴有316台（占比42.36%）。
        p 
          span.word_content.tip ¹配变电压合格率=配变电压合格台数/在运配变总数，其中电压合格数=在运配变总数-不可监测配变数-配变电压异常数-配变数据异常数。
          span.word_content.tip ²配变低电压：配变电压低于198V，在132V-198 V之间，持续1小时;
        zhutuzhexian.auto(:className="'noqualified'")
        p 
          span.word_title_4 4、各单位配变电压不合格分布情况
        p 
          span.word_content 11月21日-11月27日，公司发生电压不合格配变⁵共746台，其中电压不合格配变较多的三家单位分别为城区、大兴、通州公司。
        zhutuzhexian.auto(:className="'noqualifiedfenbu'")
        p 
          span.word_title_4 5、不可监测配变周趋势
        p 
          span.word_content 11月21日-11月27日，公司发生不可监测配变有2272台，较上周增加5台。其中，上周持续至本周仍不可监测2038台，本周新增234台。
        p 
          span.word_content.tip ³配变过电压：配变电压高于235.4V，在235.4V-308V之间，持续1小时;
          span.word_content.tip ⁴配变数据异常：配变电压低于正常电压40%（132V）或电压高于正常电压40%（308V），持续1小时。
          span.word_content.tip ⁵电压不合格配变数=低电压台区数+过电压配变数+数据异常配变数;
        zhutuzhexian.auto(:className="'jiance'")
        p 
          span.word_title_4 6、配变不合格治理情况
        p 
          span.word_content 自2018年6月份以来，公司累计发生不合格配变共计12559台，截至11月27日，已有12299台完成治理，治理率为97.93%。各单位治理情况如下：
        zhutuzhexian.auto(:className="'dianyaqingkuang'")
        p 
          span.word_title_4 配变电压不合格治理措施分析：
          span.word_content 扣除瞬时发生自行恢复外，治理二次线虚接、错接的措施占比最大，占比27.08%，其次为调整配变分接头措施，占比9.26%。
        QualityTable
        p 
          span.word_title_4 7、不可监测配变治理情况
        p 
          span.word_content 自2018年6月份以来，公司累计发生不可监测配变共计11440台，截至11月27日，已有9928台完成治理，治理率为86.78%。各单位治理情况如下：
        zhutuzhexian.auto(:className="'bukejiance'")
        NoMonitorTable
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