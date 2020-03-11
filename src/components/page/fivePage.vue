<template lang="pug">
  .two_main
    //- h3.word_title_1 
    .message
      .title_1
        h4.word_title_2 四、客户服务满意率
        p 
          span.word_lingt 【监测周期】
          span.word_content {{ value.jczq1 }}—{{ value.jczq2 }}
        p 
          span.word_lingt 【监测概要】
          span.word_content 通过从95598业务支持系统、PMS2.0、用电信息采集系统获取明细数据，从95598话务量、国网一次办结工单、下派公司处理的八类工单、购电下发时长等方面开展监测分析工作，全面反映北京地区95598话务量变化趋势、聚焦客户诉求热点问题及管理短板。
        p 
          span.word_lingt 【监测分析情况】
        p 
          span.word_title_4 1、95598话务情况
        p 
          span.word_content 截至{{ value.hwqk1 }}，北京地区95598电话呼入量累计{{ value.hwqk2 }}通，同比下降{{ value.hwqk3 }}；本周{{ value.hwqk4 }}通，环比{{ value.hwqk5 }}；IVR自助语音服务量、国网客服中心一次办结工单量、八类工单均呈{{ value.hwqk6 }}趋势，主要由于寒冷天气，致使电网负荷有所{{ value.hwqk7 }}。
        p 
          span.word_content 95598话务量总体情况见下图。
        Huawuliang(v-model="tbData.tb1.tree")
        p 
          span.word_content 95598电话呼入量及最大负荷周趋势变化情况见下图。
        danweizhutuzhexian.auto(v-model="tbData.tb2" :chartsOption="{className:'beijing95598',isRow:true,tableName: '图2  北京地区95598电话呼入量变化趋势',legendName: ['最大负荷','电话呼入量']}")
        p 
          span.word_content 95598电话呼入量、IVR自助语音服务量、国网一次办结工单数量、八类工单关联关系见下图。
        threezhutuzhexian.auto(v-model="tbData.tb3" :chartsOption="{className:'hualaingguanlian',isRow:true, tableName: '图3  北京地区95598话务量关联关系',legendName: ['IVR自助语音','一次性办结','八类工单量','电话呼入量']}")
        p 
          span.word_title_4 2、国网客服中心一次办结工单情况
        p 
          span.word_content 截至{{ value.gwkfbjgd1 }}，北京地区国网客服中心一次办结工单累计{{ value.gwkfbjgd2 }}件，同比{{ value.gwkfbjgd3 }}；本周{{ value.gwkfbjgd4 }}件，环比{{ value.gwkfbjgd5 }}，主要由于客户误报工单增加较少。周变化情况如下图。
        zhuzhaungtu.auto(v-model="tbData.tb4" :chartsOption="{className:'kefuzhongxinqushi',isRow:true,tableName: '图4 国网客服中心一次办结工单变化趋势',legendName: '',company:'单位:万件'}")
        p 
          span.word_lingt （1）从工单类别及客户诉求热点来看
          span.word_content ，故障报修{{ value.gwkfbjgd6 }}件、咨询{{ value.gwkfbjgd7 }}件。客户诉求热点主要集中在：客户误报、电费抄核收及电量电费查询⁹、基本档案信息三个方面。
        p 
          //- 缺少
          span.word_lingt 1）客户误报分类中
          span.word_content ，客户诉求内容集中在：欠费停电、指导客户故障自行消除、停限电。
        p 
          span.word_lingt 2）基本档案信息分类中
          span.word_content ，客服诉求内容集中在：咨询客户编号、咨询供电/用电业务等。
        p 
          span.word_content.tip ⁹咨询电价政策、抄表周期、抄表例日、缴费方式、电费发票、电量电费退补方式流程、充值卡购买、电费账单、欠费停复电以及查询电量电费、电费余额查询等。
        .result  
        //-关联饼图
        .guanlain_chart
          guanlianbintu(class="tubiao_list" v-model="tbData.tb5.tree")
          span(v-for="item in 8" :key="item")
        p(style="text-align:center") 图5  国网一次办结工单类别及客户诉求热点情况
        p 
          span.word_lingt （2）从工单在各单位的分布情况来看
          span.word_content ，工单较多的三家单位分别为{{ value.gwkfbjgd11 }}公司。
        duidiezhutu.auto(v-model="tbData.tb6" :chartsOption="{className:'gongdanfenbu',isRow:false,tableName: '图6  国网一次办结工单在各单位的分布情况',legendName: ['故障报修','咨询'],company:'单位:件'}")
        p 
          span.word_title_4 3、八类工单情况
        p 
          span.word_content 截至{{ value.blgdqk1 }}，国网客服中心下派北京公司处理的八类工单累计{{ value.blgdqk2 }}件，同比{{ value.blgdqk3 }}；本周{{ value.blgdqk4 }}件，环比{{ value.blgdqk5 }}%，主要由于用电服务需求等使用问题工单增加较多。
        zhuzhaungtu.auto(v-model="tbData.tb7" :chartsOption="{className:'baleigongdanbianhua',isRow:true,tableName: '图7 八类工单变化趋势',legendName: '',company:'单位:万件'}")
        p 
          span.word_lingt （1）从工单类别及客户诉求热点来看
          span.word_content ，{{ value.blgdqk6.join("、") }}工单数量占比较大，{{ value.blgdqk7.join("、") }}等其它六类工单占比较小。客户诉求热点主要集中：{{ value.blgdqk8.join("、") }}四个方面。
        p 
          span.word_lingt 1）服务申请工单中
          span.word_content ，客户诉求主要集中在：{{ value.blgdqk9.join("、") }}。
        p 
          span.word_lingt 2）故障报修工单中
          span.word_content ，客户诉求主要集中在：{{ value.blgdqk10.join("、") }}。
        //-关联饼图
        .guanlain_chart2
          guanlianbintu(class="tubiao_list" v-model="tbData.tb8.tree")
          span(v-for="item in 4" :key="item")
        p(style="text-align:center") 图8  八类工单类别及客户诉求热点情况
        p 
          span.word_lingt （2）从工单在各单位的分布情况来看
          span.word_content ，工单较多的三家单位分别为{{ value.blgdqk11 }}公司。
        fourduidiezhutu.auto(v-model="tbData.tb9" :chartsOption="{className:'baleigogndandanwei',isRow:false,tableName: '图9  八类工单在各单位的分布情况',legendName: ['服务申请','故障报修','投诉','其它'],company:'单位:件'}")
        p 
          span.word_title_4 4、95598客户投诉情况专题分析
        p 
          span.word_content 截至{{ value.khtsqkfx1 }}，北京地区投诉工单累计{{ value.khtsqkfx2 }}件，同比{{ value.khtsqkfx3 }}；本周{{ value.khtsqkfx4 }}件，环比{{ value.khtsqkfx5 }}。
        p 
          span.word_lingt （1）投诉工单变化趋势。
        zhuzhaungtu.auto(v-model="tbData.tb10" :chartsOption="{className:'tousugongdanbianhua',isRow:true,tableName: '图10  投诉工单变化趋势',legendName: '',company:'单位:件'}")
        p 
          span.word_lingt （2）从工单在各单位的分布情况来看
          span.word_content ，投诉工单数量最多为{{ value.khtsqkfx6 }}公司共{{ value.khtsqkfx7 }}件，其次{{ value.khtsqkfx8 }}等公司各为{{ value.khtsqkfx9 }}件。
        zhuzhaungtu.auto(v-model="tbData.tb11" :chartsOption="{className:'tousuzaigedanwei',isRow:false,tableName: '图11  投诉工单在各单位分布情况',legendName: '',company:'单位:件'}")
        p 
          span.word_title_4 5、95598客户意见情况专题分析
        p 
          span.word_content 截至{{ value.khyjqkfx1 }}，北京地区意见工单累计{{ value.khyjqkfx2 }}件，同比{{ value.khyjqkfx3 }}；本周{{ value.khyjqkfx4 }}件，环比{{ value.khyjqkfx5 }}。
        p 
          span.word_lingt （1）意见工单变化趋势。
        zhuzhaungtu.auto(v-model="tbData.tb12" :chartsOption="{className:'yijiangongdan',isRow:true,tableName: '图12  意见工单变化趋势',legendName: '',company:'单位:件'}")
        p 
          span.word_lingt （2）从工单在各单位的分布情况来看
          span.word_content ，见工单数量较多的三家单位分别为{{ value.khyjqkfx6 }}。
        zhuzhaungtu.auto(v-model="tbData.tb13" :chartsOption="{className:'yijiangedanweifenbu',isRow:false,tableName: '图13  意见工单在各单位分布情况',legendName: '',company:'单位:件'}")
        p 
          span.word_title_4 6、购电下发专题分析
        p 
          //- 缺少
          span.word_content 北京地区客户电话反映购电未及时下发工单{{ value.gdxf1 }}件，占服务申请工单的21.24%，周变化情况见下图。
        zhuzhaungtu.auto(v-model="tbData.tb14" :chartsOption="{className:'goudianweijishi',isRow:true,tableName: '图14  客户反映购电未及时下发数量变化趋势',legendName: '',company:'单位:件'}")
        p 
          span.word_lingt （1）北京地区购电下发平均时长情况
          span.word_content ，本周，公司购电下发平均时长{{ value.gdxf3 }}分钟，周变化趋势情况见下图。
        zhuzhaungtu.auto(v-model="tbData.tb15" :chartsOption="{className:'goudianxiafapingjun',isRow:true,tableName: '图15  购电下发平均时长变化趋势',legendName: '',company:'单位:分钟'}")
        p 
          span.word_content 本周购电记录共计{{ value.gdxf4 }}条，下发时长小于1分钟的记录{{ value.gdxf5 }}条，占比{{ value.gdxf6 }}；超过5分钟的记录{{ value.gdxf7 }}条，占比{{ value.gdxf8 }}。
        p 
          span.word_lingt （2）各单位购电下发平均时长情况
          span.word_content ，本周，平均时长较长的三家单位分别为{{ value.gdxf9 }}公司。
        zhuzhaungtu.auto(v-model="tbData.tb16" :chartsOption="{className:'gedanweigoudain',isRow:false,tableName: '图18  各单位购电下发平均时长分布情况',legendName: '',company:'单位:分钟'}")
        p 
          span.word_lingt （3）4G和2G通信信道效果对比情况
          span.word_content ，本周，全量购电下发数据共{{ value.gdxf10 }}万条，通信信道为4G的购电下发记录{{  value.gdxf11 }}条，占购电记录{{ value.gdxf12 }}；通信信道为2G的有{{ value.gdxf13 }}条，占购电记录{{ value.gdxf14 }}。2G通道中，系统自动执行执行率为{{ value.gdxf15 }}，较4G通道的{{ value.gdxf16 }}{{ value.gdxf17 }}，4G通道的效率略{{ value.gdxf18 }}2G通道。
        danzhuzhexian.auto(v-model="tbData.tb17" :chartsOption="{className:'butongtongxinxindao',isRow:true,tableName: '图16  不同通信信道购电下发占比情况',legendName: ['购电下发数量','系统自动执行率'],company:'单位:万条'}")
        p 
          span.word_content 涉及2G通道的集中器共{{ value.gdxf19 }}台，其中{{ value.gdxf20 }}排在前三位，请相关单位尽快安排更换。2G集中器分布情况如下图所示。
        p 
          span.word_content.tip ¹⁰购电下发执行方式为自动执行、且购电下发执行时间在5分钟以内（系统每隔5分钟自动刷新）的购电记录占本通道购电记录的比例。
        zhuzhaungtu.auto(v-model="tbData.tb18" :chartsOption="{className:'gedanwei2Gjizhong',isRow:false,tableName: '图17  各单位2G集中器分布情况',legendName: '',company:'单位:台'}")
        p 
          span.word_title_4 （4）各单位严重不合格集中器¹¹数量及治理情况
        p 
          span.word_content 本周，没有出现严重不合格集中器，其中： 没有严重不合格集中器为重复发生（截至2019年10月至少发生过一次）。请各个单位继续保持。
        //- 客户服务煤改电
        div(v-if="value.mgdkhfw")
          h4.word_title_2 五、煤改电专题监测分析
          h4.word_title_3 （一）煤改电用户拨打95598热线情况
          p 
            span.word_content 截至12月12日0时，本周煤改电用户拨打95598热线{{ value.mgdkhfw1 }}通。
          zhuzhaungtu.auto(v-model="tbData.tb20" :chartsOption="{className:'kefuzhongxinqushimeigaid',isRow:true,tableName: '图20  采暖季煤改电用户95598工单变化趋势',legendName: '',company:'单位:件'}")
        p 
          span.word_lingt 【相关建议】
        p 
          span.word_content 1．本周，北京地区95598电话呼入量{{ value.gdxf22 }}通，环比{{ value.gdxf23 }}。下派北京公司处理的八类工单中，服务申请工单数量环比{{ value.gdxf24 }}，需要相关部门和各单位高度关注。
        p 
          span.word_content 2．客户诉求热点问题中，通过指导合闸故障自行消除及欠费停电两类工单占国网一次办结工单的{{ value.gdxf25 }}，建议在安全用电宣传时，通过加大宣传力度，增加客户停电后自行恢复供电的简易方法指导，有效解决客户诉求热点问题。
        p 
          span.word_content 3．截至本周，没有严重不合格集中器未完成治理，相关单位应该继续保持，确保集中器设备安全、稳定、高效运行，有效提高客户诉求质量。
        p 
          span.word_content.tip ¹¹不合格记录定义为：下发时长超过1分钟的购电记录 
          span.word_content.tip 严重不合格集中器定义为：不合格记录超过20次、且不合格率大于50%的集中器。
</template>
<script>
export default {
  props:["value","tbData"],
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
  .guanlain_chart{
    position: relative;
    transform: rotate(-90deg);
    span{
      width: 100px;
      height: 1px;
      background: #000;
      position: absolute;
      opacity: 0.5;
      transform-origin: top left;
      &:nth-of-type(1){
        width: 290px;
        left: 117px;
        top: 338px;
        transform: rotate(-59deg);
      }
      &:nth-of-type(2){
        width: 300px;
        left: 368px;
        top: 91px;
        transform: rotate(56deg);
      }
       &:nth-of-type(3){
        width: 264px;
        left: 546px;
        top: 631px;
        transform: rotate(-90deg);
      }
      &:nth-of-type(4){
        width: 264px;
        left: 106px;
        top: 370px;
        transform: rotate(90deg);
      }
      &:nth-of-type(5){
        width: 264px;
        left: 229px;
        top: 370px;
        transform: rotate(90deg);
      }
      &:nth-of-type(6){
        width: 264px;
        left: 422px;
        top: 370px;
        transform: rotate(90deg);
      }
      &:nth-of-type(7){
        width: 214px;
        left: 317px;
        top: 186px;
        transform: rotate(61deg);
      }
      &:nth-of-type(8){
        width: 207px;
        left: 317px;
        top: 186px;
        transform: rotate(115deg);
      }
    }

  }
  .guanlain_chart2{
    position: relative;
    transform: rotate(-90deg);
    span{
      width: 100px;
      height: 1px;
      background: #000;
      position: absolute;
      opacity: 0.5;
      transform-origin: top left;
      &:nth-of-type(1){
        width: 290px;
        left: 117px;
        top: 338px;
        transform: rotate(-59deg);
      }
      &:nth-of-type(2){
        width: 300px;
        left: 368px;
        top: 91px;
        transform: rotate(56deg);
      }
       &:nth-of-type(3){
        width: 225px;
        left: 322px;
        top: 186px;
        transform: rotate(63deg);
      }
      &:nth-of-type(4){
        width: 241px;
        left: 322px;
        top: 186px;
        transform: rotate(115deg);
      }
    }
  }
  .tubiao_list{
    // position: relative;
    // height: 300px;
    // display: flex;
    // align-items: center;
    // display: flex;
    :first-child{
      margin: 0 auto;
     
    }
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