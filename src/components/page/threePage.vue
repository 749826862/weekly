<template lang="pug">
  .two_main
    //- h3.word_title_1 第一部分 重点专题监测情况
    .message
      .title_1
        h4.word_title_3 （二）配变发生低电压监测
        p 
          span.word_title_4 1、各单位配变低电压占比情况
        p 
          span.word_content 11月21日-11月27日，公司配变发生低电压有72台。其中低电压异常数占总量比较高的三家单位分别为门头沟、延庆、密云公司。
        zhutuzhexianone.auto(:chartsOption="{className:'gedanweipeibian',isRow:false}")
        p 
          span.word_title_4 2、各单位配变低电压情况
        p 
          span.word_content 11月21日-11月27日，配变发生低电压72台，较上周123台数量减少51台。从单位构成上看，发生低电压配变数量较多三家单位分别为门头沟、大兴、密云公司。
        binpaizhutu.auto(:chartsOption="{className:'gedanweiyichang',isRow:false}")
        p 
          span.word_title_4 3、配变低电压持续时长、重复发生分析
        p 
          span.word_content 通过对72台配变低电压持续时长和重复发生情况分析，问题较为严重的配变有4台，较上周10台减少6台。2台为低电压持续时长超过10小时且重复发生，2台为低电压持续时长超过10小时。
        zhutuzhesanjiao.auto(:chartsOption="{className:'gedanweiyanzhong',isRow:false}")

        h4.word_title_3 （三）配变发生过电压监测
        p 
          span.word_title_4 1、各单位配变过电压占比情况
        p 
          span.word_content 11月21日-11月27日，公司发生配变过电压有358台。其中过电压异常数占总量比较高的三家单位分别为大兴、密云、通州公司。
        zhutuzhexianone.auto(:chartsOption="{className:'gedanweipeidianya',isRow:false}")
        p 
          span.word_title_4 2、各单位配变过电压情况
        p 
          span.word_content 11月21日-11月27日，配变发生过电压异常358台，较上周336台增加22台。从单位构成上看，过电压异常配变数量相对较多的三家单位分别为大兴、朝阳、通州公司。
        binpaizhutu.auto(:chartsOption="{className:'peidianyicahng',isRow:false}")
        p 
          span.word_title_4 3、配变过电压时长分析
        p 
          span.word_content 11月21日-11月27日，配变发生过电压异常358台。对358台过电压异常发生总时长进行分析，处于1～50小时的有269台，占比75.14%；另超过50小时的长时过电压配变有89台，占比24.86%。其中，7*24小时不间断发生过电压的有20台配变，问题最严重。
        mijizhutu.auto(:chartsOption="{className:'peidianshichang',isRow:true}")

        h4.word_title_3 （四）不可监测配变分析
        p 
          span.word_title_4 1、各单位不可监测配变占比情况
        p 
          span.word_content 11月21日-11月27日，公司不可监测配变有2272台。其中不可监测数占总量比较高的三家单位分别为延庆、石景山、密云公司。
        zhutuzhexianone.auto(:chartsOption="{className:'gedanweibukejiance',isRow:false}")
        p 
          span.word_title_4 2、不可监测配变周变化情况
        p 
          span.word_content 11月21日-11月27日，配变发生不可监测2272台,较上周2265台增加5台。其中，上周持续至本周仍不可监测2038台，本周新增234台（其中投运日期为2019年的有105台，2018年12台，2018年前的有117台）。不可监测配变数量较多的三家单位分别为延庆、朝阳、城区公司。
        binpaizhutu.auto(:chartsOption="{className:'bukejiancezhou',isRow:false}")
        p 
          span.word_content 对本周新增234台配变进行分析，新纳入不可监测分析的配变有104台（主要原因为“台区与电能表关系缺失”有104台，占比69.23%）；本周前属于可监测配变，本周变为不可监测配变有130台（主要原因为“电能表缺失电压曲线数据”有72台，占比55.38%）。
        zhutufengcengfour.auto(:chartsOption="{className:'xinzengbuke',isRow:true}")
        p 
          span.word_title_4 3、不可监测配变原因分析
        p 
          span.word_content 对2272台不可监测配变进行原因分析，其中变压器与营销台区关系缺失的有183台，占比8.05%；台区与电能表关系缺失的有1459台，占比64.22%；台区与电能表存在1对多问题的有157台，占比6.91%；电能表缺失电压曲线数据的有473台，占比20.82%。
        bintu.auto(:chartsOption="{className:'bukejianceyuanyin'}")
        p 
          span.word_content 按照投运日期分布看，2272台不可监测配变中投运日期为2019年的有1276台（主要原因为“台区与电能表关系缺失”，占比88.87%）；投运日期为2018年的有112台（主要原因为“台区与电能表关系缺失”，占比51.79%）；2018年之前投运的有884台（主要原因为“电能表缺失电压曲线数据”，占比43.78%），具体情况见下图。
        zhutufengcengfour.auto(:chartsOption="{className:'bukejiancefenxi',isRow:true}")
        p 
          span.word_title_4 4、新投运配变实现可监测时长分析
        p 
          span.word_content 2019年1月1日至11月27日，公司新投运配变4448台，有1276台配变还未实现监测，已实现监测的配变3172台，平均用时48.82天，其中PMS侧维护平均用时4.70天，营销侧维护平均用时44.12天。仍不可监测的1276台，PMS2.0侧维护平均用时6.23天，营销系统侧维护平均已用时62.16天。
        p 
          span.word_content 已实现监测的配变3172台配变中，投运当天及投运前完成维护实现可监测配变有563台，投运7天内完成维护实现可监测配变有701台，投运8-15天完成维护实现可监测配变有258台，投运15天以上完成维护实现可监测配变有1650台。
        bintu.auto(:chartsOption="{className:'xintouyunfenxi'}")

        h4.word_title_3 （五）配变发生重过载情况监测
        p 
          span.word_title_4 1、各单位配变重过载占比情况
        p 
          span.word_content 11月21日-11月27日，公司配变发生重过载214台。重过载率0.25%，较上周下降0个百分点。
        zhutuzhexian.auto(:className="'gongsipeidianqishi'" :isRow="true")
        p 
          span.word_content 从单位分布上看，重过载数占总量比较高的三家单位分别为大兴、怀柔、门头沟公司。
        zhutuzhexianone.auto(:chartsOption="{className:'gedanweizhongzai'}")
        p 
          span.word_title_4 2、配变重过载周趋势
        p 
          span.word_content 11月21日-11月27日,公司发生重过载配变214台，较上周减少2台。其中重载⁶有105台(占比49.07%)，较上周增加4台；过载⁷有109台（占比50.93%），较上周减少6台。
        p 
          span.word_content.tip ⁶配变重载：配变负载处于80%-100%区间;
          span.word_content.tip ⁷配变过载：配变负载大于100%。
        duidiezhutu.auto(:chartsOption="{className:'zhongzaipeibian',isRow:true}")
        p 
          span.word_title_4 3、各单位配变重过载分布情况
        p 
          span.word_content 11月21日-11月27日，公司发生重过载共214台，其中重过载配变较多的三家单位分别为大兴、怀柔、密云公司。
        duidiezhutu.auto(:chartsOption="{className:'zhongzaipeibianguozai',isRow:false}")

        h4.word_title_3 （六）配变发生三相不平衡情况监测
        p 
          span.word_title_4 1、各单位配变三相不平衡占比情况
        p 
          span.word_content 11月21日-11月27日，公司配变发生三相不平衡有1125台。三相不平衡率1.30%，较上周上升0.45个百分点。
        zhutuzhexian.auto(:className="'sanxiangbupinghen'" :isRow="true")
        p 
          span.word_content 11月21日-11月27日，公司配变发生三相不平衡有1125台。三相不平衡率1.30%，较上周上升0.45个百分点。
        zhutuzhexian.auto(:className="'sanxiangbupinghenzhanbi'" :isRow="true")
        p 
          span.word_title_4 2、配变三相不平衡周趋势
        p 
          span.word_content 11月21日-11月27日,公司发生三相不平衡配变1125台，较上周数量增加491台。
        zhutuzhexian.auto(:className="'sanxiangbupinghenqushi'" :isRow="true")
        p 
          span.word_title_4 3、各单位配变三相不平衡分布情况
        p 
          span.word_content 11月21日-11月27日，公司发生三相不平衡共1125台，其中三相不平衡配变较多的三家单位分别为顺义、通州、朝阳公司。
        zhutuzhexian.auto(:className="'sanxiangbupinghenfenbu'" :isRow="true")

        h4.word_title_3 （七）配变异动重叠发生情况监测
        p 
          span.word_title_4 1、配变低电压与重过载重叠发生情况
        p 
          span.word_content 11月21日-11月27日，公司配变发生低电压异动72台，发生重过载有214台。其中重叠发生的配变有1台，为门头沟公司“田庄路门ZB37111026变压器”。
        bintu.auto(:chartsOption="{className:'guozaichongdiefasheng'}")
        p 
          span.word_title_4 2、配变低电压与三相不平衡重叠发生情况
        p 
          span.word_content 11月21日-11月27日，公司配变发生低电压异动72台，发生三相不平衡有1125台。其中重叠发生的配变有3台，为密云公司“密ZB027(石娥路）”、平谷公司“平ZB012水峪路柱上变压器”、延庆公司“古城路031柱上变压器”。
        bintu.auto(:chartsOption="{className:'pinghengchongdie'}")
        p 
          span.word_lingt 【总结建议】
        p 
          span.word_content 1、截至11月27日，公司配变电压运行平稳，未发生较大幅度的波动，电压合格率完成值为96.54%。其中配变电压合格率较低的三家公司分别为延庆、城区、密云公司，相关单位应加大治理力度，提升电压合格率水平。
        p 
          span.word_content 2、自2018年6月份以来，组织各单位开展不合格配变、不可监测配变的治理工作，取得了一定成效，但依然存在部分配变供电电压不合格、不可监测，各单位应进一步加强治理，消除由于台账维护错误、采集数据缺失等造成的配变无法监测、电压不合格问题。
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