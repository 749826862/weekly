<template lang="pug">
  .chartMain
    div.zhuzhuangtu(:class="chartsOption.className")
    p {{ chartsOption.tableName }}
</template>
<script>
import echarts from "echarts"
export default {
  props: {
    value: {
      type: Object,
      default: () => {
        return {
          xData:["石景山", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          serverData:[10,20,32,15,66,43,55]
        }
      }
    },
   
    chartsOption:{
      type:Object,
      default:()=>{
        return {
          className:"",
          isRow:true,
          tableName:"未知图表名称",
          legendName:"未知图例名称",
          company:""
        }
      }
    }
  },
  data() {
    return {};
  },
  created() {},
  mounted(){
    this.initChart()
  },
  methods: {
    initChart(){
      this.setChart().then(option => {
        let myChart = echarts.init(document.querySelector('.'+this.chartsOption.className))
        myChart.setOption(option)
        window.addEventListener("resize",()=>{
          myChart.resize()
        })
      },(error)=>{
        console.log(error)
      })
    },
    setChart() {
      return new Promise((resolve, reject) => {
        let option = {
          color: ["#3398DB"],
          tooltip: {
            trigger: "axis",
            axisPointer: {
              // 坐标轴指示器，坐标轴触发有效
              type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          grid: {
            left: "4%",
            top:"13%",
            right: "4%",
            bottom: "8%",
            containLabel: true
          },
          legend: {
            left:"41%",
            bottom: "0%",
            textStyle: {
              color: "#000"
            }
          },
          xAxis: [
            {
              type: "category",
              data: this.value.xData,
              axisTick: {
                alignWithLabel: false    //X轴标签居中显示
              },
              axisLabel:{
                formatter:(value) => {
                  return this.chartsOption.isRow? value:value.split("").join("\n")
                }
              }
            }
          ],
          yAxis: [
            {
              type: "value",
              name:this.chartsOption.company
            }
          ],
          series: [
            {
              name: this.chartsOption.legendName,
              type: "bar",
              barWidth: "30%",
              itemStyle: {
                normal: {
                  color: "rgba(79,129,189,1)"
                }
              },
              label: {
                normal: {
                  show: true,
                  position: "top",
                  formatter: "{c}",
                  color: "#000"
                }
              },
              data: this.value.serverData
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
.chartMain{
  width: 100%;
  height: 300px;
  // padding-bottom: 20px;
  
  position: relative;
  // margin-bottom: 20px;
}
.zhuzhuangtu,.canvasImg{
  width: 90%;
  height: 99%;
  border: 1px solid #ccc;
  margin: 0 auto;
}
p{
  text-align: center;
  // position: absolute;
  // font-size: 12px;
  // bottom: -25px;
  // left: 50%;
  // transform: translate(-50%);
}
</style>