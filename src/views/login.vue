<template lang="pug">
  .login 
    h3 
    //-   img(src="~@assets/baobiao.png")
    //-   span  报表
    .login_content
      Form(ref="form" :model="form" label-width="100px")
        FormItem(label="报表类型:")
          RadioGroup(v-model="form.resource" @change="lableChage")
            Radio(label="1") 周报
            Radio(label="2") 月报
        FormItem(label="选择周期:" class="datalist")
          Select(v-model="year" placeholder="请选择年" style="width:50%")
            Option(v-for="(item,key) in dateObj" :key="key" :label="key" :value="key")
          Select(v-model="days" placeholder="请选择期" style="width:50%")
            Option(v-for="item in dateObj[year]" :key="item.name" :label="item.name+`(${item.time})`" :value="item.name")
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
import { Select,Option,Radio,RadioGroup,Form,FormItem,Button,Notification } from 'element-ui';
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
      allData:{
      "week":
        {
          "2019":[
            {"name":"24周","time":"2019-07-18"},
            {"name":"40周","time":"2019-11-21"},
            {"name":"41周","time":"2019-11-28"}
          ],
          "2018":[
            {"name":"24周","time":"2018-07-18"},
            {"name":"40周","time":"2018-11-21"},
            {"name":"41周","time":"2018-11-28"}
          ]
      },
      "month":
        {
          "2019":[
            {"name":"8期","time":"2019-07-01"},
            {"name":"11期","time":"2019-10-01"},
            {"name":"12期","time":"2019-11-01"}
          ]
        }
      },
      year:null,
      days:null,
      form:{
        resource:"1"
      },
      disable:false
    };
  },
  created() {
    // this.getData()   //时间
    this.dateObj = this.allData.week
  },
  methods: {
    lableChage(){
      this.days = null
      this.year = null
      if (!this.allData.week) return 
      if (this.form.resource == 1) {
        this.dateObj = this.allData.week
      }else{
        this.dateObj = this.allData.month
      }
    },
    onSubmit(){
      if (!(this.year && this.days)) return Notification.warning({
        title: '提示',
        message: '请选择报表周期!!!',
        duration: 2000
      });
      this.disable = true
      setTimeout(()=>{
        if (this.form.resource == 1) {
        this.$router.push({name:"weeklyHome",params:{year:this.year,zq:this.days}})
        }else{
          this.$router.push({name:"monthHome",params:{year:this.year,zq:this.days}})
        }
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
    // margin: 60px auto;
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
   width: 50%;
   height: 45%;
   color: #fff;
   display: flex;
   justify-content: center;
   align-items: center;
   background: rgba(23,52,82, 0.7);
   box-shadow: 0px 0px 10px 2px #57DCFD;
   margin:70px auto;
   .el-form{
     width: 55%;
     margin: 0 auto;
     color: #fff;
     /deep/.el-form-item__label{
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