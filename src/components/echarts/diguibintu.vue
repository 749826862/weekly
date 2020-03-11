<template lang="pug">
  .chartMain
    div.zhuzhuangtu(:class="randomClass()")
</template>
<script>
import echarts from "echarts";
export default {
  props: {
    option: {
      type: Object,
      default: () => {
        return {
        };
      }
    }
  },
  data() {
    return {
        className:""
    };
  },
  created() {},
  mounted() {
    this.initChart();
  },
  methods: {
    //   随机类名
    randomClass(){
        let timestamp = (new Date()).getTime();
        let num = Math.ceil(Math.random()*100)
        let str = 'bintu'+timestamp+num
        this.className = str
        return str
    },
    initChart() {
      this.setChart().then(
        option => {
          let myChart = echarts.init(
            document.querySelector("." + this.className)
          );
          myChart.setOption(option);

          window.addEventListener("resize", () => {
            myChart.resize();
          });
        },
        error => {
          // console.log(error);
        }
      );
    },
    strhr(e){
　　　　 var newStr=" ";
        var start,end;
 　　　　var name_len=e.name.length;    　　　　　　　　　　　　   //每个内容名称的长度
 　　　　var max_name=4;    　　　　　　　　　　　　　　　　　　//每行最多显示的字数
 　　　　var new_row = Math.ceil(name_len / max_name); 　　　　// 最多能显示几行，向上取整比如2.1就是3行
 　　　　if(name_len>max_name){ 　　　　　　　　　　　　　　  //如果长度大于每行最多显示的字数
  　　　　　　for(var i=0;i<new_row;i++){ 　　　　　　　　　　　   //循环次数就是行数
   　　　　　　　　var old='';    　　　　　　　　　　　　　　　　    //每次截取的字符
   　　　　　　　　start=i*max_name;    　　　　　　　　　　     //截取的起点
  　　　　　　　　 end=start+max_name;    　　　　　　　　　  //截取的终点
   　　　　　　　　if(i==new_row-1){    　　　　　　　　　　　　   //最后一行就不换行了
    　　　　　　　　　　old=e.name.substring(start);
   　　　　　　　　}else{
    　　　　　　　　　　old=e.name.substring(start,end)+"\n";    
  　　　　　　　　 }
   　　　　　　　　　　 newStr+=old; //拼接字符串
 　　　　　　  }
　　　   }else{                                          //如果小于每行最多显示的字数就返回原来的字符串
  　　　　　　newStr=e.name; 
 　　　  }
 　　　 return newStr;
    },
    setChart() {
      return new Promise((resolve, reject) => {
        let option = {
          tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
            show:false,
            orient: "vertical",
            left: "left"
          },
          series: [
            {
              name: "",
              type: "pie",
              radius: "50%",
              center: ["50%", "50%"],
              data: (() => {
                let arr = []
                this.option.names.forEach((item,i)=>{
                  arr.push({
                    name: item,
                    value: this.option.counts[i]
                  })
                })
                return arr 
              })(),
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: "rgba(0, 0, 0, 0.5)"
                }
              },
              label:{
                normal: {
                  formatter:(e)=>{
                      let str = ''
                      if (e.name.length <= 6 && e.name.length > 4) {
                        str = e.name.slice(0,3)+'\n'+e.name.slice(3,6)
                      }else if(e.name.length > 6){
                        str = e.name.slice(0,5)+'\n'+e.name.slice(5,10)
                      }
                      else{
                          str = e.name
                      }
                      return str+'\n'+e.value+'\n'+e.percent+'%'
                  },
                // position: 'inner', '{b|{b}}\n{c|{c}}\n{c|{d}%}'
                  rich: {
                    b: {
                        fontSize: 10,
                        color: '#000',
                        align: 'left',
                        padding: 2
                    },
                    c: {
                        fontSize: 10,
                        align: 'center',
                        padding:2,
                        color:'#000'
                    }
                }
                }
              }
            }
          ]
        };

        resolve(option);
      }).catch(err => {
        reject(err);
      });
    }
  }
};
</script>
<style lang='less' scoped>
.chartMain {
  width: 300px;
  height: 250px;
  transform: rotate(90deg);
//   flex: 1;
  // padding-bottom: 20px;
  // border: 1px solid #ccc;
  box-sizing: border-box;
//   position: relative;
//   position: absolute;
}
.zhuzhuangtu {
  width: 100%;
  height: 99%;
}
p {
  text-align: center;
  position: absolute;
  bottom: -25px;
  left: 50%;
  transform: translate(-50%);
}
.titleLeft {
  height: 20px;
  color: #000;
  position: absolute;
  left: -2%;
  top: 10%;
  transform: rotate(-90deg) translate(-50%, 0%);
}
</style>