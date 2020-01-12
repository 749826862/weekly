<template lang="pug">
  .login 
    h3 
      img(src="~@assets/baobiao.png")
      span  报表
    .login_content
      Form(ref="form" :model="form" label-width="100px")
        FormItem(label="报表类型:")
          RadioGroup(v-model="form.resource" @change="lableChage")
            Radio(label="1") 周报
            Radio(label="2") 月报
        FormItem(label="报表时间:" class="datalist")
          Select(v-model="year" placeholder="请选择年" style="width:50%")
            Option(v-for="(item,key) in dateObj" :key="key" :label="key" :value="key")
          Select(v-model="days" placeholder="请选择" style="width:50%")
            Option(v-for="item in dateObj[year]" :key="item.name" :label="item.name" :value="item.name")
        FormItem
          Button(type="primary" @click="onSubmit" :loading="disable") 生成
      //- .typesele
      //-   span 报表类型
      //-   Radio(v-model="radio" label="1") 周报
      //-   Radio(v-model="radio" label="2") 月报
        //- DatePicker(v-model="value1" type="week" format="yyyy 第 WW 周" placeholder="选择周")
    
</template>
<script>
import ajaxData from "@api/index"
import { Select,Option,Radio,RadioGroup,Form,FormItem,Button } from 'element-ui';
export default {
  components:{
    Select,
    Option,
    Radio,
    Form,
    FormItem,
    RadioGroup,
    Button
  },
  data() {
    return {
      dateObj:{},
      allData:{},
      year:null,
      days:null,
      form:{
        resource:"1"
      },
      disable:false
    };
  },
  created() {
    this.getData()   //时间
  },
  methods: {
    lableChage(){
      this.days = ""
      if (this.form.resource == 1) {
        this.dateObj = this.allData.week
      }else{
        this.dateObj = this.allData.month
      }
    },
    onSubmit(){
      this.disable = true
      setTimeout(()=>{
        if (this.form.resource == 1) {
        this.$router.push({path:"/weeklyhome",query:{year:this.year,week:this.days}})
        }else{
          this.$router.push({path:"/monthhome"})
        }
        // this.disable = true
      },100)
      
    },
    getData(){
      ajaxData("getData")().then(res=>{
        this.allData = res
        this.dateObj = res.week
      })
    }
  }
};
</script>
<style lang='less' scoped>
.login{
  width: 100%;
  height: 100%;
  background-image: url(~@assets/bg.jfif);
  background-size: cover;
  overflow: hidden;
 h3{
    width: 80%;  
    margin: 20px auto;
  //  display: flex;
  //  align-items: center;
   img{
     width: 60px;
     height: 60px;
     margin-right: 10px;
   }
   span{
     color: #fff;
     margin-left: 14px;
     display: block;
     font-size: 15px;
     font-family: "黑体";
   }
 }
 .login_content{
   width: 60%;
   height: 400px;
   color: #fff;
   display: flex;
   justify-content: center;
   align-items: center;
   background: rgba(23,52,82, 0.7);
   box-shadow: 0px 0px 10px 2px #57DCFD;
   margin: 50px auto;
   .el-form{
     width: 55%;
     margin: 0 auto;
     color: #fff;
     .el-form-item__label{
       color: #fff!important;
     }
     .el-radio{
       color: #fff;
     }
   }
   .datalist{
     /deep/.el-form-item__content{
       display: flex;
       justify-content: space-between;
     }
     
   }
 }
}
</style>