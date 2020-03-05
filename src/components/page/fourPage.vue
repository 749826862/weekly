<template lang="pug">
  .two_main
    //- h3.word_title_1 
    .message
      .title_1
        h4.word_title_2 三、线损率
        p 
          span.word_lingt 【监测周期】
          span.word_content {{ value.jczq1 }}—{{ value.jczq2 }}
        p 
          span.word_lingt 【数据来源】
          span.word_content 主要来源于一体化电量与线损管理系统、电力用户用电信息采集系统和综合线损管理系统，涉及{{ value.jcsj1 }}个数据字段，获取本周明细数据{{ value.jcsj2 }}万条，其中统计线损来源于综合线损管理系统共{{ value.jcsj3 }}条，分区、10kV线路同期线损来源于一体化电量与线损管理系统共{{ value.jcsj4 }}条，台区同期线损来源于电力用户用电信息采集系统共8.69条。
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
          span.word_content {{ value.bjtqxslqk1 }}第{{ value.bjtqxslqk2 }}，北京地区同期线损率为{{ value.bjtqxslqk3 }}，比上周{{ value.bjtqxslqk4 }}个百分点，比{{ value.bjtqxslqk5 }}统计线损率累计值{{ value.bjtqxslqk6 }}高{{ value.bjtqxslqk7 }}个百分点。
        binpaifuzhuline.auto(v-model="tbData.tb1" :chartsOption="{className:'beijingdiquxiansun',legendName: ['统计线损率累计值(%)','同期线损率(%)'],isRow:true,isMarkline:false,tableName: '图1 北京地区同期线损率周趋势'}")
        p 
          span.word_title_4 2、各单位同期线损率完成情况
        p 
          span.word_content {{ value.dwtqxslqk1 }}第{{ value.dwtqxslqk2 }}，{{ value.dwtqxslqk3 }}公司同期线损率较低（{{ value.dwtqxslqk4 }}），{{ value.dwtqxslqk5 }}公司同期线损率较高（{{ value.dwtqxslqk6 }}），{{ value.dwtqxslqk7 }}等公司同期线损率波动较大。
        binpaifuzhuline.auto(v-model="tbData.tb2" :chartsOption="{className:'xiansuanwancheng',legendName: ['上周同期线损率(%)','本周同期线损率(%)'],isRow:false,isMarkline:true,tableName: '图2 各单位同期线损率完成情况'}")
        p 
          span.word_title_4 3、北京地区10kV线路同期线损率完成情况
        p 
          span.word_content {{ value.bj10KVtqxslqk1 }}第{{ value.bj10KVtqxslqk2 }}，北京地区10kV线路共{{ value.bj10KVtqxslqk3 }}条，可计算线路{{ value.bj10KVtqxslqk4 }}条，可算率{{ value.bj10KVtqxslqk5 }}，同期线损率为{{ value.bj10KVtqxslqk6 }}，比上周{{ value.bj10KVtqxslqk7 }}个百分点。
        zhexianone.auto(v-model="tbData.tb3" :chartsOption="{className:'dejindiqu10kv',isRow:true,legendName: ['北京地区10kv线路同期线损率(%)'],tableName: '图3 北京地区10kV线路同期线损率周趋势'}")
        p 
          span.word_content {{ value.bj10KVtqxslqk8 }}第{{ value.bj10KVtqxslqk9 }}，{{ value.bj10KVtqxslqk10 }}公司10kV线路同期线损率比上周{{ value.bj10KVtqxslqk11 }}个百分点，其他单位保持相对稳定。
        binpaifuzhuline.auto(v-model="tbData.tb4" :chartsOption="{className:'Kv10wanchengqingku',legendName: ['上周10Kv线路线损率(%)','本周10Kv线路线损率(%)','本周北京地区10Kv线路线损率(%)'],isRow:false,isMarkline:true,tableName: '图4 各单位10kV线路同期线损率完成情况'}")
        p 
          span.word_title_4 4、北京地区台区同期线损率完成情况
        p 
          span.word_content {{ value.bjdqtqxslqk1 }}第{{ value.bjdqtqxslqk2 }}，北京地区台区共{{ value.bjdqtqxslqk3 }}个，可计算台区{{ value.bjdqtqxslqk4 }}个，可算率{{ value.bjdqtqxslqk5 }}，同期线损率为{{ value.bjdqtqxslqk6 }}，比上周{{ value.bjdqtqxslqk7 }}个百分点，总体趋势为稳中有降，波动较小。
        zhexianone.auto(v-model="tbData.tb5" :chartsOption="{className:'zhoubeijintaiquxiansun',isRow:true,tableName: '图5 北京地区台区同期线损率周趋势',legendName: ['北京地区台区同期线损率(%)']}")
        p 
          span.word_content {{ value.bjdqtqxslqk8 }}第{{ value.bjdqtqxslqk9 }},各单位台区同期线损率也相对稳定，波动较小。
        binpaifuzhuline.auto(v-model="tbData.tb6" :chartsOption="{className:'gedanweixiansaun',isRow:false,isMarkline:true,tableName: '图6 各单位台区同期线损率完成情况',legendName: ['北京地区台区同期线损率(%)']}")

        h4.word_title_3 （二）负损监测情况
        p 
          span.word_title_4 1、10kV线路负损周趋势
        p 
          span.word_content {{ value.bj10kVxlfuzcs1 }}第{{ value.bj10kVxlfuzcs2 }}，北京地区10kV负损线路{{ value.bj10kVxlfuzcs3 }}条，比上周增加了{{ value.bj10kVxlfuzcs5 }}条，占线路总数比例为{{ value.bj10kVxlfuzcs4 }}，比上周{{ value.bj10kVxlfuzcs6 }}个百分点。
        danzhuzhexian.auto(v-model="tbData.tb7" :chartsOption="{className:'kv10fusuanqingkuang',isRow:true,tableName: '图7 北京地区10kV线路负损情况周趋势',legendName: ['10kv负损线路数','10kv负损线路占10kv线路总数比例']}")
        p 
          span.word_title_4 2、各单位10kV线路负损情况
        p 
          span.word_content 本周，10kV负损线路占比较高的三家单位分别是{{ value.dw10kVxlfuzcs1 }}，占本单位线路总数比例分别达{{ value.dw10kVxlfuzcs2 }}。
        danzhuzhexian.auto(v-model="tbData.tb8" :chartsOption="{className:'gedan10kvfusuanqing',isRow:false,tableName: '图8 各单位10kV线路负损情况',legendName: ['本周负损数','本周10kv负损线路占10kv线路总数比例']}")
        p 
          span.word_title_4 3、10kV线路负损区间分布情况
        p 
          span.word_content 从分布来看，线损率在{{ value.bj10kVxlfufb1 }}区间的小负损线路数最多，达{{ value.bj10kVxlfufb2 }}条，占比为{{ value.bj10kVxlfufb3 }}，数量和占比较上周均有所{{ value.bj10kVxlfufb4 }}。
        qujianzhutu.auto(v-model="tbData.tb9" :chartsOption="{className:'fusunqujian',tableName: '图9 10kV线路负损区间分布',legendName: ['本周10kv线路同期线损率不同区间段数量和占比']}")
        p 
          span.word_title_4 4、10kV线路小负损{{ value.bj10kVxlfuqj0 }}情况
        p 
          span.word_content 本周，北京地区10kV小负损线路共{{ value.bj10kVxlfuqj1 }}条，较上周{{ value.bj10kVxlfuqj2 }}条，占负损总数比例{{ value.bj10kVxlfuqj3 }}，比上周{{ value.bj10kVxlfuqj4 }}个百分点。
        danzhuzhexian.auto(v-model="tbData.tb10" :chartsOption="{className:'xiaofusunqujian',isRow:true,tableName: '图10 10kV线路小负损趋势',legendName: ['线损率在[-1,0)区间的数量','10kV线路小负损数占负损总数比例']}")
        p 
          span.word_content 从各单位来看，小负损线路占比最高的三家单位分别是{{ value.bj10kVxlfuqj5[0] }}（{{ value.bj10kVxlfuqj6[0] }}）、{{ value.bj10kVxlfuqj5[1] }}（{{ value.bj10kVxlfuqj6[1] }}）、{{ value.bj10kVxlfuqj5[2] }}（{{ value.bj10kVxlfuqj6[2] }}）。
        danzhuzhexian.auto(v-model="tbData.tb11" :chartsOption="{className:'xiao10kvfusunqujian',isRow:false,tableName: '图11 各单位10kV线路小负损情况',legendName: ['10kv线路同期线损率在[-1,0)区间的数量','10kV线路小负损数占负损总数比例']}")
        p 
          span.word_title_4 5、10kV线路持续负损情况
        p 
          span.word_content 本周，持续至少6周负损的线路共{{ value.bj10kVxlcxfu1 }}条，占比为{{ value.bj10kVxlcxfu2 }}，其中{{ value.bj10kVxlcxfu3 }}公司数量最多（为{{ value.bj10kVxlcxfu4 }}条），{{ value.bj10kVxlcxfu5 }}公司占比最高（{{ value.bj10kVxlcxfu6 }}）。
        danzhuzhexian.auto(v-model="tbData.tb12" :chartsOption="{className:'xiao10kvfusunqingkuna',tableName: '图12 各单位10kV线路持续6周负损情况',legendName: ['10kv线路持续负损数量','10kv线路持续负损数占本单位不合格线路总数比例']}")
        h4.word_title_3 （三）台区同期线损率负损监测情况
        p 
          span.word_title_4 1、台区负损周趋势
        p 
          span.word_content {{ value.tqfuzcs1 }}第{{ value.tqfuzcs2 }}，北京地区负损台区{{ value.tqfuzcs3 }}个，比上周{{ value.tqfuzcs4 }}个，占台区总数比例为{{ value.tqfuzcs5 }}，比上周{{ value.tqfuzcs6 }}个百分点。
        danzhuzhexian.auto(v-model="tbData.tb13" :chartsOption="{className:'taiqufusunqushi',isRow:true,tableName: '图13 台区负损情况周趋势',legendName: ['台区负损数','台区负损数占台区总数比例']}")
        p 
          span.word_title_4 2、各单位台区负损情况
        p 
          span.word_content 本周，负损台区占比较大的三家单位分别是{{ value.dwtqfs1 }}，占本单位台区总数比例分别达{{ value.dwtqfs2 }}。
        danzhuzhexian.auto(v-model="tbData.tb14" :chartsOption="{className:'gedanweifusuntai',isRow:false,tableName: '图14 各单位负损台区情况',legendName: ['本周台区负损数','本周台区负损数占台区总数比例']}")
        p 
          span.word_title_4 3、台区负损区间分布情况
        p 
          span.word_content 从分布来看，线损率在{{ value.tqfsqjfb1 }}区间的小负损台区数最多，达{{ value.tqfsqjfb2 }}个，占比为{{ value.tqfsqjfb3 }}，数量较上周有所{{ value.tqfsqjfb4 }}，但占比较上周有所{{ value.tqfsqjfb5 }}，且远高于其他区间。
        qujianzhutu.auto(v-model="tbData.tb15" :chartsOption="{className:'taiqufusunqujian',tableName: '图15 台区负损区间分布'}")
        p 
          span.word_title_4 4、台区小负损{{ value.tqfsqk0 }}情况
        p 
          span.word_content 本周，北京地区小负损台区共{{ value.tqfsqk1 }}个，较上周{{ value.tqfsqk2 }}个，占比为{{ value.tqfsqk3 }}，较上周{{ value.tqfsqk4 }}个百分点。
        danzhuzhexian.auto(v-model="tbData.tb16" :chartsOption="{className:'taiquxiaofusunqujian',isRow:true,tableName: '图16 台区小负损周趋势',legendName: ['线损率在[-1,0)区间的数量','台区小负损数占负损总数比例']}")
        p 
          span.word_content 从各单位看，本周小负损台区占比较高的三家单位分别是{{ value.tqfsqk5[0] }}（{{ value.tqfsqk6[0] }}）、{{ value.tqfsqk5[1] }}（{{ value.tqfsqk6[1] }}）、{{ value.tqfsqk5[2] }}（{{ value.tqfsqk6[2] }}）。
        danzhuzhexian.auto(v-model="tbData.tb17" :chartsOption="{className:'xiaofusuntaiqu',isRow:false,tableName: '图17 各单位小负损台区情况',legendName: ['台区同期线损率在[-1,0)区间的数量','台区小负损数占负损总数比例']}")
        p 
          //- 缺少
          span.word_content 从供电量分布看，小负损台区供电量主要集中在(0,200]低电量区间，占比29.87%，较上周有所下降。
        qujianzhutu.auto(v-model="tbData.tb18" :chartsOption="{className:'xiaofusundianliang',tableName: '图18 小负损台区供电量分布情况',legendName: ['本周小负损台区不同供电量区间段数量和占比']}")
        p 
          //- 缺少
          span.word_content 从用户数分布看，小负损台区用户数主要集中在{{ value.tqfsqk7 }}户数区间，占比{{ value.tqfsqk8 }}，较上周有所上升。
        qujianzhutu.auto(v-model="tbData.tb19" :chartsOption="{className:'xiaofusundianliangyonghu',tableName: '图19 小负损台区用户数分布情况'}")
        p 
          span.word_title_4 5、台区负损持续发生情况
        p 
          span.word_content 本周，持续至少6周负损的台区共{{ value.tqfscx1 }}个，占比{{ value.tqfscx2 }}；从各单位情况看，台区持续6周负损情况较为严重的三家单位是{{ value.tqfscx3[0] }}（{{ value.tqfscx4[0] }}）、{{ value.tqfscx3[1] }}（{{ value.tqfscx4[1] }}）、{{ value.tqfscx3[2] }}（{{ value.tqfscx4[2] }}）。
        danzhuzhexian.auto(v-model="tbData.tb20" :chartsOption="{className:'taiqushuliangzhanbi',isRow:false,tableName: '图20 各单位持续负损台区数量及占比',legendName: ['台区持续负损数量','台区持续负损数占本单位不合格台区总数比例']}")

        h4.word_title_3 （四）新投运台区线损监测情况
        p 
          span.word_content 2019年1月1日至11月25日，公司新投运台区累计{{ value.xtytqxs1 }}个（本周新投运台区{{ value.xtytqxs2 }}个），可监测台区共{{ value.xtytqxs3 }}个，线损率{{ value.xtytqxs4 }}，略高于全量台区线损率。
        twozhexian.auto(v-model="tbData.tb21" :chartsOption="{className:'xintouyunqushi',isRow:true,tableName: '图21 新投运台区线损率趋势图',legendName: ['新投运台区同期线损率(%)','总体台区同期线损率(%)']}")
        p 
          //- 缺少
          span.word_content 从各单位情况看，新投运台区线损率最低为{{ value.xtytqxs5 }}公司（{{ value.xtytqxs6 }}），低于本单位台区总体线损率0.71个百分点；最高的为{{ value.xtytqxs7 }}公司（{{ value.xtytqxs8 }}），高于本单位台区总体线损率0.42个百分点。
        twofuzhuline.auto(v-model="tbData.tb22" :chartsOption="{className:'xintouyunxiansuanlv',isRow:false,tableName: '图22 各单位新投运台区线损率情况',legendName: ['各单位新投运台区同期线损率(%)','各单位总体台区同期线损率(%)']}")
        p 
          span.word_content 各单位新投运台区负损情况总体较好，{{ value.xtytqxs9 }}公司占本单位台区比例最高。
        danzhuzhexian.auto(v-model="tbData.tb23" :chartsOption="{className:'xintouyunbuhege',isRow:false,tableName: '图23 各单位新投运不合格台区情况',legendName: ['新投运台区负损数','新投运台区负损数占台区总数的比例']}")
        p
          span.word_lingt 【结论】
        p 
          span.word_content 1．{{ value.xslzj1 }}第{{ value.xslzj2 }}，北京地区同期线损率为{{ value.xslzj3 }}%，10kV线路同期线损率为{{ value.xslzj4 }}%，台区同期线损率为{{ value.xslzj5 }}%。
        p 
          span.word_content 2．{{ value.xslzj6 }}第{{ value.xslzj7 }}，北京地区10kV负损线路占线路总数比例为{{ value.xslzj8 }}，小负损线路占负损线路比例为{{ value.xslzj9 }}；负损台区占台区总数比例为{{ value.xslzj10 }}，小负损台区占负损台区比例为{{ value.xslzj11 }}。
        p 
          span.word_content 3．{{ value.xslzj12 }}第{{ value.xslzj13 }}，新投运台区线损率为{{ value.xslzj14 }}。
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