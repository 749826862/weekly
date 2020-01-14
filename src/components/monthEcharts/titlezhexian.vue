<template lang="pug">
  .chartMain
    div.zhuzhuangtu(:class="this.chartsOption.className")
    p {{ chartsOption.tableName }}
</template>
<script>
import echarts from "echarts";
export default {
  props: {
    value: {
      type: Object,
      default: () => {
        return {
          xData: [
            "十月第一周",
            "十月第一周",
            "十月第一周",
            "十月第一周",
            "十月第一周",
            "十月第一周",
            "十月第一周"
          ],
          serverData: [
            [102, 52, 200, 334, 90, 100, 220]
          ]
        };
      }
    },
    chartsOption: {
      type: Object,
      default: () => {
        return {
          className: "", //类名
          isRow: true, // x轴标签横向纵向显示，true为横向，false为纵向
          legendName: ["北京地区10kv线路同期线损率(%)"], //图例显示文字
          tableName: "图1 北京地区同期线损率周趋势", //表格名称
          color:['#C0504D'],
          title:""
        };
      }
    }
  },
  data() {
    return {};
  },
  created() {},
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      this.setChart().then(
        option => {
          let myChart = echarts.init(
            document.querySelector("." + this.chartsOption.className)
          );
          myChart.setOption(option);

          window.addEventListener("resize", () => {
            myChart.resize();
          });
        },
        error => {
          console.log(error);
        }
      );
    },
    setChart() {
      return new Promise((resolve, reject) => {
        let option = {
          title:{
            textStyle:{
              fontWeight:'normal',
              fontSize:14
            },
            padding:[10,0,10,0],
            text:this.chartsOption.title,
            x:'center'
          },
          tooltip: {
            trigger: "axis",
            axisPointer: {
              // 坐标轴指示器，坐标轴触发有效
              type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          grid: {
            top: "17%",
            left: "3%",
            right: "4%",
            bottom: "5%",
            containLabel: true
          },
          legend: {
            show: true,
            bottom: 0,
            data:this.chartsOption.legendName
          },
          xAxis: [
            {
              type: "category",
              data: this.value.xData,
              axisTick: {
                alignWithLabel: false
              },
              axisLabel: {
                interval: 0,
                formatter: value => {
                  return this.chartsOption.isRow
                    ? value
                    : value.split("").join("\n");
                }
              }
            }
          ],
          yAxis: [
            {
              type: "value",
              axisLine: {
                //y轴
                show: true
              },
              axisTick: {
                //y轴刻度线
                show: true
              }
            }
          ],
          series: [
            {
              name: this.chartsOption.legendName[0],
              type: "line",
              barWidth: "20%",
              symbol:"circle",
              symbolSize:8,
              itemStyle: {
                normal: {
                  label: {
                    show: true,
                    position: "top"
                  },
                  color: this.chartsOption.color?this.chartsOption.color[0]:"#4F81BD"
                }
              },
              data: this.value.serverData[0]
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
  width: 100%;
  // height: 300px;
  // flex: 1;height: 300px;
  // padding-bottom: 20px;
  // border: 1px solid #ccc;
  box-sizing: border-box;
  position: relative;
  margin-bottom: 20px;
}
.zhuzhuangtu {
  width: 90%;
  height: 300px;
  border: 1px solid #ccc;
  margin: 0 auto;
}
p {
  text-align: center;
  margin-top: 5px;
  // position: absolute;
  // bottom: -25px;
  // left: 50%;
  // transform: translate(-50%);
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