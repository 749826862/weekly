<template lang="pug">
  .chartMain
    div.zhuzhuangtu(:class="this.chartsOption.className")
    p {{ chartsOption.tableName }}
    //- p.titleLeft 配变台区数(台)
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
            [102, 52, 200, 334, 90, 100, 220],
            [12, 52, 20, 124, 190, 10, 22]
          ]
        };
      }
    },
    chartsOption: {
      type: Object,
      default: () => {
        return {
          className: "", //类名
          company:"",
          isRow: true, // x轴标签横向纵向显示，true为横向，false为纵向
          legendName: ["北京地区10kv线路同期线损率(%)"], //图例显示文字
          tableName: "图1 北京地区同期线损率周趋势", //表格名称
          baifenbi:true
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
          tooltip: {
            trigger: "axis",
            axisPointer: {
              // 坐标轴指示器，坐标轴触发有效
              type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          grid: {
            top: "13%",
            left: "3%",
            right: "3%",
            bottom: "9%",
            containLabel: true
          },
          legend: {
            show: true,
            bottom: 0,
            data: this.chartsOption.legendName
          },
          xAxis: [
            {
              type: "category",
              data: this.value.xNames,
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
              name:this.chartsOption.company,
              type: "value",
              axisLine: {
                //y轴
                show: false
              },
              axisTick: {
                //y轴刻度线
                show: false
              }
            },
            {
              type: "value",
              axisLabel: {
                formatter: this.chartsOption.baifenbi?"{value}":"{value}%"
              },
              axisLine: {
                //y轴
                show: false
              },
              axisTick: {
                //y轴刻度线
                show: false
              }
            }
          ],
          series: [
            {
              name: this.chartsOption.legendName[0],
              type: "bar",
              barWidth: "30%",
              yAxisIndex: 0,
              symbol: "circle",
              symbolSize: 8,
              itemStyle: {
                normal: {
                  label: {
                    show: true,
                    color: "#000",
                    // position: ["10%", "50%"]
                  },
                  color: "rgba(79,129,189,1)"
                }
              },
              data: this.value.xValues1
            },
            {
              name: this.chartsOption.legendName[1],
              type: "line",
              symbol: "circle",
              yAxisIndex: 1,
              symbolSize: 8,
              itemStyle: {
                normal: {
                  label: {
                    show: true,
                    position: "top",
                    formatter: this.chartsOption.baifenbi?"{c}":"{c}%"
                  },
                  color: "rgba(192,80,77,1)"
                }
              },
              data: this.value.xValues2
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
  height: 300px;
  // flex: 1;
  // padding-bottom: 20px;
  // border: 1px solid #ccc;
  box-sizing: border-box;
  position: relative;
}
.zhuzhuangtu {
  width: 100%;
  height: 99%;
   border: 1px solid #ccc;
  margin: 0 auto;
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