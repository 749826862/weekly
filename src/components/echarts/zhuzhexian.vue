<template lang="pug">
  .chartMain
    div.zhuzhuangtu(:class="className")
    p 配电自动化故障自愈实现率周趋势
</template>
<script>
import echarts from "echarts"
export default {
  props: {
    value: {
      type: Object,
      default: () => {
        return {};
      }
    },
    className:{
      type:String,
      default:()=>{
        return ""
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
        console.log(document.querySelector('.'+this.className),888)
        let myChart = echarts.init(document.querySelector('.'+this.className))
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
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true
          },
          xAxis: [
            {
              type: "category",
              data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
              axisTick: {
                alignWithLabel: true
              }
            }
          ],
          yAxis: [
            {
              type: "value"
            }
          ],
          series: [
            {
              name: "直接访问",
              type: "bar",
              barWidth: "30%",
              label: {
                normal: {
                  show: true,
                  position: "top",
                  formatter: "{c}",
                  color: "#000"
                }
              },
              data: [10, 52, 200, 334, 390, 330, 220]
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
  width: 800px;
  height: 300px;
  padding-bottom: 20px;
  border: 1px solid #ccc;
}
.zhuzhuangtu{
  width: 100%;
  height: 99%;
}
p{
  text-align: center;
}
</style>