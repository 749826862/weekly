<template lang="pug">
  .two_main
    .message
      .title_1
        h4.word_title_2 一、“煤改电”电压合格率监测分析
        p 
          span.word_title_4 1．“煤改电”配变电压合格率总体情况
        p 
          span.word_content 11月，公司在运“煤改电”配变22324台，电压可监测“煤改电”配变21992台，“煤改电”配变可监测率98.51%，“煤改电”配变电压合格率为96.99%。
        Mzhexian(:chartsOption="{className:'mgdpbqs',legendName:['故障自愈实现率'],tableName:'',isRow:true}")
        p 
          span.word_content 11月，公司发生电压异常的“煤改电”配变¹共计340台。其中低电压²55台、过电压³104台、数据异常⁴181台。
        p 
          span.word_content.tip ¹电压不合格配变数=低电压台区数+过电压配变数+数据异常配变数;
          span.word_content.tip ²配变低电压：配变电压低于198V，在132V-198 V之间，持续1小时;
          span.word_content.tip ³配变过电压：配变电压高于235.4V，在235.4V-308V之间，持续1小时;
          span.word_content.tip ⁴配变数据异常：配变电压低于正常电压40%（132V）或电压高于正常电压40%（308V），持续1小时。
        Mzhexian(:chartsOption="{className:'gspbycts',legendName:['故障自愈实现率'],tableName:'',isRow:true}")
        p 
          span.word_content 从单位构成上看，发生电压异常“煤改电”配变数量较多的三家单位分别为通州、城区、大兴。
        Mzhexian(:chartsOption="{className:'mgdbhgqk',legendName:['故障自愈实现率'],tableName:'',isRow:true}")
        p 
          span.word_title_4 2．各单位配变电压合格率情况
        p 
          span.word_content 11月， “煤改电”配变电压合格率较高的三家单位分别为平谷、房山、顺义，较低的三家单位为别为门头沟、密云、昌平。
        Mzhexian(:chartsOption="{className:'mgdbhgqkhglv',legendName:['故障自愈实现率'],tableName:'',isRow:true}")
        p 
          span.word_title_4 3.各单位不可监测配变情况
        p 
          span.word_content 11月，公司不可监测“煤改电”配变有332台，各月变化情况见下图。
        Mzhexian(:chartsOption="{className:'bkjcslbh',legendName:['故障自愈实现率'],tableName:'',isRow:true}")
        p 
          span.word_content 从单位构成上看不可监测“煤改电”配变数量较多三家单位分别为昌平、密云、丰台。
        Mzhexian(:chartsOption="{className:'bkjcbkjcslbh',legendName:['故障自愈实现率'],tableName:'',isRow:true}")
        
        h4.word_title_2 二、线损率监测分析
        p 
          span.word_lingt 【监测周期】
          span.word_content 2019年11月1日0时—11月30日24时
        p 
          span.word_lingt 【监测概要】
          span.word_content 通过从电力用户用电信息采集系统中获取2.18万个煤改电台区供、售电量数据，全面反映公司及各供电公司同期线损完成情况，重点关注各供电公司煤改电台区的同期线损完成情况。
        p 
          span.word_lingt 【监测分析情况】

        h4.word_title_3 （一）煤改电台区线损情况
        p 
          span.word_content 1．11月份，北京地区煤改电台区同期线损率为3.85%。
        Mzhexian(:chartsOption="{className:'beijinmgd',legendName:['故障自愈实现率'],tableName:'',isRow:true}")
        p 
          span.word_content 11月份，怀柔公司煤改电台区同期线损率最低（1.94%），石景山公司煤改电台区同期线损率最高（12.52%）。
        Mzhexian(:chartsOption="{className:'beijinmgdtaiqu',legendName:['故障自愈实现率'],tableName:'',isRow:true}")
        p 
          span.word_content 2．11月份，北京地区煤改电台区同期线损率分布在[0,10]区间的台区数为19332个，占比为88.55%，管控情况较好。
        Mzhexian(:chartsOption="{className:'beijinmgdhegezhabi',legendName:['故障自愈实现率'],tableName:'',isRow:true}")
        p 
          span.word_content 11月份，平谷公司煤改电台区同期线损率最高（96.69%），城区公司煤改电台区同期线损率最低（61.57%），有6家单位的煤改电台区同期线损率低于北京地区煤改电台区同期线损率。
        Mzhexian(:chartsOption="{className:'gedanbeijinmgdhege',legendName:['故障自愈实现率'],tableName:'',isRow:true}")
        p 
          span.word_content 3．11月份，北京地区煤改电负损台区共计911个，占台区总数的4.17%，台区小负损数有所下降，其他负损数和负损占比均有上升。
        Mzhexian(:chartsOption="{className:'taiqufsbh',legendName:['故障自愈实现率'],tableName:'',isRow:true}")
        p 
          span.word_content 11月份，城区公司煤改电负损台区数量最多且占比最高，应重点加强治理。
        Mzhexian(:chartsOption="{className:'taiqufsbh11yue',legendName:['故障自愈实现率'],tableName:'',isRow:true}")
        
        h4.word_title_2 三、煤改电专题监测分析

        h4.word_title_3 （一）煤改电用户电量情况
        p 
          span.word_content 11月份，公司煤改电用户124.57万户，比去年同期增加5.07万户。用电量7.36亿千瓦时，比同期增加4.88亿千瓦时。
        Mzhexian(:chartsOption="{className:'cainantaiqufsbh11yue',legendName:['故障自愈实现率'],tableName:'',isRow:true}")
       
        h4.word_title_3 （二）煤改电用户拨打95598热线情况
        p 
          span.word_content 11月份，煤改电用户拨打95598热线993通，比去年同期明显降低。
        Mzhexian(:chartsOption="{className:'cainantgongdan',legendName:['故障自愈实现率'],tableName:'',isRow:true}")
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