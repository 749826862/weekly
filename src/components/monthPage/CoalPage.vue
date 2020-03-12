<template lang="pug">
  .two_main
    .message
      .title_1
        h4.word_title_2 一、“煤改电”电压合格率监测分析
        p 
          span.word_title_4 1．“煤改电”配变电压合格率总体情况
        p 
          span.word_content {{ value.dyhgl.mgdpbdyhgl1 }}，公司在运“煤改电”配变{{ value.dyhgl.mgdpbdyhgl2 }}台，电压可监测“煤改电”配变{{ value.dyhgl.mgdpbdyhgl3 }}台，“煤改电”配变可监测率{{ value.dyhgl.mgdpbdyhgl4 }}%，“煤改电”配变电压合格率为{{ value.dyhgl.mgdpbdyhgl5 }}%。
        zhutuzhexian.auto(v-model="tbdata.tb1" :title="{legendName:['电压合格配变数(万台)','电压不合格配变数(万台)','配变电压合格率(%)'],tableName:'图1  公司“煤改电”配变电压合格率变化趋势'}" :isRow="true" :className="'mgdpbqs'",)
        p 
          span.word_content {{ value.dyhgl.mgdpbdyhgl6 }}，公司发生电压异常的“煤改电”配变¹共计{{ value.dyhgl.mgdpbdyhgl7 }}台。其中低电压²{{ value.dyhgl.mgdpbdyhgl8 }}台、过电压³{{ value.dyhgl.mgdpbdyhgl9 }}台、数据异常⁴{{ value.dyhgl.mgdpbdyhgl10 }}台。
        p 
          span.word_content.tip ¹电压不合格配变数=低电压台区数+过电压配变数+数据异常配变数;
          span.word_content.tip ²配变低电压：配变电压低于198V，在132V-198 V之间，持续1小时;
          span.word_content.tip ³配变过电压：配变电压高于235.4V，在235.4V-308V之间，持续1小时;
          span.word_content.tip ⁴配变数据异常：配变电压低于正常电压40%（132V）或电压高于正常电压40%（308V），持续1小时。
        zhutufenceng.auto(v-model="tbdata.tb2" :chartsOption="{className:'gspbycts',legendName:['低电压异常(台)','过电压异常(台)','数据异常(台)'],tableName:'图2  公司配变电压异常台数',isRow:true}")
        p 
          span.word_content 从单位构成上看，发生电压异常“煤改电”配变数量较多的三家单位分别为{{ value.dyhgl.mgdpbdyhgl11 }}。
        zhutufenceng.auto(v-model="tbdata.tb3" :chartsOption="{className:'mgdbhgqk',legendName:['低电压异常(台)','过电压异常(台)','数据异常(台)'],tableName:'图3  各单位“煤改电”配变不合格情况',isRow:false}")
        p 
          span.word_title_4 2．各单位配变电压合格率情况
        p 
          span.word_content {{ value.dyhgl.mgddwpbdyhgl1 }}， “煤改电”配变电压合格率较高的三家单位分别为{{ value.dyhgl.mgddwpbdyhgl2 }}，较低的三家单位为别为{{ value.dyhgl.mgddwpbdyhgl3 }}。
        zhutuzhexian.auto(v-model="tbdata.tb4" :title="{legendName:['电压合格配变数(万台)','电压不合格配变数(万台)','配变电压合格率(%)'],tableName:'图4  各单位“煤改电”配变电压合格率情况',isRow:true}" :className="'mgdbhgqkhglv'",)
        p 
          span.word_title_4 3.各单位不可监测配变情况
        p 
          span.word_content {{ value.dyhgl.mgddwbkjcpb1 }}，公司不可监测“煤改电”配变有{{ value.dyhgl.mgddwbkjcpb2 }}台，各月变化情况见下图。
        zhuzhaungtu.auto(v-model="tbdata.tb5" :chartsOption="{className:'bkjcslbh',legendName:[''],tableName:'图5  公司不可监测配变数量变化趋势',isRow:true}")
        p 
          span.word_content 从单位构成上看不可监测“煤改电”配变数量较多三家单位分别为{{ value.dyhgl.mgddwbkjcpb3 }}。
        zhuzhaungtu.auto(v-model="tbdata.tb6" :chartsOption="{className:'bkjcbkjcslbh',legendName:[''],tableName:'图6 各单位不可监测“煤改电”配变情况',isRow:false}")
        
        h4.word_title_2 二、线损率监测分析
        p 
          span.word_lingt 【监测周期】
          span.word_content {{ value.xsl.xsljczq1 }}—{{ value.xsl.xsljczq2 }}
        p 
          span.word_lingt 【监测概要】
          span.word_content 通过从电力用户用电信息采集系统中获取{{ value.xsl.jcgy }}个煤改电台区供、售电量数据，全面反映公司及各供电公司同期线损完成情况，重点关注各供电公司煤改电台区的同期线损完成情况。
        p 
          span.word_lingt 【监测分析情况】

        h4.word_title_3 （一）煤改电台区线损情况
        p 
          span.word_content 1．{{ value.xsl.tqxsl1 }}份，北京地区煤改电台区同期线损率为{{ value.xsl.tqxsl2 }}%。
        titlezhexian.auto(v-model="tbdata.tb7" :chartsOption="{className:'beijinmgd',legendName:[''],tableName:'图7 北京地区煤改电台区同期线损率变化趋势',isRow:true,title:'2019煤改电台区同期线损率(%)'}")
        p 
          span.word_content {{ value.xsl.tqxsl3 }}份，{{ value.xsl.tqxsl4 }}公司煤改电台区同期线损率最低（{{ value.xsl.tqxsl5 }}），{{ value.xsl.tqxsl6 }}公司煤改电台区同期线损率最高（{{ value.xsl.tqxsl7 }}）。
        Mdanzhufuzhuline.auto(v-model="tbdata.tb8" :chartsOption="{className:'beijinmgdtaiqu',isMarkline:true,legendName:['各单位煤改电台区同期线损率(%)','北京煤改电台区同期线损率(%)'],tableName:'图8 各单位11月份煤改电台区同期线损率',isRow:false}")
        p 
          span.word_content 2．{{ value.xsl.tqxsl8 }}份，北京地区煤改电台区同期线损率分布在[0,10]区间的台区数为{{ value.xsl.tqxsl9 }}个，占比为{{ value.xsl.tqxsl10 }}%，管控情况较好。
        titlezhexian.auto(v-model="tbdata.tb9" :chartsOption="{className:'beijinmgdhegezhabi',legendName:[''],tableName:'图9 北京地区煤改电台区同期线损率合格区间占比',isRow:true,title:'2019煤改电台区合格率(%)'}")
        p 
          span.word_content {{ value.xsl.tqxsl11 }}份，{{ value.xsl.tqxsl12 }}公司煤改电台区同期线损率最高（{{ value.xsl.tqxsl13 }}），{{ value.xsl.tqxsl14 }}公司煤改电台区同期线损率最低（{{ value.xsl.tqxsl15 }}），有{{ value.xsl.tqxsl16 }}家单位的煤改电台区同期线损率低于北京地区煤改电台区同期线损率。
        zhuzhaungtu.auto(v-model="tbdata.tb10" :chartsOption="{className:'gedanbeijinmgdhege',legendName:['煤改电台区合格率(%)'],tableName:'图10 各单位11月份煤改电台区同期线损率合格区间占比',isRow:false}")
        p 
          span.word_content 3．{{ value.xsl.tqxsl17 }}份，北京地区煤改电负损台区共计{{ value.xsl.tqxsl18 }}个，占台区总数的{{ value.xsl.tqxsl19 }}，台区小负损数有所下降，其他负损数和负损占比均有上升。
        zhutuzhexian.auto(v-model="tbdata.tb11" :title="{legendName:['台区小负损数','台区其它负损数','负损台区占比'],tableName:'图11 北京地区台区负损变化趋势'}" :isRow="true" :className="'taiqufsbh'",)
        p 
          span.word_content {{ value.xsl.tqxsl20 }}份，{{ value.xsl.tqxsl21 }}公司煤改电负损台区数量最多且占比最高，应重点加强治理。
        zhutuzhexian.auto(v-model="tbdata.tb12" :title="{legendName:['台区小负损数','台区其它负损数','负损台区占比'],tableName:'图12 各单位11月份台区负损情况',isRow:true}" :className="'taiqufsbh11yue'",)
        
        h4.word_title_2 三、煤改电专题监测分析

        h4.word_title_3 （一）煤改电用户电量情况
        p 
          span.word_content {{ value.khfw.khfw1 }}份，公司煤改电用户{{ value.khfw.khfw2 }}万户，比去年同期增加{{ value.khfw.khfw3 }}万户。用电量{{ value.khfw.khfw4 }}亿千瓦时，比同期增加{{ value.khfw.khfw5 }}亿千瓦时。
        binpaifuzhuline.auto(v-model="tbdata.tb13" :chartsOption="{className:'cainantaiqufsbh11yue',legendName:['2018采暖季','2019采暖季'],tableName:'图13  采暖季煤改电用户用电量情况',isRow:true,danwei:'单位：千瓦时/时'}")
       
        h4.word_title_3 （二）煤改电用户拨打95598热线情况
        p 
          span.word_content 11月份，煤改电用户拨打95598热线{{ value.khfw.khfw6 }}通，比去年同期明显降低。
        binpaifuzhuline.auto(v-model="tbdata.tb14" :chartsOption="{className:'cainantgongdan',legendName:['2018采暖季','2019采暖季'],tableName:'图14  采暖季煤改电用户95598工单变化趋势',isRow:true,danwei:'单位：件'}")
</template>
<script>
export default {
  props:["value","tbdata"],
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