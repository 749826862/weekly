<template lang="pug">
  .chartMain
    div.zhuzhuangtu(:class="className")
    p 配电自动化故障自愈实现率周趋势
</template>
<script>
import echarts from "echarts";
export default {
  props: {
    value: {
      type: Object,
      default: () => {
        return {};
      }
    },
    className: {
      type: String,
      default: () => {
        return "";
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
          console.log(document.querySelector("." + this.className), 888);
          let myChart = echarts.init(
            document.querySelector("." + this.className)
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
          backgroundColor: "#fff",
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "shadow",
              textStyle: {
                color: "#fff"
              }
            }
          },
          grid: {
            borderWidth: 0,
            top: 20,
            bottom: 30,
            left:60,
            textStyle: {
              color: "#fff"
            }
          },
          legend: {
            top: "5%",
            textStyle: {
              color: "#90979c"
            },
            data: ["女", "男", "平均"]
          },

          calculable: true,
          xAxis: [
            {
              type: "category",
              axisLine: {
                lineStyle: {
                  color: "#000"
                }
              },
              splitLine: {
                show: false
              },
              axisTick: {
                show: false
              },
              splitArea: {
                show: false
              },
              axisLabel: {
                interval: 0
              },
              data: [
                "1月份",
                "2月份",
                "3月份",
                "4月份",
                "5月份",
                "6月份",
                "7月份",
                "8月份"
              ]
            }
          ],
          yAxis: [
            {
              type: "value",
              splitLine: {
                show: false
              },
              axisLine: {
                lineStyle: {
                  color: "#000"
                }
              },
              axisTick: {
                show: false
              },
              axisLabel: {
                interval: 0
              },
              splitArea: {
                show: false
              }
            }
          ],
          series: [
            {
              name: "女",
              type: "bar",
              stack: "总量",
              barMaxWidth: 35,
              barGap: "10%",
              itemStyle: {
                normal: {
                  color: "#e15759",
                  label: {
                    show: true,
                    textStyle: {
                      color: "#fff"
                    },
                    position: "insideTop",
                    formatter: function(p) {
                      return p.value > 0 ? p.value : "";
                    }
                  }
                }
              },
              data: [709, 1917, 2455, 2610, 1719, 1433, 1544, 3285]
            },

            {
              name: "男",
              type: "bar",
              stack: "总量",
              itemStyle: {
                normal: {
                  color: "#4e79a7",
                  barBorderRadius: 0,
                  label: {
                    show: true,
                    position: "top",
                    formatter: function(p) {
                      return p.value > 0 ? p.value : "";
                    }
                  }
                }
              },
              data: [327, 1776, 507, 1200, 800, 482, 204, 1390]
            },
            {
              name: "总数",
              type: "line",
              stack: "总量",
              symbolSize: 10,
              symbol: "circle",
              itemStyle: {
                normal: {
                  color: "#008080",
                  barBorderRadius: 0,
                  label: {
                    show: true,
                    position: "top",
                    formatter: function(p) {
                      return p.value > 0 ? p.value : "";
                    }
                  }
                }
              },
              data: [1036, 3693, 2962, 3810, 2519, 1915, 1748, 4675]
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
  padding-bottom: 20px;
  border: 1px solid #ccc;
  box-sizing: border-box;
}
.zhuzhuangtu {
  width: 100%;
  height: 99%;
}
p {
  text-align: center;
}
</style>