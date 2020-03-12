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
          Select(v-model="year" placeholder="请选择年" style="width:30%")
            Option(v-for="(item,key) in dateObj" :key="key" :label="key" :value="key")
          Select(v-model="days" placeholder="请选择期" style="width:50%" @change="seleMonth" value-key="id")
            Option(v-for="(item,i) in dateObj[year]" :key="item.id" :label="item.name+`(${item.time}) ${item.type === 2 ?'--煤改电':''}`" :value="item")
        //- FormItem(label="类型:" class="datalist" v-if="form.resource == 2 &&  isMonth.indexOf(isFlag) !== -1")
        //-   Select(v-model="mtype" placeholder="选择月报类型" style="width:30%" v-if="form.resource == 2 &&  isMonth.indexOf(isFlag) !== -1")
        //-     Option(v-for="item in MonthType" :key="item.name" :label="item.name" :value="item.type")
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
import time from '../../static/weeklyCharts/time.json'
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
      allData:time,
      MonthType:[
        {type:1,name:"常规月报"},
        {type:2,name:'"煤改电"月报'},
      ],
      year:null,
      days:{},
      form:{
        resource:"1"
      },
      disable:false
    };
  },
  created() {
    // this.getData()   //时间
    // this.getMonth(this.allData)
    this.dateObj = this.getMonth(this.allData).week
  },
  methods: {
    lableChage(){
      this.days = {}
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
      // if (this.form.resource == 2 &&  this.isMonth.indexOf(this.isFlag) !== -1 && !this.mtype) return Notification.warning({
      //   title: '提示',
      //   message: '请选择月报类型!!!',
      //   duration: 2000
      // });
      this.disable = true
      setTimeout(()=>{
        if (this.form.resource == 1) {
        this.$router.push({name:"weeklyHome",params:{year:this.year,zq:this.days.name}})
        }else{
          this.$router.push({name:"monthHome",params:{year:this.year,zq:this.days.name,status:this.days.type}})
        }
      },100)
      
    },

    // 格式化日期列表
    getMonth(data){
      let obj = data
      for (const key in data) {
        let item = data[key]
        for (const key in item) {
          let ele = item[key]
          for (let i = 0; i < ele.length; i++) {
            const element = ele[i];
            element['id'] = i
          }
        }
      }
     return obj
    },

    // 选择月份
    seleMonth(data){
      console.log(data)
    },

    // 获取选择时间周期
    getData(){
      ajaxData("getData")().then(res=>{
        this.allData = res
        this.dateObj = this.getMonth(this.allData).week
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
     width: 75%;
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
      //  justify-content: space-between;
     }
     
   }
 }
}
</style>