<template lang="pug">
  .two_main
    //- h3.word_title_1 第一部分 重点专题监测情况
    .message
      .title_1
        h4.word_title_3 （二）配变发生低电压监测
        p 
          span.word_title_4 1、各单位配变低电压占比情况
        p 
          span.word_content {{ value.dwpbddyzb1 }}-{{ value.dwpbddyzb2 }}，公司配变发生低电压有{{ value.dwpbddyzb3 }}台。其中低电压异常数占总量比较高的三家单位分别为{{ value.dwpbddyzb4 }}公司。
        zhutuzhexianone.auto(v-model="tbData.tb12" :chartsOption="{className:'gedanweipeibian',isRow:false,tableName:'图12 各单位配变低电压分布',legendName:['低电压异常','占比(%)']}")
        p 
          span.word_title_4 2、各单位配变低电压情况
        p 
          span.word_content {{ value.dwpbddyqk1 }}-{{ value.dwpbddyqk2 }}，配变发生低电压{{ value.dwpbddyqk3 }}台，较上周{{ value.dwpbddyqk4 }}台数量{{ value.dwpbddyqk5 }}台。从单位构成上看，发生低电压配变数量较多三家单位分别为{{ value.dwpbddyqk6 }}公司。
        binpaizhutu.auto(v-model="tbData.tb13" :chartsOption="{className:'gedanweiyichang',isRow:false,tableName:'图13 各单位配变低电压异常分布'}")
        p 
          span.word_title_4 3、配变低电压持续时长、重复发生分析
        p 
          span.word_content 通过对{{ value.pbddyfx1 }}台配变低电压持续时长和重复发生情况分析，问题较为严重的配变有{{ value.pbddyfx2 }}台，较上周{{ value.pbddyfx3 }}台{{ value.pbddyfx4 }}台。{{ value.pbddyfx5 }}台为低电压持续时长超过10小时且重复发生，{{ value.pbddyfx6 }}台为低电压持续时长超过10小时。
        zhutuzhesanjiao.auto(v-model="tbData.tb14" :chartsOption="{className:'gedanweiyanzhong',isRow:false,tableName:'图14 各单位严重配变低电压异常分布'}")

        h4.word_title_3 （三）配变发生过电压监测
        p 
          span.word_title_4 1、各单位配变过电压占比情况
        p 
          span.word_content {{ value.dwpbgdyzb1 }}-{{ value.dwpbgdyzb2 }}，公司发生配变过电压有{{ value.dwpbgdyzb3 }}台。其中过电压异常数占总量比较高的三家单位分别为{{ value.dwpbgdyzb4 }}公司。
        zhutuzhexianone.auto(v-model="tbData.tb15" :chartsOption="{className:'gedanweipeidianya',isRow:false,tableName:'图15 各单位配变过电压分布',legendName:['过电压异常','占比(%)']}")
        p 
          span.word_title_4 2、各单位配变过电压情况
        p 
          span.word_content {{ value.dwpbgdyqk1 }}-{{ value.dwpbgdyqk2 }}，配变发生过电压异常{{ value.dwpbgdyqk3 }}台，较上周{{ value.dwpbgdyqk4 }}台{{ value.dwpbgdyqk5 }}台。从单位构成上看，过电压异常配变数量相对较多的三家单位分别为{{ value.dwpbgdyqk6 }}公司。
        binpaizhutu.auto(v-model="tbData.tb16" :chartsOption="{className:'peidianyicahng',isRow:false,tableName:'图16 各单位配变过电压异常分布'}")
        p 
          span.word_title_4 3、配变过电压时长分析
        p 
          span.word_content {{ value.pbgdyfx1 }}-{{ value.pbgdyfx2 }}，配变发生过电压异常{{ value.pbgdyfx3 }}台。对{{ value.pbgdyfx4 }}台过电压异常发生总时长进行分析，处于1～50小时的有{{ value.pbgdyfx5 }}台，占比{{ value.pbgdyfx6 }}；另超过50小时的长时过电压配变有{{ value.pbgdyfx7 }}台，占比{{ value.pbgdyfx8 }}。其中，7*24小时不间断发生过电压的有{{ value.pbgdyfx9 }}台配变，问题最严重。
        //- 没对数据
        mijizhutu.auto(:chartsOption="{className:'peidianshichang',isRow:true,tableName:'图17 配变过电压时长分布'}")

        h4.word_title_3 （四）不可监测配变分析
        p 
          span.word_title_4 1、各单位不可监测配变占比情况
        p 
          span.word_content {{ value.dwbkjcpbzb1 }}-{{ value.dwbkjcpbzb2 }}，公司不可监测配变有{{ value.dwbkjcpbzb3 }}台。其中不可监测数占总量比较高的三家单位分别为{{ value.dwbkjcpbzb4 }}公司。
        zhutuzhexianone.auto(v-model="tbData.tb18" :chartsOption="{className:'gedanweibukejiance',isRow:false,tableName:'图18 各单位不可监测配变分布',legendName:['不可监测配变数(台)','占比(%)']}")
        p 
          span.word_title_4 2、不可监测配变周变化情况
        p 
          span.word_content {{ value.bkjcpbzbhqk1 }}-{{ value.bkjcpbzbhqk2 }}，配变发生不可监测{{ value.bkjcpbzbhqk3 }}台,较上周{{ value.bkjcpbzbhqk4 }}台增加{{ value.bkjcpbzbhqk5 }}台。其中，上周持续至本周仍不可监测{{ value.bkjcpbzbhqk6 }}台，本周新增{{ value.bkjcpbzbhqk7 }}台（其中投运日期为{{ value.bkjcpbzbhqk8 }}的有{{ value.bkjcpbzbhqk9 }}台，{{ value.bkjcpbzbhqk10 }}{{ value.bkjcpbzbhqk11 }}台，{{ value.bkjcpbzbhqk12 }}前的有{{ value.bkjcpbzbhqk13 }}台）。不可监测配变数量较多的三家单位分别为{{ value.bkjcpbzbhqk14 }}公司。
        binpaizhutu.auto(v-model="tbData.tb19" :chartsOption="{className:'bukejiancezhou',isRow:false,tableName:'图19 不可监测配变周变化'}")
        p 
          span.word_content 对本周新增{{ value.bkjcpbzbhqk14_1 }}台配变进行分析，新纳入不可监测分析的配变有{{ value.bkjcpbzbhqk15 }}台（主要原因为“{{ value.bkjcpbzbhqk16 }}”有{{ value.bkjcpbzbhqk17 }}台，占比{{ value.bkjcpbzbhqk18 }}）；本周前属于可监测配变，本周变为不可监测配变有{{ value.bkjcpbzbhqk19 }}台（主要原因为“{{ value.bkjcpbzbhqk20 }}”有{{ value.bkjcpbzbhqk21 }}台，占比{{ value.bkjcpbzbhqk22 }}）。
        zhutufengcengfour.auto(v-model="tbData.tb20" :chartsOption="{className:'xinzengbuke',isRow:true,tableName:'图20 新增不可监测配变分析',legendName:['变压器与营销台区关系紧缺', '台区与电能表关系紧缺', '台区与电能表存在1对多问题','电能表缺失电压曲线数据']}")
        p 
          span.word_title_4 3、不可监测配变原因分析
        p 
          span.word_content 对{{ value.bkjcpbyyfx1 }}台不可监测配变进行原因分析，其中变压器与营销台区关系缺失的有{{ value.bkjcpbyyfx2 }}台，占比{{ value.bkjcpbyyfx3 }}；台区与电能表关系缺失的有{{ value.bkjcpbyyfx4 }}台，占比{{ value.bkjcpbyyfx5 }}；台区与电能表存在1对多问题的有{{ value.bkjcpbyyfx6 }}台，占比{{ value.bkjcpbyyfx7 }}；电能表缺失电压曲线数据的有{{ value.bkjcpbyyfx8 }}台，占比{{ value.bkjcpbyyfx9 }}。
        bintu.auto(v-model="tbData.tb21" :chartsOption="{className:'bukejianceyuanyin',tableName:'图21 不可监测配变原因分析'}")
        p 
          span.word_content 按照投运日期分布看，{{ value.bkjcpbyyfx10 }}台不可监测配变中投运日期为{{ value.bkjcpbyyfx12 }}的有{{ value.bkjcpbyyfx13 }}台（主要原因为“{{ value.bkjcpbyyfx14 }}”，占比{{ value.bkjcpbyyfx15 }}）；投运日期为{{ value.bkjcpbyyfx16 }}的有{{ value.bkjcpbyyfx17 }}台（主要原因为“{{ value.bkjcpbyyfx18}}”，占比{{ value.bkjcpbyyfx19 }}）；{{ value.bkjcpbyyfx20 }}之前投运的有{{ value.bkjcpbyyfx21 }}台（主要原因为“{{ value.bkjcpbyyfx22 }}”，占比{{ value.bkjcpbyyfx23 }}），具体情况见下图。
        zhutufengcengfour.auto(v-model="tbData.tb22" :chartsOption="{className:'bukejiancefenxi',isRow:true,tableName:'图22 不可监测配变投运日期分析',legendName:['变压器与营销台区关系紧缺','台区与电能表关系紧缺','台区与电能表存在1对多问题','电能表缺失电压曲线数据']}")
        p 
          span.word_title_4 4、新投运配变实现可监测时长分析
        p 
          span.word_content {{ value.xtypbkjcfx1 }}至{{ value.xtypbkjcfx2 }}，公司新投运配变{{ value.xtypbkjcfx3 }}台，有{{ value.xtypbkjcfx4 }}台配变还未实现监测，已实现监测的配变{{ value.xtypbkjcfx5 }}台，平均用时{{ value.xtypbkjcfx6 }}天，其中PMS侧维护平均用时{{ value.xtypbkjcfx7 }}天，营销侧维护平均用时{{ value.xtypbkjcfx8 }}天。仍不可监测的{{ value.xtypbkjcfx9 }}台，PMS2.0侧维护平均用时{{ value.xtypbkjcfx10 }}天，营销系统侧维护平均已用时{{ value.xtypbkjcfx11 }}天。
        p 
          span.word_content 已实现监测的配变{{ value.xtypbkjcfx11_1 }}台配变中，投运当天及投运前完成维护实现可监测配变有{{ value.xtypbkjcfx12 }}台，投运7天内完成维护实现可监测配变有{{ value.xtypbkjcfx13 }}台，投运8-15天完成维护实现可监测配变有{{ value.xtypbkjcfx14 }}台，投运15天以上完成维护实现可监测配变有{{ value.xtypbkjcfx15 }}台。
        bintu.auto(v-model="tbData.tb23" :chartsOption="{className:'xintouyunfenxi',tableName:'图23 新投运配变实现可监测分析'}")

        //- 对数据（dwpbzgzzbqk1）
        h4.word_title_3 （五）配变发生重过载情况监测
        p 
          span.word_title_4 1、各单位配变重过载占比情况
        p 
          span.word_content {{ value.dwpbzgzzbqk1 }}-{{ value.dwpbzgzzbqk2 }}，公司配变发生重过载{{ value.dwpbzgzzbqk3 }}台。重过载率{{ value.dwpbzgzzbqk4 }}，较上周{{ value.dwpbzgzzbqk5 }}个百分点。
        zhutuzhexian.auto(v-model="tbData.tb24" :className="'gongsipeidianqishi'" :isRow="true" :title="{tableName:'图24 公司配变重过载变化趋势',legendName:['非重过载配变数(万台)','重过载配变数(万台)','配变重过载率(%)']}")
        p 
          span.word_content 从单位分布上看，重过载数占总量比较高的三家单位分别为{{ value.dwpbzgzzbqk6 }}公司。
        zhutuzhexianone.auto(v-model="tbData.tb25" :chartsOption="{className:'gedanweizhongzai',tableName:'图25 各单位配变重过载占比',legendName:['重过载配变数(万台)','占比(%)']}")
        p 
          span.word_title_4 2、配变重过载周趋势
        p 
          span.word_content {{ value.pbzgzzcs1 }}-{{ value.pbzgzzcs2 }},公司发生重过载配变{{ value.pbzgzzcs3 }}台，较上周{{ value.pbzgzzcs4 }}台。其中重载⁶有{{ value.pbzgzzcs5 }}台(占比{{ value.pbzgzzcs6 }})，较上周{{ value.pbzgzzcs7 }}台；过载⁷有{{ value.pbzgzzcs8 }}台（占比{{ value.pbzgzzcs9 }}），较上周{{ value.pbzgzzcs10 }}台。
        p 
          span.word_content.tip ⁶配变重载：配变负载处于80%-100%区间;
          span.word_content.tip ⁷配变过载：配变负载大于100%。
        duidiezhutu.auto(v-model="tbData.tb26" :chartsOption="{className:'zhongzaipeibian',isRow:true,tableName: '图26 重过载配变周趋势',legendName: ['重载(台)','过载(台)']}")
        p 
          span.word_title_4 3、各单位配变重过载分布情况
        p 
          span.word_content {{ value.dwpbzgzfb1 }}-{{ value.dwpbzgzfb2 }}，公司发生重过载共{{ value.dwpbzgzfb3 }}台，其中重过载配变较多的三家单位分别为{{ value.dwpbzgzfb4 }}公司。
        duidiezhutu.auto(v-model="tbData.tb27" :chartsOption="{className:'zhongzaipeibianguozai',isRow:false,tableName: '图27 各单位重过载配变分布',legendName: ['重载(台)','过载(台)']}")

        h4.word_title_3 （六）配变发生三相不平衡情况监测
        p 
          span.word_title_4 1、各单位配变三相不平衡占比情况
        p 
          span.word_content {{ value.dwpbsxbphzb1 }}-{{ value.dwpbsxbphzb2 }}，公司配变发生三相不平衡有{{ value.dwpbsxbphzb3 }}台。三相不平衡率{{ value.dwpbsxbphzb4 }}，较上周{{ value.dwpbsxbphzb5 }}个百分点。
        zhutuzhexian.auto(v-model="tbData.tb28" :className="'sanxiangbupinghen'" :isRow="true" :title="{tableName:'图28 公司配变三相不平衡变化趋势',legendName:['非三项不平衡配电数(台)','三项不平衡配电数(台)','三项不平衡率(%)']}")
        p 
          span.word_content 从单位分布上看，三相不平衡数占总量占比较高的三家单位分别为{{ value.dwpbsxbphzb6 }}公司。
        zhutuzhexianone.auto(v-model="tbData.tb29" :chartsOption="{className:'sanxiangbupinghenzhanbi',tableName:'图29 各单位配变三相不平衡占比',legendName:['三项不平衡数(台)','占比(%)']}")
        p 
          span.word_title_4 2、配变三相不平衡周趋势
        p 
          span.word_content {{ value.dwpbsxbphzcs1 }}-{{ value.dwpbsxbphzcs2 }},公司发生三相不平衡配变{{ value.dwpbsxbphzcs3 }}台，较上周数量增加{{ value.dwpbsxbphzcs4 }}台。
        zhuzhaungtu.auto(v-model="tbData.tb30" :chartsOption="{className:'sanxiangbupinghenqushi',isRow:'true',tableName:'图30 三相不平衡配变周趋势'}")
        p 
          span.word_title_4 3、各单位配变三相不平衡分布情况
        p 
          span.word_content {{ value.dwpbsxbphfb1 }}-{{ value.dwpbsxbphfb2 }}，公司发生三相不平衡共{{ value.dwpbsxbphfb3 }}台，其中三相不平衡配变较多的三家单位分别为{{ value.dwpbsxbphfb4 }}公司。
        zhuzhaungtu.auto(v-model="tbData.tb31" :chartsOption="{className:'sanxiangbupinghenfenbu' ,isRow:false,tableName:'图31 各单位三相不平衡配变分布'}")

        h4.word_title_3 （七）配变异动重叠发生情况监测
        p 
          span.word_title_4 1、配变低电压与重过载重叠发生情况
        p 
          span.word_content {{ value.pbddyyzgzcd1 }}-{{ value.pbddyyzgzcd2 }}，公司配变发生低电压异动{{ value.pbddyyzgzcd3 }}台，发生重过载有{{ value.pbddyyzgzcd4 }}台。其中重叠发生的配变有{{ value.pbddyyzgzcd5 }}台，为{{ value.pbddyyzgzcd6 }}。
        bintu.auto(v-model="tbData.tb32" :chartsOption="{className:'guozaichongdiefasheng',tableName:'图32 配变低电压与重过载重叠发生情况'}")
        p 
          span.word_title_4 2、配变低电压与三相不平衡重叠发生情况
        p 
          span.word_content {{ value.pbddyysxbphcd1 }}-{{ value.pbddyysxbphcd2 }}，公司配变发生低电压异动{{ value.pbddyysxbphcd3 }}台，发生三相不平衡有{{ value.pbddyysxbphcd4 }}台。其中重叠发生的配变有{{ value.pbddyysxbphcd5 }}台，为{{ value.pbddyysxbphcd6 }}。
        bintu.auto(v-model="tbData.tb33" :chartsOption="{className:'pinghengchongdie',tableName:'图33 配变低电压与三相不平衡重叠发生情况'}")
        wcoalPage(v-if="isMonth.indexOf(Month) !== -1")
        p 
          span.word_lingt 【总结建议】
        p 
          span.word_content 1、截至{{ value.pbydcdzj1 }}，公司配变电压运行平稳，未发生较大幅度的波动，电压合格率完成值为{{ value.pbydcdzj2 }}。其中配变电压合格率较低的三家公司分别为{{ value.pbydcdzj3 }}公司，相关单位应加大治理力度，提升电压合格率水平。
        p 
          span.word_content 2、自2018年6月份以来，组织各单位开展不合格配变、不可监测配变的治理工作，取得了一定成效，但依然存在部分配变供电电压不合格、不可监测，各单位应进一步加强治理，消除由于台账维护错误、采集数据缺失等造成的配变无法监测、电压不合格问题。
</template>
<script>
export default {
  props:["value","tbData"],
  data() {
    return {
      Month:null,
      isMonth:[11,12,1,2,3]
    };
  },
  created() {
    this.Month = +localStorage.getItem("timeMonth")       //获取月份
  },
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