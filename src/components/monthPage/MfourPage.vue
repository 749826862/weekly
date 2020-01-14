<template lang="pug">
  .two_main
    .message
      .title_1
        h4.word_title_2 三、线损率监测分析
        p 
          span.word_lingt 【监测周期】
          span.word_content 2019年11月1日0时—11月30日24时
        p 
          span.word_lingt 【监测概要】
          span.word_content 通过从一体化电量与线损管理系统中获取9851条10kV线路、从电力用户用电信息采集系统中获取8.65万个台区供、售电量数据，全面反映公司及各供电公司同期线损完成情况，重点关注各供电公司10kV线路和台区的同期线损完成情况。
        p 
          span.word_lingt 【监测分析情况】

        h4.word_title_3 （一）线损率总体情况
        p 
          span.word_content 1．11月份，北京地区统计线损率累计值为5.85%，同期线损率为6.43%。
        binpaifuzhuline.auto(:chartsOption="{className:'bjdqxsl',legendName:['统计线损率累计值(%)','月同期线损率(%)'],tableName:'图1 北京地区线损率变化趋势',isRow:true}")
        p 
          span.word_content 2．11月份，北京地区220kV电压等级线损率较10月份下降了1.42个百分点，且为负值。
        Mfourzhexian.auto(:chartsOption="{className:'kv10tqxsl',legendName:['35千伏','110千伏','220千伏','500千伏'],tableName:'图2 10kV以上电压等级同期线损率变化趋势',isRow:true}")
        p 
          span.word_content 10kV及以下电压等级线损率为3.44%，总体呈波动起伏趋势。
        Mzhexian(:chartsOption="{className:'kv10tqxsldj',legendName:[''],tableName:'图3 10kV及以下电压等级同期线损率变化趋势',isRow:true,color:['#E46C0A']}")
        p 
          span.word_content 3.11月份，北京地区10kV线路同期线损率分布在[0,6]区间的线路数共6380条，占比为64.30%，较上月有上升；台区同期线损率分布在[0,10]区间的台区数为69515个，占比为84.29%，台区线损管控情况平稳良好。
        twozhexian.auto(:chartsOption="{className:'bejxszcdb',legendName:['线损率在[0,6]之间的10Kv线路占比(%)','线损率在[0,10]之间的台区占比(%)'],tableName:'图4 北京地区10kV线路及台区同期线损率正常区间占比',isRow:true}")
        p 
          span.word_content 4.11月份，北京地区10kV负损线路共计1137条，比上月减少132条，占线路总数的11.46%，占比较10月份下降了1.5个百分点，持续5个月下降，治理成效显著。
        Mduidiedanzhuzheline.auto(:chartsOption="{className:'bejfsbh',legendName:['10Kv线路小负损数','10Kv线路其它负损数','10Kv负损线路占比(%)'],tableName:'图5 北京地区10kV线路负损变化趋势',isRow:true}")
        p 
          span.word_content 11月份，负损台区共计6292个，占台区总数的7.63%，台区小负损数有所下降，其他负损数和负损占比均有上升。
        Mduidiedanzhuzheline.auto(:chartsOption="{className:'betqfsbh',legendName:['台区小负损数','台区其它负损数','负损台区占比(%)'],tableName:'图6 北京地区台区负损变化趋势',isRow:true}")

        h4.word_title_3 （二）10kV线路同期线损情况
        p 
          span.word_title_4 1．北京地区10kV线路同期线损整体情况
        p 
          span.word_content 11月份，北京地区10kV线路同期线损率为5.23%，较10月份下降了0.56个百分点。
        Mzhexian.auto(:chartsOption="{className:'beijintqbh',legendName:['10Kv线路同期线损率(%)'],tableName:'图7 北京地区10kV线路同期线损率变化趋势',isRow:true,color:['#4F81BD']}")
        p 
          span.word_title_4 2．各单位10kV线路同期线损完成情况
        p 
          span.word_content 11月份，大兴公司10kV线路同期线损率较低（2.07%），朝阳公司10kV线路同期线损率较高（8.93%）。
        binpaifuzhuline.auto(:chartsOption="{className:'gdbeijintqbh',legendName:['上月10Kv线路同期线损率(%)','本月10Kv线路同期线损率(%)'],tableName:'图8 各单位10kV线路同期线损率情况',isRow:true}")
        p 
          span.word_title_4 3．各单位10kV线路负损情况
        p 
          span.word_content 11月份，朝阳公司10kV负损线路数量最多，延庆公司10kV负损线路占比最高，应重点加强治理。
        zhutuzhexian.auto(:title="{legendName:['10Kv线路小负损数','10Kv线路其它负损数','10Kv线路负损占总线路数比例(%)'],tableName:'图9 各单位10kV线路负损及小负损情况',isRow:true}" :className="'gdbeijinfsqk'",)

        h4.word_title_3 （三）台区同期线损率情况
        p 
          span.word_title_4 1．北京地区台区同期线损整体情况
        p 
          span.word_content 11月份，北京地区台区同期线损率为3.02%，较10月份下降了0.37个百分点，总体较为稳定。
        Mzhexian.auto(:chartsOption="{className:'tqgdbeijinfsqk',legendName:[''],tableName:'图10 北京地区台区同期线损率变化趋势',isRow:true,color:['#4F81BD']}")
        p 
          span.word_title_4 2．各单位台区同期线损完成情况
        p 
          span.word_content 11月份，台区同期线损率最低的为怀柔公司（1.17%），最高的为门头沟公司（5.23%）。城区公司台区同期线损率降幅较大。
        binpaifuzhuline.auto(:chartsOption="{className:'tqgdbeijindbt',legendName:['上月台区同期线损率(%)','本月台区同期线损率(%)'],tableName:'图11 各单位台区同期线损率对比图',isRow:true}")
        p 
          span.word_title_4 3．各单位台区负损情况
        p 
          span.word_content 11月份，延庆公司负损台区占比最高，顺义公司负损台区数量最多，应重点加强治理。
        zhutuzhexian.auto(:title="{legendName:['台区小负损数','台区其它负损数','台区负损占台区总数比例(%)'],tableName:'图12 各单位台区负损及小负损情况',isRow:true}" :className="'xftqgdbeijindbt'",)
        p 
          span.word_lingt 【相关建议】
        p 
          span.word_content 1．11月份，北京地区统计线损率累计值为5.85%，同期线损率为6.43%。
        p 
          span.word_content 2．11月份，北京地区10kV线路同期线损率分布在[0,6]区间的占比为64.30%，较上月有上升。台区同期线损率分布在[0,10]区间的占比为84.29%，管控情况平稳良好。
        p 
          span.word_content 3．11月份，北京地区10kV线路负损占比为11.46%，持续5个月下降，台区负损占比为7.63%。
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