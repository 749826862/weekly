<template lang="pug">
  .two_main
    .message
      .title_1
        h4.word_title_2 四、客户满意率监测分析
        p 
          span.word_lingt 【监测周期】
          span.word_content {{ value.jczq1 }}—{{ value.jczq2 }}
        p 
          span.word_lingt 【监测概要】
          span.word_content 通过从95598业务支持系统、PMS2.0、用电信息采集系统获取明细数据，从95598话务量、国网一次办结工单、下派公司处理的八类工单、购电下发时长等方面开展监测分析工作，全面反映北京地区95598话务量变化趋势、聚焦客户诉求热点问题及管理短板。
        p 
          span.word_lingt 【监测分析情况】
        p 
          span.word_title_4 1．95598话务情况
        p 
          span.word_content {{ value.hwqk1 }}份，北京地区95598电话呼入量{{ value.hwqk2 }}万通⁴，同比{{ value.hwqk3 }}，减少的主要原因是IVR自助语音服务量减少较多。{{ value.hwqk4 }}月，北京地区95598电话呼入量累计{{ value.hwqk5 }}万通，同比{{ value.hwqk6 }}。
        p
          span.word_content 95598话务量总体情况见下图。
        p 
          span.word_content.tip ⁴数据来源于95598业务支持系统
        p
          span.word_content 95598电话呼入量月度变化趋势见下图。
        binpaifuzhuline.auto(:chartsOption="{className:'dhhr95585',legendName:['2018年电话呼入量','2019年电话呼入量'],tableName:'图2  北京地区95598电话呼入量变化趋势',isRow:true}")
        p
          span.word_content 95598电话呼入量、IVR自助语音服务量、国网一次办结工单数量、八类工单对比关系见下图。
        Mthreezhutuzhexian.auto(:chartsOption="{className:'dhhr95585db',legendName:['IVR自主语音','一次性办结','八类工单量','电话呼入量'],tableName:'图3  北京地区95598话务量对比关系',isRow:true}")
        p 
          span.word_title_4 2．国网客服中心一次办结工单情况
        p
          span.word_content {{ value.ycgdqk1 }}份，北京地区国网客服中心一次办结工单{{ value.ycgdqk2 }}万件，同比{{ value.ycgdqk3 }}，减少的主要原因是客户误报工单减少较多。{{ value.ycgdqk4 }}，北京地区国网客服中心一次办结工单累计{{ value.ycgdqk5 }}万件，同比{{ value.ycgdqk6 }}。各月变化情况见下图。
        binpaifuzhuline.auto(:chartsOption="{className:'gwkfzx',legendName:['2018一次办结工单数量','2019一次办结工单数量'],tableName:'图4 国网客服中心一次办结工单变化趋势',isRow:true,danwei:'单位：万件'}")
        p 
          span.word_lingt （1）从工单类别及客户诉求热点来看,
          span.word_content 故障报修{{ value.ycgdqk7 }}万件、咨询{{ value.ycgdqk8 }}万件。客户诉求热点主要集中在：客户误报、电费抄核收及电量电费查询⁵、基本档案信息三个方面。
        p 
          span.word_content.tip ⁵咨询电价政策、抄表周期、抄表例日、缴费方式、电费发票、电量电费退补方式流程、充值卡购买、电费账单、欠费停复电以及查询电量电费、电费余额查询等。
        p 
          span.word_lingt （2）从工单在各单位的分布情况来看，
          span.word_content 工单较多的三家单位分别为{{ value.ycgdqk9 }}公司。
        duidiezhutu.auto(:chartsOption="{className:'gwkfzxfbqk',legendName:['故障报修','咨询'],tableName:'图6  国网一次办结工单在各单位的分布情况',isRow:false,company:'单位：万件'}")
        p 
          span.word_title_4 3．八类工单情况
        p
          span.word_content {{ value.blgdqk1 }}份，国网客服中心下派北京公司处理的八类工单共{{ value.blgdqk2 }}万件，同比{{ value.blgdqk3 }}，降低的主要原因是掌上电力APP等使用问题工单增加较少。{{ value.blgdqk4 }}，八类工单累计{{ value.blgdqk5 }}万件，同比{{ value.blgdqk6 }}。各月变化情况见下图。
        binpaifuzhuline.auto(:chartsOption="{className:'blgdbh',legendName:['2018八类工单数量','2019八类工单数量'],tableName:'图7 八类工单变化趋势',isRow:true}")
        p 
          span.word_lingt （1）从工单类别及客户诉求热点来看，
          span 服务申请、故障报修工单数量占比较大，意见、投诉等其它六类工单占比较小。客户诉求热点主要集中在：掌上电力APP、用户服务需求、一户无电等使用问题、应急送电需求四个方面。
        p 
          span.word_lingt （2）从工单在各单位的分布情况来看，
          span.word_content 工单较多的三家单位分别为{{ value.blgdqk7 }}公司。
        fourduidiezhutu.auto(:chartsOption="{className:'blgdbhfbqk',legendName:['服务申请','故障报修','投诉','其它'],tableName:'图9  八类工单在各单位的分布情况',isRow:true}")
        p 
          span.word_title_4 4．95598客户投诉情况专题分析
        p 
          span.word_content {{ value.khtsqk1 }}份，北京地区投诉工单共计{{ value.khtsqk2 }}件，同比{{ value.khtsqk3 }}。{{ value.khtsqk4 }}累计{{ value.khtsqk5 }}件，同比{{ value.khtsqk6 }}。各月变化情况见下图。
        binpaifuzhuline.auto(:chartsOption="{className:'tsgdydbh',legendName:['2018投诉工单数量','2019投诉工单数量'],tableName:'图10  投诉工单月度变化趋势',isRow:true}")
        p 
          span.word_lingt 从工单在各单位的分布情况来看，
          span.word_content 投诉工单数量较多的四家单位分别为{{ value.khtsqk7 }}公司。
        zhuzhaungtu.auto(:chartsOption="{className:'tsgdydbhdwfb',legendName:[''],tableName:'图11  投诉工单在各单位分布情况',isRow:true,company:'单位：件'}")
        p 
          span.word_title_4 5．95598客户意见情况专题分析
        p 
          span.word_content {{ value.khyjqk1 }}份，北京地区意见工单共计{{ value.khyjqk2 }}件，同比{{ value.khyjqk3 }}。{{ value.khyjqk4 }}累计{{ value.khyjqk5 }}万件，同比{{ value.khyjqk6 }}。各月变化情况见下图。
        binpaifuzhuline.auto(:chartsOption="{className:'yjgdydbh',legendName:['2018意见工单数量','2019意见工单数量'],tableName:'图12  意见工单月度变化趋势',isRow:true,danwei:'单位：万件'}")
        p 
          span.word_lingt 从工单在各单位的分布情况来看，
          span.word_content 意见工单数量较多的三家单位分别为{{ value.khyjqk7 }}公司。
        zhuzhaungtu.auto(:chartsOption="{className:'yjgdydbhqk',legendName:[''],tableName:'图13  意见工单在各单位分布情况',isRow:true,company:'单位：件'}")
        p 
          span.word_title_4 6．购电下发专题分析
        p 
          span.word_lingt （1）北京地区购电下发平均时长情况，
          span.word_content {{ value.gdxf2 }}份，公司购电下发平均时长{{ value.gdxf3 }}分钟，月变化趋势情况见下图。
        zhuzhaungtu.auto(:chartsOption="{className:'gdxfpj',legendName:[''],tableName:'图14  购电下发平均时长变化趋势',isRow:true,company:'单位：件'}")
        p 
          span.word_content 11月份购电记录共计{{ value.gdxf4 }}条，下发时长小于1分钟的记录{{ value.gdxf5 }}条，占比达到{{ value.gdxf6 }}%；超过5分钟的记录{{ value.gdxf7 }}条，占比{{ value.gdxf8 }}%。
        p 
          span.word_lingt （2）各单位购电下发平均时长情况，
          span.word_content {{ value.gdxf9 }}份平均时长较长的三家单位分别为{{ value.gdxf10 }}公司。
        zhuzhaungtu.auto(:chartsOption="{className:'pjungdxfpj',legendName:[''],tableName:'图15  各单位购电下发平均时长分布情况',isRow:true,company:'单位：分钟'}")
        p 
          span.word_lingt （3）4G和2G通信信道效	果对比情况，
          span.word_content {{ value.gdxf11 }}份全量购电下发数据共{{ value.gdxf12 }}条，其中，通信信道为4G的购电下发记录占比{{ value.gdxf13 }}%， 2G的购电下发记录占比{{ value.gdxf14 }}%。4G通道的系统自动执行率为{{ value.gdxf15 }}⁶，较2G通道的{{ value.gdxf16 }}%{{ value.gdxf17 }}个百分点，4G通道的效率略{{ value.gdxf18 }}2G通道。
        p 
          span.word_content 目前公司使用2G通道的集中器共{{ value.gdxf19 }}台，数量较多的单位为{{ value.gdxf20 }}公司，建议相关单位尽快安排升级。
        zhuzhaungtu.auto(:chartsOption="{className:'gdw2gfb',legendName:[''],tableName:'图16  各单位2G集中器分布情况',isRow:true,company:'单位：台'}")
        p 
          span.word_title_4 （4）各单位严重不合格集中器⁷数量及治理情况
        p 
          span.word_content {{ value.gdxf21 }}份，严重不合格集中器共{{ value.gdxf22 }}个，{{ value.gdxf23 }}严重不合格集中器为重复发生。数量最多的三家单位为{{ value.gdxf24 }}公司，相关单位应予以重视，优先安排尽快治理。
        p 
          span.word_content.tip ⁶购电下发执行方式为自动执行、且购电下发执行时间在5分钟以内（系统每隔5分钟自动刷新）的购电记录占本通道购电记录的比例。
          span.word_content.tip ⁷不合格记录定义为：下发时长超过5分钟的购电记录
          span.word_content.tip 严重不合格集中器定义为：不合格记录超过20次、且不合格率大于50%的集中器。
        duidiezhutu.auto(:chartsOption="{className:'wwczlbhg',legendName:['本周重复','本周新增'],tableName:'图17  未完成治理的严重不合格集中器在各单位的分布情况',isRow:true,company:'单位：台'}")
        p 
          span.word_lingt 【相关建议】
        p 
          span.word_content 1．国网一次办结工单的客户诉求热点问题中，通过指导合闸故障自行消除及欠费停电两类工单占本类工单比例达到{{ value.xgjy1 }}%，建议在安全用电宣传时，通过加大宣传力度，增加客户停电后自行恢复供电的简易方法指导，有效解决客户诉求热点问题。
        p 
          span.word_content 2．截至{{ value.xgjy2 }}份，有{{ value.xgjy3 }}台严重不合格集中器未完成治理，分布在{{ value.xgjy4 }}家单位，相关单位应该优先加快治理，确保集中器设备安全、稳定、高效运行，有效压减客户诉求工单数量。
        
        
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