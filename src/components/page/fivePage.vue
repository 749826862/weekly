<template lang="pug">
  .two_main
    //- h3.word_title_1 
    .message
      .title_1
        h4.word_title_2 四、客户服务满意率
        p 
          span.word_lingt 【监测周期】
          span.word_content 2019年21月14日0时—11月28日0时
        p 
          span.word_lingt 【监测概要】
          span.word_content 通过从95598业务支持系统、PMS2.0、用电信息采集系统获取明细数据，从95598话务量、国网一次办结工单、下派公司处理的八类工单、购电下发时长等方面开展监测分析工作，全面反映北京地区95598话务量变化趋势、聚焦客户诉求热点问题及管理短板。
        p 
          span.word_lingt 【监测分析情况】
        p 
          span.word_title_4 1、95598话务情况
        p 
          span.word_content 截至11月28日0时，北京地区95598电话呼入量累计429.38万通，同比下降20.26%；本周9.56万通，环比下降5.33%；IVR自助语音服务量、国网客服中心一次办结工单量、八类工单均呈上升趋势，主要由于寒冷天气，致使电网负荷有所上升。
        p 
          span.word_content 95598话务量总体情况见下图。
        p 
          span.word_content 95598电话呼入量及最大负荷周趋势变化情况见下图。
        binpaizhutu.auto(:chartsOption="{className:'beijing95598',isRow:false}")
        p 
          span.word_content 95598电话呼入量、IVR自助语音服务量、国网一次办结工单数量、八类工单关联关系见下图。
        binpaizhutu.auto(:chartsOption="{className:'hualaingguanlian',isRow:false}")
        p 
          span.word_title_4 2、国网客服中心一次办结工单情况
        p 
          span.word_content 截至11月28日0时，北京地区国网客服中心一次办结工单累计217.22万件，同比下降16.43%；本周4.15万件，环比下降8.07%，主要由于客户误报工单增加较少。周变化情况如下图。
        binpaizhutu.auto(:chartsOption="{className:'kefuzhongxinqushi',isRow:false}")
        p 
          span.word_lingt （1）从工单类别及客户诉求热点来看
          span.word_content ，故障报修1.68万件、咨询2.47万件。客户诉求热点主要集中在：客户误报、电费抄核收及电量电费查询⁹、基本档案信息三个方面。
        p 
          span.word_lingt 1）客户误报分类中
          span.word_content ，客户诉求内容集中在：欠费停电、指导客户故障自行消除、停限电。
        p 
          span.word_lingt 2）基本档案信息分类中
          span.word_content ，客服诉求内容集中在：咨询客户编号、咨询供电/用电业务等。
        p 
          span.word_content.tip ⁹咨询电价政策、抄表周期、抄表例日、缴费方式、电费发票、电量电费退补方式流程、充值卡购买、电费账单、欠费停复电以及查询电量电费、电费余额查询等。
        p 
          span.word_lingt （2）从工单在各单位的分布情况来看
          span.word_content ，工单较多的三家单位分别为朝阳、昌平、城区公司。
        binpaizhutu.auto(:chartsOption="{className:'gongdanfenbu',isRow:false}")
        p 
          span.word_title_4 3、八类工单情况
        p 
          span.word_content 截至11月28日0时，国网客服中心下派北京公司处理的八类工单累计59.31万件，同比下降3.89%；本周1.35万件，环比下降5.28%，主要由于用电服务需求等使用问题工单增加较多。
        binpaizhutu.auto(:chartsOption="{className:'baleigongdanbianhua',isRow:false}")
        p 
          span.word_lingt （1）从工单类别及客户诉求热点来看
          span.word_content ，服务申请、故障报修工单数量占比较大，意见、投诉等其它六类工单占比较小。客户诉求热点主要集中：掌上电力APP等使用问题、电能表显示异常、一户无电、应急送电需求四个方面。
        p 
          span.word_lingt 1）服务申请工单中
          span.word_content ，客户诉求主要集中在：掌上电力APP等使用问题、电能表显示异常、用电服务需求。
        p 
          span.word_lingt 2）故障报修工单中
          span.word_content ，客户诉求主要集中在：一户无电、计量设备故障、多户无电等方面。
        p 
          span.word_lingt （2）从工单在各单位的分布情况来看
          span.word_content ，工单较多的三家单位分别为城区、朝阳、丰台公司。
        binpaizhutu.auto(:chartsOption="{className:'baleigogndandanwei',isRow:false}")
        p 
          span.word_title_4 4、95598客户投诉情况专题分析
        p 
          span.word_content 截至11月28日0时，北京地区投诉工单累计929件，同比下降64.50%；本周7件，环比下降50.00%。
        p 
          span.word_lingt （1）投诉工单变化趋势。
        binpaizhutu.auto(:chartsOption="{className:'tousugongdanbianhua',isRow:false}")
        p 
          span.word_lingt （2）从工单在各单位的分布情况来看
          span.word_content ，投诉工单数量最多为朝阳公司共2件，其次通州、丰台、房山、海淀、密云等公司各为1件。
        binpaizhutu.auto(:chartsOption="{className:'tousuzaigedanwei',isRow:false}")
        p 
          span.word_title_4 5、95598客户意见情况专题分析
        p 
          span.word_content 截至11月28日0时，北京地区意见工单累计3.38万件，同比上升23.12%；本周691件，环比下降6.24%。
        p 
          span.word_lingt （1）意见工单变化趋势。
        binpaizhutu.auto(:chartsOption="{className:'yijiangongdan',isRow:false}")
        p 
          span.word_lingt （2）从工单在各单位的分布情况来看
          span.word_content ，见工单数量较多的三家单位分别为朝阳、房山、城区。
        binpaizhutu.auto(:chartsOption="{className:'yijiangedanweifenbu',isRow:false}")
        p 
          span.word_title_4 6、购电下发专题分析
        p 
          span.word_content 北京地区客户电话反映购电未及时下发工单1893件，占服务申请工单的21.24%，周变化情况见下图。
        binpaizhutu.auto(:chartsOption="{className:'goudianweijishi',isRow:false}")
        p 
          span.word_lingt （1）北京地区购电下发平均时长情况
          span.word_content ，本周，公司购电下发平均时长6.36分钟，周变化趋势情况见下图。
        binpaizhutu.auto(:chartsOption="{className:'goudianxiafapingjun',isRow:false}")
        p 
          span.word_content 本周购电记录共计94.03万条，下发时长小于1分钟的记录83.24万条，占比88.53%；超过5分钟的记录4.61万条，占比4.91%。
        p 
          span.word_lingt （2）各单位购电下发平均时长情况
          span.word_content ，本周，平均时长较长的三家单位分别为城区、朝阳、通州公司。
        binpaizhutu.auto(:chartsOption="{className:'gedanweigoudain',isRow:false}")
        p 
          span.word_lingt （3）4G和2G通信信道效果对比情况
          span.word_content ，本周，全量购电下发数据共84.66万条，通信信道为4G的购电下发记录83.73万条，占购电记录89.04%；通信信道为2G的有9145条，占购电记录0.97%。2G通道中，系统自动执行执行率为97.99%，较4G通道的98.01%下降0.02，4G通道的效率略高于2G通道。
        binpaizhutu.auto(:chartsOption="{className:'butongtongxinxindao',isRow:false}")
        p 
          span.word_content 涉及2G通道的集中器共1388台，其中房山、朝阳、丰台排在前三位，请相关单位尽快安排更换。2G集中器分布情况如下图所示。
        p 
          span.word_content.tip ¹⁰购电下发执行方式为自动执行、且购电下发执行时间在5分钟以内（系统每隔5分钟自动刷新）的购电记录占本通道购电记录的比例。
        binpaizhutu.auto(:chartsOption="{className:'gedanwei2Gjizhong',isRow:false}")
        p 
          span.word_title_4 （4）各单位严重不合格集中器¹¹数量及治理情况
        p 
          span.word_content 本周，没有出现严重不合格集中器，其中： 没有严重不合格集中器为重复发生（截至2019年10月至少发生过一次）。请各个单位继续保持。
        p 
          span.word_lingt 【相关建议】
        p 
          span.word_content 1．本周，北京地区95598电话呼入量9.56万通，环比下降5.33%。下派北京公司处理的八类工单中，服务申请工单数量环比下降3.76%，需要相关部门和各单位高度关注。
        p 
          span.word_content 2．客户诉求热点问题中，通过指导合闸故障自行消除及欠费停电两类工单占国网一次办结工单的23.47%，建议在安全用电宣传时，通过加大宣传力度，增加客户停电后自行恢复供电的简易方法指导，有效解决客户诉求热点问题。
        p 
          span.word_content 3．截至本周，没有严重不合格集中器未完成治理，相关单位应该继续保持，确保集中器设备安全、稳定、高效运行，有效提高客户诉求质量。
        p 
          span.word_content.tip ¹¹不合格记录定义为：下发时长超过1分钟的购电记录 
          span.word_content.tip 严重不合格集中器定义为：不合格记录超过20次、且不合格率大于50%的集中器。
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
        line-height: 20px;
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