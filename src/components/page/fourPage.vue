<template lang="pug">
  .two_main
    //- h3.word_title_1 第一部分 重点专题监测情况
    .message
      .title_1
        h4.word_title_2 三、线损率
        p 
          span.word_lingt 【监测周期】
          span.word_content 2019年11月18日0时—2019年11月24日24时
        p 
          span.word_lingt 【数据来源】
          span.word_content 主要来源于一体化电量与线损管理系统、电力用户用电信息采集系统和综合线损管理系统，涉及22个数据字段，获取本周明细数据9.68万条，其中统计线损来源于综合线损管理系统共19条，分区、10kV线路同期线损来源于一体化电量与线损管理系统共9875条，台区同期线损来源于电力用户用电信息采集系统共8.69条。
        p 
          span.word_lingt 【监测规则】
        p 
          span.word_content 1．同期线损率=（供电量-售电量）/供电量×100%，其中10kV线路同期线损率是由（所有线路总供电量-所有线路总售电量）/所有线路总供电量*100%计算得出，台区同期线损率是由（所有台区总供电量-所有台区总售电量）/所有台区总供电量*100%计算得出。
        p 
          span.word_content 2．数据质量核查规则：（1）台区同期线损率连续5个月为100%；（2）台区考核户大电量异常（供电侧）；（3）台区考核户大电量异常（售电侧）。
        p 
          span.word_lingt 【监测情况】

        h4.word_title_3 （一）同期线损率完成情况
        p 
          span.word_title_4 1、北京地区同期线损率完成情况
        p 
          span.word_content 11月第4周，北京地区同期线损率为6.51%，比上周上升了1.18个百分点，比10月统计线损率累计值5.42%高1.09个百分点。
        zhutuzhexianone.auto(:chartsOption="{className:'beijingdiquxiansun',isRow:false}")
        p 
          span.word_title_4 2、各单位同期线损率完成情况
        p 
          span.word_content 11月第4周，亦庄公司同期线损率较低（2.75%），怀柔公司同期线损率较高（12.36%），大兴、延庆、朝阳等公司同期线损率波动较大。
        binpaizhutu.auto(:chartsOption="{className:'xiansuanwancheng',isRow:false}")
        p 
          span.word_title_4 3、北京地区10kV线路同期线损率完成情况
        p 
          span.word_content 11月第4周，北京地区10kV线路共9909条，可计算线路9230条，可算率93.15%，同期线损率为3.09%，比上周下降了0.04个百分点。
        mijizhutu.auto(:chartsOption="{className:'dejindiqu10kv',isRow:true}")

        //- h4.word_title_3 （四）不可监测配变分析
        //- p 
        //-   span.word_title_4 1、各单位不可监测配变占比情况
        //- p 
        //-   span.word_content 11月21日-11月27日，公司不可监测配变有2272台。其中不可监测数占总量比较高的三家单位分别为延庆、石景山、密云公司。
        //- zhutuzhexianone.auto(:chartsOption="{className:'gedanweibukejiance',isRow:false}")
        //- p 
        //-   span.word_title_4 2、不可监测配变周变化情况
        //- p 
        //-   span.word_content 11月21日-11月27日，配变发生不可监测2272台,较上周2265台增加5台。其中，上周持续至本周仍不可监测2038台，本周新增234台（其中投运日期为2019年的有105台，2018年12台，2018年前的有117台）。不可监测配变数量较多的三家单位分别为延庆、朝阳、城区公司。
        //- binpaizhutu.auto(:chartsOption="{className:'bukejiancezhou',isRow:false}")
        //- p 
        //-   span.word_content 对本周新增234台配变进行分析，新纳入不可监测分析的配变有104台（主要原因为“台区与电能表关系缺失”有104台，占比69.23%）；本周前属于可监测配变，本周变为不可监测配变有130台（主要原因为“电能表缺失电压曲线数据”有72台，占比55.38%）。
        //- zhutufengcengfour.auto(:chartsOption="{className:'xinzengbuke',isRow:true}")
        //- p 
        //-   span.word_title_4 3、不可监测配变原因分析
        //- p 
        //-   span.word_content 对2272台不可监测配变进行原因分析，其中变压器与营销台区关系缺失的有183台，占比8.05%；台区与电能表关系缺失的有1459台，占比64.22%；台区与电能表存在1对多问题的有157台，占比6.91%；电能表缺失电压曲线数据的有473台，占比20.82%。
        //- bintu.auto(:chartsOption="{className:'bukejianceyuanyin'}")
        //- p 
        //-   span.word_content 按照投运日期分布看，2272台不可监测配变中投运日期为2019年的有1276台（主要原因为“台区与电能表关系缺失”，占比88.87%）；投运日期为2018年的有112台（主要原因为“台区与电能表关系缺失”，占比51.79%）；2018年之前投运的有884台（主要原因为“电能表缺失电压曲线数据”，占比43.78%），具体情况见下图。
        //- zhutufengcengfour.auto(:chartsOption="{className:'bukejiancefenxi',isRow:true}")
        //- p 
        //-   span.word_title_4 4、新投运配变实现可监测时长分析
        //- p 
        //-   span.word_content 2019年1月1日至11月27日，公司新投运配变4448台，有1276台配变还未实现监测，已实现监测的配变3172台，平均用时48.82天，其中PMS侧维护平均用时4.70天，营销侧维护平均用时44.12天。仍不可监测的1276台，PMS2.0侧维护平均用时6.23天，营销系统侧维护平均已用时62.16天。
        //- p 
        //-   span.word_content 已实现监测的配变3172台配变中，投运当天及投运前完成维护实现可监测配变有563台，投运7天内完成维护实现可监测配变有701台，投运8-15天完成维护实现可监测配变有258台，投运15天以上完成维护实现可监测配变有1650台。
        //- bintu.auto(:chartsOption="{className:'xintouyunfenxi'}")

        //- h4.word_title_3 （五）配变发生重过载情况监测
        //- p 
        //-   span.word_title_4 1、各单位配变重过载占比情况
        //- p 
        //-   span.word_content 11月21日-11月27日，公司配变发生重过载214台。重过载率0.25%，较上周下降0个百分点。
        //- zhutuzhexian.auto(:className="'gongsipeidianqishi'" :isRow="true")
        //- p 
        //-   span.word_content 从单位分布上看，重过载数占总量比较高的三家单位分别为大兴、怀柔、门头沟公司。
        //- zhutuzhexianone.auto(:chartsOption="{className:'gedanweizhongzai'}")
        //- p 
        //-   span.word_title_4 2、配变重过载周趋势
        //- p 
        //-   span.word_content 11月21日-11月27日,公司发生重过载配变214台，较上周减少2台。其中重载⁶有105台(占比49.07%)，较上周增加4台；过载⁷有109台（占比50.93%），较上周减少6台。
        //- p 
        //-   span.word_content.tip ⁶配变重载：配变负载处于80%-100%区间;
        //-   span.word_content.tip ⁷配变过载：配变负载大于100%。
        //- duidiezhutu.auto(:chartsOption="{className:'zhongzaipeibian',isRow:true}")
        //- p 
        //-   span.word_title_4 3、各单位配变重过载分布情况
        //- p 
        //-   span.word_content 11月21日-11月27日，公司发生重过载共214台，其中重过载配变较多的三家单位分别为大兴、怀柔、密云公司。
        //- duidiezhutu.auto(:chartsOption="{className:'zhongzaipeibianguozai',isRow:false}")

        //- h4.word_title_3 （六）配变发生三相不平衡情况监测
        //- p 
        //-   span.word_title_4 1、各单位配变三相不平衡占比情况
        //- p 
        //-   span.word_content 11月21日-11月27日，公司配变发生三相不平衡有1125台。三相不平衡率1.30%，较上周上升0.45个百分点。
        //- zhutuzhexian.auto(:className="'sanxiangbupinghen'" :isRow="true")
        //- p 
        //-   span.word_content 11月21日-11月27日，公司配变发生三相不平衡有1125台。三相不平衡率1.30%，较上周上升0.45个百分点。
        //- zhutuzhexian.auto(:className="'sanxiangbupinghenzhanbi'" :isRow="true")
        //- p 
        //-   span.word_title_4 2、配变三相不平衡周趋势
        //- p 
        //-   span.word_content 11月21日-11月27日,公司发生三相不平衡配变1125台，较上周数量增加491台。
        //- zhutuzhexian.auto(:className="'sanxiangbupinghenqushi'" :isRow="true")
        //- p 
        //-   span.word_title_4 3、各单位配变三相不平衡分布情况
        //- p 
        //-   span.word_content 11月21日-11月27日，公司发生三相不平衡共1125台，其中三相不平衡配变较多的三家单位分别为顺义、通州、朝阳公司。
        //- zhutuzhexian.auto(:className="'sanxiangbupinghenfenbu'" :isRow="true")
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