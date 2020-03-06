<template lang="pug">
  .hwl_content 
    .bg_table
      img(src="~@assets/hw_table.png")
      .father
        .data_view
          .num
            p {{ this.value.count }}
            p {{ this.value.zb }}
          .status
            span(:class="classStatus[trend(this.value.zb)]")
        .data_view
          .num
            p {{ this.value.childs[0].count }}
            p {{ this.value.childs[0].zb }}
          .status
            span(:class="classStatus[trend(this.value.childs[0].zb)]")
        .data_view
          .num
            p {{ this.value.childs[1].count }}
            p {{ this.value.childs[1].zb }}
          .status
            span(:class="classStatus[trend(this.value.childs[1].zb)]")
        .data_view
          .num
            p {{ this.value.childs[1].childs[0].count }}
            p {{ this.value.childs[1].childs[0].zb }}
          .status
            span(:class="classStatus[trend(this.value.childs[1].childs[0].zb)]")
        .data_view
          .num
            p {{ this.value.childs[1].childs[1].count }}
            p {{ this.value.childs[1].childs[1].zb }}
          .status
            span(:class="classStatus[trend(this.value.childs[1].childs[1].zb)]")
        .data_view
          .num
            p {{ this.value.childs[2].count }}
            p {{ this.value.childs[2].zb }}
          .status
            span(:class="classStatus[trend(this.value.childs[2].zb)]")
        //- ------------------------------------------------------------------八类工单数量
        .data_view
          .num
            p {{ this.value.childs[2].childs[6].count }}
            p {{ this.value.childs[2].childs[6].zb }}
          .status
            span(:class="classStatus[trend(this.value.childs[2].childs[6].zb)]")
        .data_view
          .num
            p {{ this.value.childs[2].childs[7].count }}
            p {{ this.value.childs[2].childs[7].zb }}
          .status
            span(:class="classStatus[trend(this.value.childs[2].childs[7].zb)]")
        .data_view
          .num
            p {{ this.value.childs[2].childs[5].count }}
            p {{ this.value.childs[2].childs[5].zb }}
          .status
            span(:class="classStatus[trend(this.value.childs[2].childs[5].zb)]")
        .data_view
          .num
            p {{ this.value.childs[2].childs[4].count }}
            p {{ this.value.childs[2].childs[4].zb }}
          .status
            span(:class="classStatus[trend(this.value.childs[2].childs[4].zb)]")
        .data_view
          .num
            p {{ this.value.childs[2].childs[0].count }}
            p {{ this.value.childs[2].childs[0].zb }}
          .status
            span(:class="classStatus[trend(this.value.childs[2].childs[0].zb)]")
        .data_view
          .num
            p {{ this.value.childs[2].childs[1].count }}
            p {{ this.value.childs[2].childs[1].zb }}
          .status
            span(:class="classStatus[trend(this.value.childs[2].childs[1].zb)]")
        .data_view
          .num
            p {{ this.value.childs[2].childs[2].count }}
            p {{ this.value.childs[2].childs[2].zb }}
          .status
            span(:class="classStatus[trend(this.value.childs[2].childs[2].zb)]")
        .data_view 
          .num
            p {{ this.value.childs[2].childs[3].count }}
            p {{ this.value.childs[2].childs[3].zb }}
          .status
            span(:class="classStatus[trend(this.value.childs[2].childs[3].zb)]")
      
    .table_name 图1  北京地区95598话务量总体情况
    
</template>
<script>
export default {
  props:["value"],
  data() {
    return {
      data_table:{},   //
      classStatus:['iconfont icon-shangsheng','iconfont icon-web-icon-']
    }
  },
  created() {
   
  },
  methods: {
    //  判断数值趋势
    trend(data){
      let arr = data.split("%")
      let status = 0
      if (+arr[0] > 0) {
        status = 0
      }else if(+arr[0] < 0){
        status = 1
      }else{
        status = 2
      }
      return status
    }
  }
};
</script>
<style lang='less' scoped>
    .hwl_content{
      margin: 20px 0;
      .bg_table{
        position: relative;

      }
      .table_name{
        margin-top: 10px;
        text-align: center;
      }
      .father{
        :nth-of-type(1){
          left: 37px;
          top: 246px;
        }
        :nth-of-type(2){
          left: 253px;
          top: 41px;
        }
        :nth-of-type(3){
          left: 253px;
          top: 157px;
        }
        :nth-of-type(4){
          left: 457px;
          top: 115px;
        }
        :nth-of-type(5){
          left: 457px;
          top: 184px;
        }
        :nth-of-type(6){
          left: 253px;
          top: 518px;
        }
        :nth-of-type(7){
          left: 457px;
          top: 269px;
        }
        :nth-of-type(8){
          left: 457px;
          top: 342px;
        }
        :nth-of-type(9){
          left: 457px;
          top: 412px;
        }
        :nth-of-type(10){
          left: 457px;
          top: 482px;
        }
        :nth-of-type(11){
          left: 457px;
          top: 554px;
        }
        :nth-of-type(12){
          left: 457px;
          top: 625px;
        }
        :nth-of-type(13){
          left: 457px;
          top: 702px;
        }
        :nth-of-type(14){
          left: 457px;
          top: 771px;
        }
      }
      .data_view{
        width: 76px;
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 10px;
        font-weight: bold;
        .icon-shangsheng{
          color: red;
        }
        .icon-web-icon-{
          color: green;
        }
      }
    }
</style>