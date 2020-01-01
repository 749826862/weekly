<template lang="pug">
  .login 
    h3 
      img(src="~@assets/baobiao.png")
      span  报表
    .login_content
      Form(ref="form" :model="form" label-width="100px")
        FormItem(label="报表类型:")
          RadioGroup(v-model="form.resource")
            Radio(label="1") 周报
            Radio(label="2") 月报
        FormItem(label="报表时间:")
          DatePicker(v-model="form.dataTime" type="week" format="yyyy 第 WW 周" placeholder="选择周" v-if="form.resource == 1")
          DatePicker(v-model="form.dataTime" type="month"  placeholder="选择月" v-else)
        FormItem
          Button(type="primary" @click="onSubmit") 生成
      //- .typesele
      //-   span 报表类型
      //-   Radio(v-model="radio" label="1") 周报
      //-   Radio(v-model="radio" label="2") 月报
        //- DatePicker(v-model="value1" type="week" format="yyyy 第 WW 周" placeholder="选择周")
    
</template>
<script>
import { DatePicker,Radio,RadioGroup,Form,FormItem,Button } from 'element-ui';
export default {
  components:{
    DatePicker,
    Radio,
    Form,
    FormItem,
    RadioGroup,
    Button
  },
  data() {
    return {
      form:{
        resource:"",
        dataTime:""
      }
    };
  },
  created() {},
  methods: {
    onSubmit(){
      if (this.form.resource == 1) {
        this.$router.push({path:"/weeklyhome"})
      }else{
        this.$router.push({path:"/monthhome"})
      }
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
   height: 500px;
   color: #fff;
   display: flex;
   justify-content: center;
   align-items: center;
   background: rgba(23,52,82, 0.7);
   box-shadow: 0px 0px 10px 2px #57DCFD;
   margin: 50px auto;
   .el-form{
     width: 50%;
     margin: 0 auto;
     color: #fff;
     .el-form-item__label{
       color: #fff!important;
     }
     .el-radio{
       color: #fff;
     }
   }
 }
}
</style>